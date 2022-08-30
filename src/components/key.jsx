import React, { Component, Fragment } from "react";

class UncontrolledEmailInput extends Component {
  state = {
    email: this.props.defaultEmail,
  };
  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <label>
        Email: <input onChange={this.handleChange} value={this.state.email} />
      </label>
    );
  }
}

class AccountsList extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    const { accounts } = this.props;
    const { selectedIndex } = this.state;
    const selectedAccount = accounts[selectedIndex];
    return (
      <div className="component">
        <h2>
          This demo illustrates resetting an uncontrolled component with a key{" "}
          <br />
          这个demo演示用key重置一个非受控组件
        </h2>
        <blockquote>First, make an edit to the account "One" email.</blockquote>
        <UncontrolledEmailInput
          key={selectedAccount.id} // 关键之处
          defaultEmail={selectedAccount.email}
        />
        <blockquote>Next, select account "Two" below.</blockquote>
        <p>
          Accounts:
          {this.props.accounts.map((account, index) => (
            <label key={account.id}>
              <input
                type="radio"
                name="account"
                checked={selectedIndex === index}
                onChange={() => this.setState({ selectedIndex: index })}
              />
              {account.name}
            </label>
          ))}
        </p>
      </div>
    );
  }
}

export default AccountsList;
