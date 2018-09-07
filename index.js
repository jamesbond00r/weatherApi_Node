const request = require('request');
const argv = require('yargs').argv;

let city = argv.c || 'Wichita';
let apiKey = '0d29fbaa06dcff2656b75d959ff27d9f'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


request(url, function (err, response, body){
	if(err){
		console.log('error:', error);
	} else {
		let weather = JSON.parse(body);

let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;

console.log(message);
	}
});

