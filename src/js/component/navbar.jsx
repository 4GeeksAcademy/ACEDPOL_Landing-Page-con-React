import React from "react";
import PropTypes from "prop-types";

//create your first component
const Navbar = ({title, section_01, section_02, section_03, section_04}) => {
	return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body data-bs-theme=dark m-0">
            <div className="container-fluid">
                <a className="navbar-brand text-secondary" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex flex-row-reverse">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link active text-secondary" aria-current="page" href="#">{section_01}</a>
                    <a className="nav-link text-secondary" href="#">{section_02}</a>
                    <a className="nav-link text-secondary" href="#">{section_03}</a>
                    <a className="nav-link text-secondary" href="#">{section_04}</a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
	);
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    section_01: PropTypes.string.isRequired,
    section_02: PropTypes.string.isRequired,
    section_03: PropTypes.string.isRequired,
    section_04: PropTypes.string.isRequired
}

export default Navbar;
