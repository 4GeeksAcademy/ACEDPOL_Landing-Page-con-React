import React from "react";

//import your own components
import _Default from "./_default.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
import bigProjectImage from "../../img/big-project-image.png";
const rndCardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta lectus quis augue scelerisque, at cursus sem fringilla.";

//create your first component
const Home = () => {
	return (
		// _Default({image: rigoImage})
		
		<div>
			{/* <_Default image={rigoImage} /> */}
			<Navbar />
			<Jumbotron />
			<div className="text-bg-light">
			<div className="container py-5">
				<div className="row">
					<Card image={bigProjectImage} title="Project Name 00" cardText={rndCardText} />
					<Card image={bigProjectImage} title="Project Name 01" cardText={rndCardText} />
					<Card image={bigProjectImage} title="Project Name 02" cardText={rndCardText} />
				</div>
			</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
