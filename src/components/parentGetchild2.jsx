import React, { createRef } from "react";
import "./index.scss";

class FancyInput extends React.Component {
  state = {
    name: "man",
  };

  componentDidMount() {
    // 将this传入
    this.props.getThis(this);
  }

  someMethods = () => {
    console.log("子组件方法");
  };

  render() {
    return <div>我是子组件</div>;
  }
}

class Parent extends React.Component {
  state = {
    name: "",
  };
  clickHandle = () => {
    console.log(this.child);
    this.child.someMethods();
    this.setState({
      name: this.child.state?.name,
    });
  };

  // 这个方法就是子组件中执行的getThis，child就是子组件传入的this
  getChildInstance = (child) => {
    this.child = child;
  };

  render() {
    return (
      <div className="component">
        <h2>
          class组件，父组件获取子组件状态、调用子组件方法：传给子组件一个函数，函数中将子组件自己父组件的一个变量
        </h2>
        <button
          onClick={this.clickHandle} // 调用子组件的方法
        >
          点击我获取子组件传给的数据和方法
        </button>
        <div>子组件的name是：{this.state.name}</div>
        <FancyInput getThis={this.getChildInstance} />
      </div>
    );
  }
}

export default Parent;
