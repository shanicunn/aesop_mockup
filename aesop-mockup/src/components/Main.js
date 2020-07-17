import React from 'react';

const background = '/aesop-mockup/src/assets/images/Aesop-Homepage-Banner.jpg';

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    } 
    render() {
        return(
            
            <div style={{'backgroundImage': `url(${background})`}}>
                <h1>Aesop</h1>

                <h1>Formulations for skin, hair, home, and body</h1>

                <h2>Created with sensory pleasure in mind</h2>

                <button>Login</button>
            </div>
          
        )
    }
}
export default Main;