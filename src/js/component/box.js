import React from "react";
import PropTypes from "prop-types";

let boxStyles = {
	fontSize: "70px",
	display: "inline-block",
	marginLeft: "20px",
	padding: "10px"
};

export function Box(props) {
	return (
		<div style={boxStyles}>
			<h1 style={boxStyles}>{props.value}</h1>
		</div>
	);
}

Box.propTypes = {
	value: PropTypes.string
};
