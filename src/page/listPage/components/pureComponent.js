import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

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