import React, { Component } from 'react';

export default class EssentialsComp extends Component {
    render() {
        return (
            <div>
                <section className='essentials'>
                    {/* Left side of component: Titles and description */}

                    {/* Titles */}
                    <h5>Resurrction Portable Hand Care</h5>
                    <h2>Pocket-sized essentials</h2>
                    {/* Description text */}
                    <p>A refreshing evaporative gel and richly nourishing balm; conveniently paired for use at home, at work or out and about.</p> 
                    {/* Button under paragraph */}
                    <span> Discover the duo -> </span> 

                    {/* Right side of component: Image  */}

                </section>
            </div>
        )
    }
}
