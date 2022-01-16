// 这个组件用来练习ref属性的用法

import React from 'react';

class Refs extends React.Component {
  inputEleThree = React.createRef();
  inputEleFour = React.createRef();

  copyOne = () => {
    console.log('this.inputEleOne', this.inputEleOne)
    this.inputEleOne.select();
    document.execCommand('copy')
  }

  copyTwo = () => {
    console.log('this.refs', this.refs)
    this.refs.inputEleTwo.select();
    document.execCommand('copy')
  }

  copyThree = () => {
    console.log('this.inputEleThree', this.inputEleThree.current)
    this.inputEleThree.current.select();
    document.execCommand('copy')
  }

  render() {
    return (
      <div className="refs">
        <ul>
          <li>
            <input ref={e => this.inputEleOne = e} />
            <button onClick={this.copyOne}>点击复制内容</button>
          </li>
          {/* <li>
            <input ref='inputEleTwo' />
            <button onClick={this.copyTwo}>点击复制内容</button>
          </li> */}
          <li>
            <input ref={this.inputEleThree} />
            <button onClick={this.copyThree}>点击复制内容</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Refs;
