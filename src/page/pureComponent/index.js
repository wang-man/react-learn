// 这个组件用来练习pureComponent的用法
import React, { PureComponent, Component } from 'react'
class TestPureComponent extends PureComponent {
  render() {
    const { userInfo } = this.props;

    console.log(userInfo);
    return (
      <div>
        这是纯组件
      </div>
    );
  }
}

export default withRouter(TestPureComponent)