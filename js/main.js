import { MY_API_KEY } from './config.js';

const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': MY_API_KEY,
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};

const textDataContainer = document.querySelector('#text-id');
const buttonCl = document.querySelector("#buttonClick");


async function fetchJoke() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
		const textData = JSON.parse(result);
		console.log(textData.data);

		textDataContainer.textContent = textData.data;

		
		
		
	} catch (error) {
		console.error(error);
	}
}

buttonCl.addEventListener("click",fetchJoke);

fetchJoke();