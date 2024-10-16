import React from "react";
import PropTypes from "prop-types";

//create your first component
const Navbar = ({title, navBtn}) => {
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
                    {navBtn.map((btn)=>(
						<a className="nav-link text-secondary" aria-current="page" href="#">
							{btn.titleSection}
                        </a>
					))}
                    </div>
                </div>
                </div>
            </div>
        </nav>
	);
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
