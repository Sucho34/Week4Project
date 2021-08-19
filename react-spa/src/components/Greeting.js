import React, { Component } from 'react'

class Greeting extends Component {
   

 


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

export default Greeting;