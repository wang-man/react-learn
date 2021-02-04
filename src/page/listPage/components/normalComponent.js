import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NormalComponent extends Component {

  goEditor = () => {
    // console.log(this.props)
    this.props.history.push({
      pathname: '/editor',
      query: { a: 1 },
      state: { b: 1 }
    })
  };
  render() {
    const { userInfo } = this.props;

    console.log(userInfo);
    return (
      <div>
        <button onClick={this.goEditor}>进入Editor</button>
      </div>
    );
  }
}

export default withRouter(NormalComponent)