import React from "react";
import PropTypes from "prop-types";

//create your first component
const Footer = ({copyRight}) => {
	return (
        <div className="text-bg-dark">
        <div className="container">
            <div className="row pb-5 pt-4 text-center">
                <div className="col col-lg-12">
                    <p>{copyRight}</p>
                </div>
            </div>
        </div>
        </div>
	);
};

Footer.propTypes = {
	copyRight: PropTypes.string.isRequired
}

export default Footer;
