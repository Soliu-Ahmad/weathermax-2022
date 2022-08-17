//https://us1.locationiq.com/v1/reverse?key=pk.dc46745d966e7a874cca48e42a7f37f9&lat=6.5833&lon=3.75&format=json

/////////////
//https://us1.locationiq.com/v1/reverse?key={access_key}&lat={latitude}&lon={lonitude}&format=json
////////////

const request = require('postman-request');

const getCountry = (latitude, longitude, temperature, description, address, humidity, weather, visibility, callBackFn) => {

    const access_key = 'pk.dc46745d966e7a874cca48e42a7f37f9';
    const countryURL = `https://us1.locationiq.com/v1/reverse?key=${access_key}&lat=${latitude}&lon=${longitude}&format=json`;

    request({ url: countryURL, json: true }, (error, response, body) => {
        if (error) {
            callBackFn('Unable to find country!', undefined)
        } else {
            callBackFn(undefined, {
                country: body.address.country,
                temperature,
                description,
                address,
                humidity,
                weather,
                visibility
            })
        }
    })
}
// getCountry(6.5833, 3.75, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });
module.exports = getCountry