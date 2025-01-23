import React from "react";
import "./App.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.click("child", this.props.name);
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.name}</button>;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      from: ""
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(from, e) {
    let name = typeof e === "object" ? e.target.name : e;
    this.setState({ name, from });
  }

  render() {
    return (
      <div className="App">
      {
        ["mailu", "ashu", "ammu"].map((name) => (
          <button key={name} name={name} onClick={(e) => this.btnClick("parent", e)}>
           {name}
          </button>
        ))
      }
      <h1>{this.state.from && `From: ${this.state.from}`}</h1>
      <h1>{this.state.name && `Name: ${this.state.name}`}</h1>
      {
        ["m", "a", "A"].map((name) => (
          <Button key={name} name={name} click={this.btnClick.bind(this)} />
        ))
      }
</div>
    );
  }
}
