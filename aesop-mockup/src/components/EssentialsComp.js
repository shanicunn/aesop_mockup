import React from 'react';

export default function EssentialsComp(props) {
   
        return (
            <div className="child essentials">
                <section className='left'>
                
                    {/* Left side of component: Titles and description */}

                    {/* Titles */}
                    <h5>{props.firstTitle}</h5>
                    <h2>{props.secondTitle}</h2>
                    {/* Description text */}
                    <p>{props.description}</p> 
                    {/* Button under paragraph */}
                    <span> {props.spanText}</span> 
                </section>
                <section className='right'>
                {/* Right side of component: Image  */}
                </section>
                
            </div>
        )
 }