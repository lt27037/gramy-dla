import React from 'react';

import '../styles/SponsorProfile.scss';

const SponsorProfile = ({src, alt, name}) => {

   return(
      <div className="sponsorProfile">
         <img src={src} alt={alt} className="sponsorProfile__photo"/>
         <span className="sponsorProfile__name">{name}</span>
      </div>
   );
};

export default SponsorProfile;