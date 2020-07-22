import React from 'react';

// Format for Odyssey and FiveMythical Component props
    function OdysseyFormat(props) {
        return(
            <div className = 'mythicalContainer'>
                <section className = "mythSectionLeft">
                    <div className = "leftWrapper">
                        <div className = "mythHeaderContainer">
                            <h2 className = "mythHeader">{props.header}</h2>
                        </div>
                        <div className = "mythTextContainer">
                            <p className = "mythText">{props.text}</p>
                        </div>
                        <div className = "mythList">
                            {props.list}
                        </div>
                    </div>
                </section>
                    <div className = "imgContainer">
                        <img className = "mythPhoto" alt="AesopGifts" src={props.photo}></img>
                    </div>
            </div>
        )
    }

export default OdysseyFormat;
//RP