import React from "react";

export default function Box({ backGroundColor }) {
	return (
		<div className="Boxstyle" style={{ backgroundColor: `${backGroundColor}` }}>
			<input type="text"></input>
		</div>
	);
}
