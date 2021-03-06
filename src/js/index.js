//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

let counter = "0";

ReactDOM.render(<Home value={counter} />, document.querySelector("#app"));

function render() {
	ReactDOM.render(<Home value={counter} />, document.querySelector("#app"));
	counter++;
	if (counter == 10) {
		alert("Boom");
	}
}

let timer;

export function Start() {
	timer = setInterval(render, 1000);
	return timer;
}

export function Stop() {
	clearInterval(timer);
}

export function Reiniciar() {
	counter = 0;
	return counter;
}
