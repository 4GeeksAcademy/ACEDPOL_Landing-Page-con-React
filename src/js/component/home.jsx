import React from "react";

//import your own components
import _Default from "./_default.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		/* _Default(), */ 
		<div>
			<Navbar />
			<Jumbotron />
			<div className="text-bg-light">
			<div className="container py-5">
				<div className="row">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
