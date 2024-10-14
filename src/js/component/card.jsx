import React from "react";

//create your first component
const Card = () => {
	return (
		<div class="col-lg-4 px-3 mb-4 ">
            <img src="assets/img/big-project-image.png" class="img-fluid" alt="big-project-image.png"/>
            <div class="mt-4">
                <h5 class="fw-bold text-primary">Project Name</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta lectus quis augue scelerisque, at cursus sem fringilla.</p>
            </div>
        </div>
	);
};

export default Card;
