import React, { Fragment } from 'react';
import Header from './components/header'
import Refs from './components/refs'
import TestPureComponent from './components/pureComponent'
import NormalComponent from './components/normalComponent'
import './index.scss';

class Listpage extends React.Component {
  state = {
    userInfo: [{ name: 'man' }]
  }

  changeUserInfo = () => {
    const userInfo = this.state.userInfo;
    userInfo.push({ age: 20 });
    console.log('userInfo', userInfo)
    this.setState({
      userInfo: userInfo
    })
  }
  render() {
    const { userInfo } = this.state;
    return (
      <Fragment>
        <div className="listpage">
          <Header title="hello" />
          <Refs />
          <button onClick={this.changeUserInfo}>测试pureComponent</button>
          <NormalComponent userInfo={userInfo} />
          <TestPureComponent userInfo={userInfo} />
        </div>
      </Fragment>
    );
  }
}

export default Listpage;
