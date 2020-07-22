import React, { Component } from 'react';
import image1 from '../assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';
import image2 from '../assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import image3 from '../assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png';
import image4 from '../assets/images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png';

export default class EssentialsComp extends Component {
    render() {
        return (
            <div>
                <section className='child essentials'>
                    <div className='description'>
                        {/* Left side of component: Titles and description */}
                        {/* Titles */}
                        <h5>For the body</h5>
                        <h2>An expression of care</h2>

                        {/* Description text */}
                        <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma</p> 
                    </div>

                    <div className='product-imgs'>
                        {/* Right side of component: Images */}
                        <img src={image1} alt='' height='300px' />

                        <img src={image2} alt='' height='300px' />

                        <img src={image3} alt='' height='300px' />

                        <img src={image4} alt='' height='300px' />

                    </div>

                </section>
            </div>
        )
    }
}
