
import axios from "axios";

export default {


	getRandomDog: function() {

		return axios.get("https://dog.ceo/api/breeds/image/random");
	},

	getDogBreed: function(breed) {

		return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
	},

	getBreedList: function() {

		return axios.get("https://dog.ceo/api/breeds/list");
	}
};