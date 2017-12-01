import axios from 'axios';

class Request {
	constructor() {
		this.baseUrl = "https://limitless-castle-86404.herokuapp.com/";
	}

	get(url) {
		return axios.get(this.baseUrl + url);
	}

	post(url, body) {
		return axios.post(this.baseUrl + url, body);
	}
}

export default Request;