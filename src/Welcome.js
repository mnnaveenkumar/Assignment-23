import React from "react";  //ES6
// import React, { Component } from "react";  //ES6
// function Welcome(props){
//     return <h1>Hello {props.name}</h1>;
// }

class Welcome extends React.Component{
// class Welcome extends Component{
    render(){
        return <h1>Hello {this.props.name}</h1>;
    }
}

export default Welcome;

