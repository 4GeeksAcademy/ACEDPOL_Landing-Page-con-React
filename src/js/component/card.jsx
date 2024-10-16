import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import bigProjectImage from "../../img/big-project-image.png";

//create your first component
const Card = ({image}) => {
	return (
		<div className="col-lg-4 px-3 mb-4">
            <img src={image} className="img-fluid" alt="big-project-image.png"/>
            <div className="mt-4">
                <h5 className="fw-bold text-primary">Project Name</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta lectus quis augue scelerisque, at cursus sem fringilla.</p>
            </div>
        </div>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired
}

export default Card;
