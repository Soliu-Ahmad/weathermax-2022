// http://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=7ded8a7b7303c69999a13c27a0d3062f

/////////////////
//http://api.openweathermap.org/data/2.5/weather?q={place}&units=metric&appid={access_key}
////////////////

const { response } = require('express');
const request = require('postman-request');

const geoCode = (address, callBackFn) => {
    const access_key = '7ded8a7b7303c69999a13c27a0d3062f';
    const geoCodeURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${access_key}`;

    request({ url: geoCodeURL, json: true }, (error, response, body) => {
        if (error) {
            callBackFn('unable to find location!', undefined)
        } else {
            callBackFn(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                description: body.weather[0].description,
                temperature: body.main.temp,
                address: body.name,
                humidity: body.main.humidity,
                visibility: body.visibility,
                weather: body.weather[0].main

            })
        }

    })
}
// geoCode('dubai', (error, data) => {
//     if (error) {
//         console.log('Error', error)
//     } else {
//         console.log('Data', data)
//     }
// })

module.exports = geoCode