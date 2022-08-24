import React, { createRef } from "react";
import "./index.scss";

class FancyInput extends React.Component {
  state = {
    name: "man",
  };

  someMethods = () => {
    console.log("子组件方法");
  };

  render() {
    return <div>我是子组件</div>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = createRef();
  }
  state = {
    name: "",
  };
  clickHandle = () => {
    console.log(this.childRef.current);
    this.childRef.current.someMethods();
    this.setState({
      name: this.childRef.current.state?.name,
    });
  };
  render() {
    return (
      <div className="component">
        <h2>class组件，父组件获取子组件状态、调用子组件方法：使用ref属性</h2>
        <button
          onClick={this.clickHandle} // 调用子组件的方法
        >
          点击我获取子组件传给的数据和方法
        </button>
        <div>子组件的name是：{this.state.name}</div>
        <FancyInput ref={this.childRef} />
      </div>
    );
  }
}

export default Parent;
