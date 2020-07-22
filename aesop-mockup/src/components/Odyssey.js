import React from 'react';
import AesopPhoto from '../assets/images/aesop_image.png'
import OdysseyList from './OdysseyList'
import OdysseyFormat from './OdysseyFormat';

export default class Mythical extends React.Component {


    render() {
        return (
            <OdysseyFormat header= "An odyssey of gifts, for generous and inspired giving"
            list= {<OdysseyList />}
            photo= {AesopPhoto} /> 
        )
    }
}
//RP