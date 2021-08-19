import './List.css';
import React, { Component } from 'react'

class List extends Component {
    
    // Next step to read in array of strings through API

    // This will set each string as an individual list item using map
    strings = ["Hello World", "Foobar", "Whats up", "Another Hello"];
 


    render(){
        return(
          <div>  
            {this.strings.length > 0 && (
                <div>
                <h3 className="header">List using Map to iterate</h3>
                <ul>
                  {this.strings.map((item) => <li className="listColor">{item}</li>)}
                </ul>
            </div>
            )}
          </div> 
        )

    }
}

export default List;