import React from "react";
import PropTypes from "prop-types";

//create your first component
const NavBtn = ({name}) => {
    console.log(name);
	return (
		<a className="nav-link text-secondary" aria-current="page" href="#">
            {name}
        </a>
	);
};

NavBtn.propTypes = {
	name: PropTypes.string.isRequired
}

export default NavBtn;
