//https://restcountries.com/v2/name/nigeria

/////////////////
///`https://restcountries.com/v2/name/${countryName}`
///////////////


const request = require('postman-request')

const getCountryFlag = (country, temperature, description, address, humidity, weather, visibility, callBackFn) => {
    const countryURL = `https://restcountries.com/v2/name/${country}`

    request({ url: countryURL, json: true }, (error, response, body) => {
        if (error) {
            callBackFn('unable to find country flag', undefined)
        } else {
            callBackFn(undefined, {
                country: body[0].cioc,
                flag: body[0].flags.png,
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
// getCountryFlag('nigeria', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })

module.exports = getCountryFlag