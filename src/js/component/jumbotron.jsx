import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div class="container">
            <div class="container  position-absolute pe-5 pt-5"> 
                <h1 class="align-self-center text-center bg-light text-dark ">One Page Wonder</h1>
                <h2 class="align-self-center text-center bg-light text-dark ">Will Knock Your Socks Off</h2>  
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*jQSl7ueErmbEHFO6zoJQTQ.jpeg" class="w-100" alt=""/>
        </div>
	);
};

export default Jumbotron;
