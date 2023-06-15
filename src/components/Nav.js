import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({toggleFilter, toggleSort}) => {

	return (
		<div className="navWrapper">
			<select onChange={toggleSort}>
				<option value='' disabled selected hidden>Sort By...</option>
				<option>All</option>
				<option value='name'>Name</option>
				<option value='weight'>Weight</option>
			</select>
			<span className="headerText">HogWild</span>
			<div onClick={toggleFilter}className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
