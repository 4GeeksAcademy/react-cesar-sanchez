import React from "react";
import Card from "./card.js";
import Header from "./header.js";
import Footer from "./footer.js";
import Navbar from "./navbar.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="container">
				<Navbar/>
				<Header/>
			<div className="d-flex justify-content-center gap-2 text-center">
				<Card/>
				<Card/>
				<Card/>
				<Card/>

			</div>	
			<div className="footer">
				<Footer/>
			</div>

		</div>
	);
};

export default Home;
