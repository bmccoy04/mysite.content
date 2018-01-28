import React from 'react';

import '../Styles/PortraitCircle.css';

const PortraitCircle = (imageUrl) => (
    <div className = "circle-conatiner">
        <div className = "circleBase type1">
             {/* <img src={require('../Content/Xraamim2_400x400')} /> */}
             <img className="circle-pic" src="https://pbs.twimg.com/profile_images/951444663197683712/Xraamlm2_400x400.jpg" />
            {/* <img src={pic} /> */}
        </div>
    </div>
);

export default PortraitCircle;