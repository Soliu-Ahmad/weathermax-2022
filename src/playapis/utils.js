const request = require('postman-request');

const geoCode = (address, callBackFn) => {
    const apiKey = '7ded8a7b7303c69999a13c27a0d3062f';
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${apiKey}`;

    request({ url: baseURL, json: true }, (error, _, body) => {

        if (error) {
            callBackFn('Error: Unable to connet.', undefined)
        } else {
            const { temp, feels_like } = body.main;
            callBackFn(undefined, `This temperature is ${Math.trunc(temp)} degree celcius`)
        }


    });


}

module.exports = geoCode


// callBackFn(error, data);

//'7ded8a7b7303c69999a13c27a0d3062f';
//`http://api.locationiq.org/data/2.5/weather?q=abuja&units=metric&appid=7ded8a7b7303c69999a13c27a0d3062f`;

//https://us1.locationiq.com/v1/reverse?key=pk.dc46745d966e7a874cca48e42a7f37f9&lat=6.5833&lon=3.75&format=json

