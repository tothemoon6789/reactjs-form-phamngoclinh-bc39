import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
    super(props);

  }
  renderTable = () => {
    const {studentArr,keyWord,scrollIntoView} = this.props 
    let studentSearch = studentArr.filter((student) => {
      return student.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
    })
    return studentSearch.map((student,index) => {
      return <TableRow key={index} student={student} scrollIntoView={scrollIntoView}/>
    })
   
  }
  render() {
    const { studentArr } = this.props
    return (
      <table className="table table-striped table-hover animate__animated animate__fadeIn">
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {
           this.renderTable()
          }
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    studentArr: state.studentReducer.studentArr,
    keyWord : state.studentReducer.keyWord,
  }
}
export default connect(mapStateToProps, null)(Table);