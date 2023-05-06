import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "mane",
    };
    console.log("in constructor");
  }

  static getDerivedStateFromProps(){
    console.log('in getDerivedStateFromProps, this required return statement')
    return null
  }
  componentDidMount(){
    console.log('in componentDidMount')
  }
  render() {
    console.log("in render function");
    return <h2> {this.state.name}</h2>;
  }

}
export default ComponentA;
