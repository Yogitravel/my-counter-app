import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "./Box";

import "./App.css";

function App() {
	let count = useSelector((state) => state.count);
	let dispatch = useDispatch();
	let [backGroundColor, setbackGroundColor] = useState("red");

	const increaseNum = () => {
		dispatch({ type: "Increament" });
	};

	return (
		<>
			<div className="App">
				<h1> My Counter App </h1>

				<h2>Number of Boxs: {count}</h2>

				<button onClick={() => increaseNum()}> Increment</button>
				<button onClick={() => dispatch({ type: "Decrement" })}> Decrement</button>
				<button onClick={() => dispatch({ type: "Reset" })}> Reset</button>
				<input type="text" onChange={(e) => setbackGroundColor(e.target.value)}></input>
			</div>

			<div>
				{Array(count)
					.fill("ColorFul Box")
					.map((box) => {
						return <Box backGroundColor={backGroundColor}></Box>;
					})}
			</div>
		</>
	);
}

export default App;
