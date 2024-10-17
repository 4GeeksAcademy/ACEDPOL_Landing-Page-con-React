import React from "react";

//import your own components
import _Default from "./_default.jsx";
import Footer from "./footer.jsx";
import Stock from "./stock.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
// import {buttonsData} from "./raw_data/raw_NavbarData.jsx";
// import {cardsData} from "./raw_data/raw_CardsData.jsx";
import {Data} from "./raw_data/raw_Data.jsx";
const rndText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

//create your first component
const Home = () => {
	// console.log(Data[0].cardsData) === console.log(cardsData)
	// console.log(Data[1].buttonsData) === console.log(buttonsData)
	return (
		// _Default({image: rigoImage})
		<div>
			{/* <_Default image={rigoImage} /> */}
			<Navbar title="Start Bootstrap" buttons={Data[0].buttonsData} />
			<Jumbotron 
				title="It's wonderful to see you!!" 
				jumboText={rndText}
				buttonText="Click para comenzar!" />
			<Stock cards={Data[1].cardsData} />
			<Footer copyRight="Copyright &copy; 4Geeks Academy ~ Acedpol" />
		</div>
	);
};

export default Home;
