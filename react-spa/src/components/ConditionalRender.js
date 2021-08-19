import './ConditionalRender.css';
import React, { Component } from 'react'
import RenderComponent from './RenderComponent';

class ConditonalRender extends Component {
   
    state = {
        name: "showHide",
        visible: true
    };
   
 


    render(){
        return(
            <div>
              {this.state.visible ? <RenderComponent/> : <div>I am hidden</div>}
              <button className="buttonSpace"
                onClick={() => {
                    this.setState({ visible: false});
                }} 
              >
                Hide  
              </button>  
              <button className="buttonSpace"
                onClick={() => {
                    this.setState({ visible: true});
                }}
              >
                Show
              </button>
            </div>
        )
    }
}

export default ConditonalRender;