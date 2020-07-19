import React, { Component } from 'react'

export default class NavBarComp extends Component {
    render() {
        return (
            <div>
                <ul className='navBar'>
                    <a href='#'>
                        <li>Shop</li>
                    </a>
                    <a href='#'>
                        <li>Read</li>
                    </a>
                    <a href='#'>
                        <li>Stores</li>
                    </a>
                    <a href='#'>
                        <li>Search</li>
                    </a>
                </ul>

                
            </div>
        )
    }
}
