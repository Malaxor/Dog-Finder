
import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {

	state = {

		image: "",
		match: false,
		matchCount: 0
	};

	componentDidMount() {

		this.loadNextDog();
	};

	handleBtnClick = event => {
		// grab each button's value
		const btnType = event.target.attributes.getNamedItem("data-value").value;
		// save the state object, and all its properties, in a variable
		const newState = {...this.state};
		// set the logic
		if(btnType === "pick") {

			// set the match property(this.state.match or newState.match) to true (1), if math.random lands on 1
			newState.match = 1 === Math.floor(Math.random() * 5) + 1;
			// update newState.matchCount by an incremement of one, if a dog likes us
			newState.matchCount = newState.match ? newState.matchCount + 1 : newState.matchCount;
		} 
		else {
			// if we choose the red thumbsdown button ("pass")
			newState.match = false;
		}
		this.setState(newState);
		this.loadNextDog();
	};

	loadNextDog =() => {

		API.getRandomDog().then(res => this.setState({image: res.data.message})).catch(err => console.log(err));
	};

	render() {

		return (

			<div>
				<h1 className="text-center">Make New Friends</h1>
        		<h3 className="text-center">Thumbs up on any pups you'd like to meet!</h3>

        		<Card image={this.state.image} handleBtnClick={this.handleBtnClick}/>
        		<h1 className="text-center">You've made friends with {this.state.matchCount} dogs, thus far</h1>
        		<Alert style={{opacity: this.state.match ? 1 : 0}} type="success">Match made in heaven!</Alert>
        	</div>	
    	);
	}
}

export default Discover;