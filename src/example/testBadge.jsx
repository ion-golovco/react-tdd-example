import React, { Component } from "react";


class Badge extends Component {
  constructor(props) {
    super(props);
  }
  doCeva = () => {};

  render() {
    return (
      <>
        <button onClick={() => doCeva()}>{this.props.text}</button>

        <button onClick={doCeva()}>{this.props.text}</button>
      </>
    );
  }
}



export default Badge;
