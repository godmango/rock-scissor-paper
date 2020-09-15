import React, { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import "bootstrap/dist/css/bootstrap.min.css";

const choices = {
	rock: "img/rock.png",
	paper: "img/paper.png",
	scissor: "img/scissor.png",
	questionMark: "img/question.png",
};

function App() {
	//setItem()
	let [playResult, setPlayResult] = useState("");
	let [compResult, setCompResult] = useState("");
	let [finalResult, setFinalResult] = useState("Start!");
	let [item, setItem] = useState("questionMark");
	let [computerItem, setComputerItem] = useState("questionMark");
	let [gameHistory, setGameHistory] = useState([]);
	//console.log(item, setItem);

	const selectItem = (clickeditem) => {
		let rsp = Object.keys(choices);
		let currentPlayerChoice = clickeditem;
		let currentComputerChoice = rsp[Math.floor(Math.random() * 3)];
		setItem(currentPlayerChoice);
		setComputerItem(currentComputerChoice);
		if (currentPlayerChoice === currentComputerChoice) {
			setPlayResult("tie");
			setCompResult("tie");
			setFinalResult("Draw");
			gameHistory.push(finalResult);
			setGameHistory(gameHistory);
		}
		if (currentPlayerChoice === "rock") {
			if (currentComputerChoice === "paper") {
				setPlayResult("lose");
				setCompResult("win");
				setFinalResult("Defeated");
				gameHistory.push(finalResult);
				setGameHistory(gameHistory);
			} else if (currentComputerChoice === "scissor") {
				setPlayResult("win");
				setCompResult("lose");
				setFinalResult("Victory");
				gameHistory.push(finalResult);
				setGameHistory(gameHistory);
			}
		}
		if (currentPlayerChoice === "scissor") {
			if (currentComputerChoice === "rock") {
				setPlayResult("lose");
				setCompResult("win");
				setFinalResult("Defeated");
				gameHistory.push(finalResult);
				setGameHistory(gameHistory);
			} else if (currentComputerChoice === "paper") {
				setPlayResult("win");
				setCompResult("lose");
				setFinalResult("Victory");
				gameHistory.push(finalResult);
				setGameHistory(gameHistory);
			}
		}
		if (currentPlayerChoice === "paper") {
			if (currentComputerChoice === "scissor") {
				setPlayResult("lose");
				setCompResult("win");
				setFinalResult("Defeated");
				gameHistory.push(finalResult);
				setGameHistory(gameHistory);
			} else if (currentComputerChoice === "rock") {
				setPlayResult("win");
				setCompResult("lose");
				setFinalResult("Victory");
				gameHistory.push(finalResult);
				setGameHistory(gameHistory);
			}
		}
	};
	return (
		<div className="App">
			<div className="boxes">
				<Box who="you" result={playResult} img={choices[item]} item={item} />
				<Box
					who="computer"
					result={compResult}
					img={choices[computerItem]}
					item={computerItem}
				/>
			</div>
			<div className="resLocation">
				<div className="resHistory">
					<h3>History</h3>
					<ul>
						{gameHistory.map((finalResult) => {
							return <li>{finalResult}</li>;
						})}
					</ul>
				</div>
			</div>
			<div>
				<h1 className="finalRes">{finalResult}</h1>
			</div>
			<div className="button-group">
				<button onClick={() => selectItem("rock")}>rock</button>
				<button onClick={() => selectItem("scissor")}>scissor</button>
				<button onClick={() => selectItem("paper")}>paper</button>{" "}
			</div>
		</div>
	);
}

export default App;
