import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
  // const {index, url, city, address, bedrooms} = property;
  let index = 0;
    return (
      <div id={`card-${index}`} className="card">
        <img src={property.images.fixed_height_small_still.url} alt={property.title} title={property.title} />
        <div className="details">
          <span className="index">{index+1}</span>
          <p className="location">
            {property.title}<br />
            {property.title}
          </p>
          <ul className="features">
            <li className="icon-bed">{property.title} <span>bedrooms</span></li>
          </ul>
        </div>
      </div>
    );
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
