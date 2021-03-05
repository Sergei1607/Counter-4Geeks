import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Box } from "./box.js";

//create your first component
export function Home(props) {
	let digit = String(props.value);
	let digit1 = digit.charAt(digit.length - 1);
	let digit2 = digit.charAt(digit.length - 2);
	let digit3 = digit.charAt(digit.length - 3);
	let digit4 = digit.charAt(digit.length - 4);
	let digit5 = digit.charAt(digit.length - 5);
	let digit6 = digit.charAt(digit.length - 6);
	return (
		<div>
			<div className="container-flex bg-dark text-white d-flex justify-content-center">
				<Box value={<i className="far fa-clock"></i>} />
				<Box value={digit6 == "" ? "0" : digit6} />
				<Box value={digit5 == "" ? "0" : digit5} />
				<Box value={digit4 == "" ? "0" : digit4} />
				<Box value={digit3 == "" ? "0" : digit3} />
				<Box value={digit2 == "" ? "0" : digit2} />
				<Box value={digit1} />
			</div>
		</div>
	);
}

Home.propTypes = {
	value: PropTypes.string
};
