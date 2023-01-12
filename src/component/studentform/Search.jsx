import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchStudent } from '../../redux/reducer/student/action';
class Search extends Component {
    render() {
        return (

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Tìm kiếm</span>
                </div>
                <input
                    onChange={(element) => {
                        this.props.searchStudent(element.target.value)
                    }}
                    type="text" className="form-control" placeholder="Nhập tên sinh viên" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        searchStudent: (key) => {
            dispatch(searchStudent(key))
        }
    }
}
export default connect(null, mapDispatchToProps)(Search);