// import React from "react";

// export default function Box({ winner, who, imgURL }) {
// 	//let { num, value } = props;
// 	return (
// 		<div className={`Box ${winner ? "winner" : "loser"}`}>
// 			<h1>{who}</h1>
// 			<img src={imgURL} />
// 			<h3>{winner ? "Won" : "Loss"}</h3>
// 		</div>
// 	);
// }

import React, { Component } from "react";

export default class Box extends Component {
	render() {
		return (
			<div className={`Box ${this.props.winner ? "winner" : "loser"}`}>
				<h1>{this.props.who}</h1>
				<img src={this.props.imgURL} />
				<h3>{this.props.winner ? "Won" : "Loss"}</h3>
			</div>
		);
	}
}
