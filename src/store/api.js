//import axios from 'axios';

const getBreeds = async () => {
	const axios = require('axios')
	try{
		return await axios.get('https://dog.ceo/api/breeds/list/all')
	} catch (errro){
		console.error(error)
	}
}

export default {
	getBreeds
}
