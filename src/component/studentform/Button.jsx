import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {addNewStudent} = this.props
    return (
      <>
        <button
          onClick={() => addNewStudent()}
          className="btn btn-success animate__animated animate__bounceInRight animate__faster">Thêm sinh viên +</button>
      </>
    );
  }
}

export default Button;