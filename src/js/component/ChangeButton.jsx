import React, { useState } from "react";

const HandleClick = () => {
	const colors = ["red", "yellow", "green"];
	const [flag, setFlag] = useState(0);
	const Cycle = () => {
		setFlag(flag === 2 ? 0 : flag + 1);
	};

	return (
		<button
			type="button"
			onClick={Cycle}
			style={{ backgroundColor: colors[flag] }}>
			Cycle
		</button>
	);
};

export default HandleClick;
