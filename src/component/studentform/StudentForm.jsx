import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import Button from './Button';
import { connect } from 'react-redux';
import { addNewStudent, updateStudent, addOrUpdate, mesAlert } from '../../redux/reducer/student/action'
import Search from './Search';
import Validate from './Validate';
import Alert from './Alert';
// ! component
class StudentForm extends Component {
    // ! lifecycle
    // TODO: khởi tạo state
    /******************************************
     * KHỞI TẠO STATE BAO GỒM 5 BIẾN THAY ĐỔI *
     *         ID, NAME, PHONE, EMAIL         *
     ******************************************/
    constructor(props) {// ? mounting
        //console.log("contructor");
        super(props);
        this.state = {
            student: {
                id: "",
                name: "",
                phone: "",
                email: "",
            },
            validate: {
                id: true,
                isIdNotExist: true,
                name: true,
                phone: true,
                email: true,
            }
        }
        this.inputRef = React.createRef()
    }
   
    // TODO: render giao diện theo state
    /********************************************
     *        RENDER INPUT FORM TỪ STATE        *
     * RENDER TABLE TỪ REDUX, GỌI REDUX ĐỘC LẬP *
     ********************************************/
    render() {// ? mounting, updating
        //console.log("render");
        const { add, alert } = this.props
        const { student, validate } = this.state
        return (
            <div className="container">
                <Header />
                <div className='row'>
                    <div className="col-md-6">
                        <div
                        ref={this.inputRef}
                        className="form-group">
                            <label>Mã sinh viên</label>
                            <input
                            
                                onChange={this.handelOnchange}
                                name="id"
                                value={student.id}

                                type="text" className="form-control" placeholder="Nhập MSV" />
                            <Validate mes="* Chỉ chấp nhập số !" visible={validate.id} />
                            <Validate mes="* ID bị trùng, vui lòng nhập ID khác !" visible={validate.isIdNotExist} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Họ tên</label>
                            <input
                                onChange={this.handelOnchange}
                                name="name"
                                value={student.name} type="text" className="form-control" placeholder="Nhập Họ Tên" />
                            <Validate mes="* Không được chứa số và ký tự đặc biệt !" visible={validate.name} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input
                                onChange={this.handelOnchange}
                                name="phone"
                                value={student.phone} type="text" className="form-control" placeholder="Nhập số điện thoại" />
                            <Validate mes="* Chỉ chấp nhận số điện thoại !" visible={validate.phone} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                onChange={this.handelOnchange}
                                name="email"
                                value={student.email} type="text" className="form-control" placeholder="Nhập email" />
                            <Validate mes="* Chỉ chấp nhận email !" visible={validate.email} />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        {/* //!BẤM THÊM MỚI */}
                        {/* //! BẤM CẬP NHẬT */}
                        {add ?
                            <Button addNewStudent={this.addNewStudent} /> :
                            <button
                                onClick={this.updateStudent}
                                className='btn btn-danger animate__animated animate__backInLeft'>
                                Update
                            </button>}


                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
                <Table scrollIntoView={this.scrollIntoView}/>
                {alert.display ? <Alert /> : null}
               
            </div>
        );
    }
    // TODO: update state từ redux
    /*********************************************************
     *          NẾU ID CỦA PROPS CŨ STUDENTDEFAULT           * //! cảnh báo: dữ liệu tại reducer
     * KHÁC ID CỦA PROPS MỚI STUDENTDEFAULT THÌ CHO SETSTATE * //! cảnh báo: dữ liệu tại reducer
     *********************************************************/
    componentDidUpdate(prevProps, prevState) {// ? updating
        
        //console.log("componentDidUpdate");
        // * handle data
        if (prevProps.studentDefault && prevProps.studentDefault.id !== this.props.studentDefault.id) {
            this.setState({
                student: this.props.studentDefault
            })
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearTimeout(this.handleMes())
    }
    // ! method
    // TODO: thêm sinh viên
    /***********************************************************
     * GỬI DISPATCH TO REDUCER VÀ THÊM MỚI DỮ LIỆU TẠI REDUCER *
     *       SETSTATE THÀNH CÁC CHUỖI RỖNG CHO COMPONENT       *
     ***********************************************************/
    addNewStudent = () => {
        //console.log("addNewStudent");
        const { addNewStudent, mesAlert } = this.props
        // * kiểm tra định dạng
        if (!this.validateInput("add")) { return }
        // * thêm mới sinh viên
        addNewStudent(this.state.student)
        // * cập nhật trạng thái alert
        mesAlert({
            mesAlert: "Thêm thành công!",
            display: true,
        })
        // * đưa trường input về trạng thái đầu
        this.setState({
            student: {
                ...this.state.student,
                id: "",
                name: "",
                phone: "",
                email: "",
            }
        })
    }
    // TODO: cập nhật sinh viên
    updateStudent = () => {
        const { addOrUpdate, updateStudent, mesAlert } = this.props;
        // * Kiểm tra định dạng
        if (!this.validateInput("update")) { return }
        // * Cập nhật student
        updateStudent(this.state.student)
        // * cập nhật trạng thái add tại reducer
        addOrUpdate(true)
        // * cập nhật thông báo cho reducer
        mesAlert({
            mesAlert: "Update thành công!",
            display: true,
        })
        // * đưa các trường input về rỗng
        this.setState({
            student: {
                ...this.state.student,
                id: "",
                name: "",
                phone: "",
                email: "",
            }
        })
    }
    // TODO: set state từ input
    /******************************************
     *   BÓC TÁCH DỮ LIỆU TỪ ELEMENT.TARGET   *
     * SETSTATE THEO CÚ PHÁP ES6 [NAME]:VALUE *
     ******************************************/
    handelOnchange = (e) => {
        //console.log("handelOnchange");
        const { name, value } = e.target
        this.setState({
            student: {
                ...this.state.student,
                [name]: value,
            }
        })
    }
    // TODO: validate
    validateInput = (aim) => {
        const { id, name, phone, email } = this.state.student
        const { studentArr } = this.props

        const regexId = /^[0-9]+$/ //TODO: Chỉ chấp nhập số !
        const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/ //TODO: Không được chứa số và ký tự đặc biệt !
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/ //TODO: Chỉ chấp nhận số điện thoại !
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //! Chỉ chấp nhận email !
        // TODO: test trùng id
        const testIdExist = studentArr.findIndex((student) => {
            return +student.id === +id
        })
        let testID = regexId.test(id)
        let testName = regexName.test(name)
        let testPhone = regexPhone.test(phone)
        let testEmail = regexEmail.test(email)
        if (aim === "update") {
            this.setState({
                ...this.state,
                validate: {
                    ...this.state.validate,

                    id: testID,
                    name: testName,
                    phone: testPhone,
                    email: testEmail,
                }
            })
            return testID && testName && testPhone && testEmail
        }
        this.setState({
            ...this.state,
            validate: {
                ...this.state.validate,
                isIdNotExist: testIdExist,
                id: testID,
                name: testName,
                phone: testPhone,
                email: testEmail,
            }
        })
        return testIdExist && testID && testName && testPhone && testEmail
    }
    handleMes = () => {
        return setTimeout(() => {
            this.props.mesAlert(
                {
                    mesAlert: "SOMETHINGE",
                    display: false,
                }
            )
        }, 2000);
    }
    scrollIntoView = () => {
        console.log("ABC");
       return this.inputRef.current.scrollIntoView()
    }
}
// ! redux
// TODO: gán state vào props
const mapStateToProps = (state) => {
    return {
        studentDefault: state.studentReducer.studentDefault,
        studentArr: state.studentReducer.studentArr,
        add: state.studentReducer.add,
        alert: state.studentReducer.alert,
    }
}
// TODO: gán method vào props
const mapDispatchToProp = (dispatch) => {
    return {
        addNewStudent: (student) => {
            dispatch(addNewStudent(student))
        },

        updateStudent: (student) => {
            dispatch(updateStudent(student))
        },
        addOrUpdate: (boolean) => {
            dispatch(addOrUpdate(boolean))
        },
        mesAlert: (alert) => {
            dispatch(mesAlert(alert))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(StudentForm);