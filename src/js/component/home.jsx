import React from "react";

//import your own components
import _Default from "./_default.jsx";
import Footer from "./footer.jsx";
import Stock from "./stock.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

import {buttonsData} from "./raw_data/raw_NavbarData.jsx";
import {cardsData} from "./raw_data/raw_CardsData.jsx";
const rndText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar title="Start Bootstrap" buttons={buttonsData} />
			<Jumbotron 
				title="It's wonderful to see you!!" 
				jumboText={rndText}
				buttonText="Click para comenzar!" />
			<Stock cards={cardsData} />
			<Footer copyRight="Copyright &copy; 4Geeks Academy ~ Acedpol" />
		</div>
	);
};

export default Home;
