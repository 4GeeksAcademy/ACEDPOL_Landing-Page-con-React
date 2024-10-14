import React from "react";

//create your first component
const Jumbotron = () => {
	return (
        <div className="st-jumbo">
        <div className="container" style={{height: 100 + '%'}}>
            <div className="d-flex flex-column justify-content-center" style={{height: 100 + '%'}}>
            <div className="row px-3">
                    <div className="bg-light rounded-3 py-5 px-5">
                        <h1 className="display-5 fw-bold">It's wonderful to see you!!</h1>
                        <p className="col-md-8 fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className="btn btn-primary btn-lg" type="button">Click para comenzar!</button>
                    </div>
            </div>
            </div>
        </div>
        </div>
	);
};

export default Jumbotron;
