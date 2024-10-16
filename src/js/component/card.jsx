import React from "react";
import PropTypes from "prop-types";

//create your first component
const Card = ({image, title, cardText}) => {
	return (
		<div className="col-lg-4 px-3 mb-4">
            <img src={image} className="img-fluid" alt="big-project-image.png"/>
            <div className="mt-4">
                <h5 className="fw-bold text-primary">{title}</h5>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired
}

export default Card;
