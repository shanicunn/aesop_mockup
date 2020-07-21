import React from 'react';
import NavBarComp from './NavBarComp';




class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    } 
    render() {
        return(
            
            <div className="child main">
            <NavBarComp />
                <h1>Aesop</h1>

                <h1>Formulations for skin, hair, home, and body</h1>

                <h2>Created with sensory pleasure in mind</h2>

                <button className="login">Login</button> 
            </div>
          
        )
    }
}
export default Main;