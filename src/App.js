import React from "react";
import "./App.css";
import Box from "./component/Box";
import "bootstrap/dist/css/bootstrap.min.css";

const choises = {
	rock: "https://pngimg.com/uploads/stone/stone_PNG13596.png",
	paper:
		"https://www.pinclipart.com/picdir/big/23-237847_notebook-paper-torn-png-picture-peace-be-upon.png",
	scissor: "https://www.pngmart.com/files/1/Scissors-Realistic-PNG.png",
};

function App() {
	return (
		<div className="App">
			<Box who="you" winner={true} imgURL={choises.rock} />
			<Box who="computer" winner={false} imgURL={choises.paper} />
		</div>
	);
}

export default App;
