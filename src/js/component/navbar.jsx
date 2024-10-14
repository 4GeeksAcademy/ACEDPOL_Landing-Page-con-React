import React from "react";

//create your first component
const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body data-bs-theme=dark m-0">
            <div className="container-fluid">
            <a className="navbar-brand text-secondary" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active text-secondary" aria-current="page" href="#">About</a>
                <a className="nav-link text-secondary" href="#">Services</a>
                <a className="nav-link text-secondary" href="#">Portfolio</a>
                <a className="nav-link text-secondary" href="#">Contact</a>
                </div>
            </div>
            </div>
        </nav>
	);
};

export default Navbar;
