// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactEventHandling from './ReactEventHandling';
class ReactState extends React.Component{
  constructor(){
    super();
    this.state = {
      MyWebSite:"Welcome To My Page",
      MyContent:"www.tamil.com"
    };

  }

 changeVal = ()=>{
    this.setState({MyWebSite:"This is MyWebsite"});
 }

  render(){
    return (
    <div>
        <h1>{this.state.MyWebSite}</h1>
        <h3>{this.state.MyContent}</h3>
        <button type='button' onClick={this.changeVal}>Change</button>
    </div>);
  }
}


class ReactProps extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
function App() {
  return (
    <div>
 <ReactState />
 <ReactProps name="Tamizhselvan Gurusamy"/>
 <ReactEventHandling />
</div>
  
  );
}

export default App;
