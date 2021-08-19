import React, { Component } from 'react'

class List extends Component {
   
    strings = ["Hello World", "Foobar", "Whats up"];
 


    render(){
        return(
            <div>
                <ul>
                  {this.strings.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )

    }
}

export default List;