import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div data-testid="box" className="box">
            {this.props.text}
        </div> );
    }
}
 
export default Box;