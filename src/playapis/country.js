const request = require('postman-request');

const countryName = 'nigeria'
const baseURL = `https://restcountries.com/v3.1/name/${countryName}`
request({ url: baseURL, json: true }, (error, response, body) => {
    console.log(body)
})