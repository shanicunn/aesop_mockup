import React from 'react'

//List for the Odyssey Component
function OdysseyList() {
    const gifts = ['Seasonal Gift Kits', 'Aesop favourites', 'Small gestures', 'Generous offerings', 'Fragrant formulations', 'Treats for self', 'All gifts'];
    //Returns each list item in h5
    const giftList = gifts.map(gift => <h5>{gift}</h5>)
    return (
        <div>
            { giftList }
        </div>
    )
}


export default OdysseyList
//RP