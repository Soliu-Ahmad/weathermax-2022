
const express = require('express');
const geoCode = require('./APIS/geocode');
const getCountry = require('./APIS/country');
const getCountryFlag = require('./APIS/countryflag');


// Express config
const app = express()
app.set('view engine', 'hbs');

const port = 5000;

const path = require('path')


const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory))

const viewsPath = path.join(__dirname, '../views')
app.set(viewsPath)

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send('<h1>Invalid address.....input a correct location!</h1>');
    }
    geoCode(req.query.address, (error, data) => {
        if (error) {
            console.log('Error', error);
        } else {

            getCountry(data.latitude, data.longitude, data.temperature, data.description, data.address, data.humidity, data.weather, data.visibility, (error, data) => {
                if (error) {
                    console.log(error);
                } else {


                    getCountryFlag(data.country, data.temperature, data.description, data.address, data.humidity, data.weather, data.visibility, (error, data) => {
                        if (error) {
                            console.log(error);
                        } else {
                            res.json({
                                country: data.country,
                                temperature: data.temperature,
                                description: data.description,
                                address: data.address,
                                flag: data.flag,
                                humidity: data.humidity,
                                weather: data.weather,
                                visibility: data.visibility
                            });
                            console.log(data);
                        };
                    });

                };
            });

        };
    });

});

app.get('*', (req, res) => {
    res.send('<h1>ERROR:PAGE NOT FOUND</h1>');
})



// EXPRESS LISTEN PORT
app.listen(port, () => {
    console.log(`application is running on port ${port}`);
});