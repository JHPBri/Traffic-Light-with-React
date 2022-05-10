import React, { useState } from "react";
import HandleClick from "./ChangeButton.jsx";
//create your first component

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	// Button: cycles the traffic light selected color between red, green and yellow
	const colors = ["red", "yellow", "green"];

	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"light red" + (selectedColor === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"light green" + (selectedColor === "green" ? " glow" : "")
				}></div>

			<button type="button" onClick={() => setSelectedColor("")}>
				Cycle
			</button>
		</div>
	);
};

export default Home;
