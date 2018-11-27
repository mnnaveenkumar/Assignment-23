import React from "react";

//Class Component
// class Users extends React.Component{
//     render (){
//         return <h4>Name: {this.props.name} Age: {this.props.age}</h4>;
//     }
// }


//Functional Component
function Users(props) {
    return <h4>Name: {props.name} Age: {props.age}</h4>;
}

export default Users;