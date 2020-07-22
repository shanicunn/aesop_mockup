import React from 'react';
import NavBarComp from './NavBarComp';
import Background from '../assets/images/Aesop-Homepage-Banner.jpg';



class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    } 
    render() {
        return(
            
            <div className="child main" 
            style={{backgroundImage: "url(" + Background + ")",
            backgroundSize: '100% 100%',
            }}>
            <NavBarComp />
                <h1 className="aesop">Aesop</h1>

                <h1 className="title">Formulations for skin, hair, home, and body</h1>

                <h2 className="description">Created with sensory pleasure in mind</h2>

                {/* <button className="login">Login</button>  */}
            </div>
          
        )
    }
}
export default Main;