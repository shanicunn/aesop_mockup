import React from 'react';
import AesopGifts from '../assets/images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png'
import OdysseyFormat from './OdysseyFormat'

export default class Mythical extends React.Component {


    render() {
        return (
            <OdysseyFormat header= "Five mythical Gift Kits"
            text= "Crafted for gods, mortals, and muses alike, our new Gift Kit collection makes for inspired gift giving this festive season."
            list = {<button class="button">Explore seasonal Gift Kits    &rarr;</button>}
            photo = {AesopGifts} />
        )
    }
} 

//RP