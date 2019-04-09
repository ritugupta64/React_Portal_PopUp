import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';


const portal = document.getElementById("portal");

const styles = {
    toggleColor:{
      padding:"5px",
      color:"red",
      border:"1px solid green",
      display:"inlineBlock"
      },
  
      toggleContent:{
        padding:"5px",
        color:"yellow",
        border:"1px solid green",
        display:"inlineBlock",
        backgroundColor:"grey",
        width:"100%",
        height:"100%"
      }
    }

class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle:false
    }

    this.el = document.createElement("div");
    //this.el.classList.add('bar');
    this.el.setAttribute("Class", "bar")


  }

  componentDidMount(){
   portal.appendChild(this.el);
  }

  componentWillUnmount(){
    portal.removeChild(this.el);
  }
  


  
  render() {
     
    return ReactDOM.createPortal(
        <div className="popUp">
                {this.props.children}
                <button onClick={this.props.close} type="button" style={{...styles.toggleColor, backgroundColor:"green",padding:10, border:"1px solid black",color:"#ffffff",margin:"20px 0px"}}>Close</button>
        </div>,
        portal
        )
  }
}

export default Portal;
