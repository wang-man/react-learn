// 这个组件用来练习pureComponent的用法
import React, { PureComponent, Component } from 'react'

class TestPureComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
  }
  changeState = () => {
    this.setState({
      isShow: true
    })
  };
  render() {
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>{this.state.isShow.toString()}</div>
      </div>
    );
  }
}

export default TestPureComponent