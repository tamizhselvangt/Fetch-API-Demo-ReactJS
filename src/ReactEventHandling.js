import React from "react";


export default class ReactEventHandling extends React.Component{
  constructor(props){
  super();
  this.state = {
    Content:"My Content",
    Name:"John Doe"
  }
  }
   
changeValue =()=>{
this.setState({Content:"New Content"});
  }
  render(){
    return(
      <div>
          <h1>{this.state.Content}</h1>
          <button onClick={this.changeValue}>Change</button>
      </div>
    );
  };
 
}
