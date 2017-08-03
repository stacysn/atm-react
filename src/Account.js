import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }
  render() {

    let balanceClass = 'balance';
    if (this.state.balance <= 0) {
      balanceClass += ' zero';
      balanceClass
    }

    return (

      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)}/>
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawalClick(e)}/>
      </div>
    )
  }

  handleDepositClick(e){
    e.preventDefault();
    let amount = parseInt(this.inputBox.value, 10);
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = "";
  }

  handleWithdrawalClick(e) {
    e.preventDefault()
    let amount = parseInt(this.inputBox.value, 10);
    let newBalance = this.state.balance - amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = "";
  }
}
