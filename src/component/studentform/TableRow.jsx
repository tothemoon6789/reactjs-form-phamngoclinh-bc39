import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modifyStudent, deleteStudent, addOrUpdate,mesAlert } from '../../redux/reducer/student/action'
class TableRow extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { student, modifyStudent, deleteStudent, addOrUpdate, mesAlert, scrollIntoView } = this.props
        return (
            <tr className='animate__animated animate__fadeIn'>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                    <button
                        onClick={() => {
                            modifyStudent(student.id)
                            addOrUpdate(false)
                            scrollIntoView()
                        }}
                        className="btn btn-default border rounded">Sửa
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => {
                            deleteStudent(student.id)
                            mesAlert({
                                mesAlert: "Xóa thành công!",
                                display: true,
                            })
                        }}
                        className='btn btn-default text-danger border'>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        modifyStudent: (id) => {
            dispatch(modifyStudent(id))
        },
        deleteStudent: (id) => {
            dispatch(deleteStudent(id))
        },
        addOrUpdate: (boolean) => {
            dispatch(addOrUpdate(boolean))
        },
        mesAlert: (alert) => {
            dispatch(mesAlert(alert))
        }
    }
}
export default connect(null, mapDispatchToProps)(TableRow);