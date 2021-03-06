import React from "react";
import PropTypes from "prop-types";

let buttonStyles = {
	fontSize: "20px",
	marginLeft: "100px",
	padding: "20px",
	width: "200px"
};
export function Button(props) {
	return (
		<button
			type="button"
			className="btn btn-info"
			onClick={props.function}
			style={buttonStyles}>
			{props.text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	function: PropTypes.string
};
