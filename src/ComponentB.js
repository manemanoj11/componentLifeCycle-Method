import React from "react";

class ComponentB extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };
    console.log("in constructor ComponentB");
  }

  static getDerivedStateFromProps(){
    console.log('in getDerivedS...,required return statement ComponentB')
    return null
  }
  componentDidMount(){
    console.log('in componentDidMount ComponentB')
  }
  render() {
    console.log("in render function ComponentB");
    return <h2> {this.state.name}</h2>;
  }

}
export default ComponentB;
