import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property, index}) => {
    console.log("  ############  INDEX INSIDE CARD :  >>>> " + JSON.stringify(index));
    return (
      <div id={`card-${index}`} className="card">
        <img src={property.images.fixed_height_small_still.url} alt={property.title} title={property.title} />
        <div className="details">
          <span className="index">Rating: {property.rating}</span>
          <p className="location">
            {property.title}<br />
            {property.title}
          </p>
          <ul className="features">
            <li className="icon-bed">{property.title} </li>
          </ul>
        </div>
      </div>
    );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Card;
