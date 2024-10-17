import React from "react";
import PropTypes from "prop-types";

import Card from "./utils/card.jsx";

//create your first component
const Stock = ({cards}) => {
	return (
		<div className="text-bg-light">
			<div className="container py-5">
				<div className="row">
					{cards.map((card)=>(
						<Card 
							key={card.id}
							image={card.image} // image={bigProjectImage} 
							title={card.title} // title="Project Name 00" 
							cardText={card.cardText} // cardText={rndCardText} 
						/>
					))}
				</div>
			</div>
		</div>
	);
};

Stock.propTypes = {
	cards: PropTypes.array
}

export default Stock;
