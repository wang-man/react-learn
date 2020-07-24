import React, {PureComponent, Component} from 'react'

class TestPureComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
    console.log('constructor');
  }
  changeState = () => {
    this.setState({
      isShow: true
    })
  };
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>{this.state.isShow.toString()}</div>
      </div>
    );
  }
}

export default TestPureComponent