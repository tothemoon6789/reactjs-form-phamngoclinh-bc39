import React, { Component } from 'react';

class Validate extends Component {
    render() {
        const {mes,visible}= this.props
        return (
            <p className="text-danger font-weight-light font-italic animate__animated animate__headShake" style={visible?{display:"none"}:{display:"block"}}>{mes}</p>
        );
    }
}

export default Validate;