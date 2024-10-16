import React from "react";
import PropTypes from "prop-types";

//create your first component
const Jumbotron = ({title, jumboText, buttonText}) => {
	return (
        <div className="st-jumbo">
        <div className="container" style={{height: 100 + '%'}}>
            <div className="d-flex flex-column justify-content-center" style={{height: 100 + '%'}}>
            <div className="row px-3">
                    <div className="bg-light rounded-3 py-5 px-5">
                        <h1 className="display-5 fw-bold">{title}</h1>
                        <p className="col-md-8 fs-4">{jumboText}</p>
                        <button className="btn btn-primary btn-lg" type="button">{buttonText}</button>
                    </div>
            </div>
            </div>
        </div>
        </div>
	);
};

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    jumboText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default Jumbotron;
