import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mesAlert } from '../../redux/reducer/student/action'

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 2,
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    // * handle mes
    this.handleTimeOut()
    this.handleInterval()

  }
  componentWillUnmount() {
    console.log("componentWillUnmount child");
    clearTimeout(this.handleMes)
    clearInterval(this.handleInterval)
  }
  render() {
    const { alert } = this.props
    return (
      <div
        className="alert alert-success fixed-bottom container"
        role="alert" >
        <strong>{alert.mesAlert} {this.state.time}s</strong>
      </div>

    );
  }
  handleTimeOut = () => {
    return setTimeout(() => {
      this.props.mesAlert(
        {
          mesAlert: "SOMETHINGE",
          display: false,
        }
      )
    }, 3000);
  }
  handleInterval = () => {
    return setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      })
    }, 1000);
  }
}
const mapStateToProps = (state) => {
  return {
    alert: state.studentReducer.alert,
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    mesAlert: (alert) => {
      dispatch(mesAlert(alert))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(Alert);
// export default Alert