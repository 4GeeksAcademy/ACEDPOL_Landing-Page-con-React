import React from "react";

//import your own components
import _Default from "./_default.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

import cards from "./raw_data/rawCardsData.jsx";
import navBtn from "./raw_data/rawNavbarData.jsx";
const rndText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

//create your first component
const Home = () => {
	return (
		// _Default({image: rigoImage})
		
		<div>
			{/* <_Default image={rigoImage} /> */}
			<Navbar title="Start Bootstrap" />
			<Jumbotron 
				title="It's wonderful to see you!!" 
				jumboText={rndText}
				buttonText="Click para comenzar!" />
			<div className="text-bg-light">
				<div className="container py-5">
					<div className="row">
						{cards.map((card)=>(
							<Card 
								image={card.image} // image={bigProjectImage} 
								title={card.title} // title="Project Name 00" 
								cardText={card.cardText} // cardText={rndCardText} 
							/>
						))}
					</div>
				</div>
			</div>
			<Footer copyRight="Copyright &copy; 4Geeks Academy ~ Acedpol" />
		</div>
	);
};

export default Home;
