import { Component, useState } from "react";

function FunComp() {
  // 产品名称、价格
  const [price, setPrice] = useState(0);

  const increase1 = () => {
    setPrice((prev) => {
      return prev + 1;
    });
    setPrice((prev) => {
      return prev + 1;
    });
  };
  const increase2 = () => {
    setPrice(price + 1);
    setPrice(price + 1);
  };
  const increase3 = () => {
    setTimeout(() => {
      setPrice(price + 1); // 连续点击，不会按点击次数增加
      console.log("price", price); // 总是比实际要慢，react18
    }, 2000);
  };
  const increase4 = () => {
    setTimeout(() => {
      setPrice((prev) => {
        return prev + 1; // 连续点击，会按点击次数增加
      });
      console.log("price", price); // 总是比实际要慢
    }, 2000);
  };

  return (
    <div className="component">
      <h2>演示函数组件中useState不同的用法</h2>
      <button onClick={increase3}>价钱+1： {price}</button>
      <div>演示useState异步的问题及其不同用法</div>
      <div>
        React
        18新加入自动批处理功能，React会将多个状态，更新到单一的重新渲染作业中，以获得更好的性能，过去没有自动批处理，开发者只能在React事件处理程序中批处理更新，而在默认状态下，Promise、setTimeout、原生事件处理程序，或任何React内部事件的更新，都不会以批处理，而在React
        18中，这些更新都将可以自动批处理。
      </div>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    price: 0,
  };
  increase1 = () => {
    this.setState({
      price: this.state.price + 1,
    });
    this.setState({
      price: this.state.price + 1,
    });
    console.log("price", this.state.price); // 18版本以下在setTimeou或原生DOM事件中是同步的
  };
  increase2 = () => {
    setTimeout(() => {
      this.setState({
        price: this.state.price + 1,
      });
      this.setState({
        price: this.state.price + 1,
      });
      console.log("price", this.state.price); // 18版本以下在setTimeou或原生DOM事件中是同步的
    }, 0);
  };

  render() {
    const { price } = this.state;
    return (
      <>
        <div className="component">
          <h2>演示class组件中useState不同的用法。</h2>
          <button onClick={this.increase2}>价钱+1： {price}</button>
          <div>演示setState</div>
          <ul>
            <li style={{ color: "#f50" }}>
              （仅限18以下） 其实可以分成两种情况
            </li>
            <li>在组件生命周期或React合成事件中, setState是异步的</li>
            <li>在setTimeou或原生DOM事件中, setState是同步的</li>
            <li style={{ color: "#f50" }}>
              18则不分场景全部批处理（也就是异步的），除非使用特别的API：flushSync
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export { FunComp, ClassComp };
