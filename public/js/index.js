
console.log('THIS IS JAVASCRIP FROM CLIENT SIDE!');


// https://restcountries.com/v2/name/nigeria

// const formEl = document.querySelector('form');
// const inputEl = document.querySelector('input');
// const btnSubmit = document.querySelector('button');




// fetch('http://localhost:4000/weather?address=lagos').then(response => {
//     response.json().then(data => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data);
//         }
//     })
// })

// formEl.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('Hello');
// })

const formEl = document.querySelector('form')
const inputEl = document.querySelector('.inputSearch');
const cityEl = document.querySelector('.city');
const countryEl = document.querySelector('.country');
const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');
const humidityEl = document.querySelector('.humidity--no');
const weatherEl = document.querySelector('.weather--name');
const visibilityEl = document.querySelector('.visibility--no');
const flagEl = document.querySelector('.flagImg');
const mainEl = document.querySelector('main');
const dateEl = document.querySelector('.date');
const errorMsgEl = document.querySelector('.error-msg');


formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const address = inputEl.value



    // console.log(address);
    fetch(`http://localhost:5000/weather?address=${address}`).then(response => {
        response.json().then(data => {
            console.log(data);

            if (data.error) {
                errorMsgEl.classList.remove('hidden');
                // console.log(data.error);
            } else {
                console.log(data)
                mainEl.classList.remove('hidden')
                dateEl.textContent = currentDate();
                cityEl.textContent = data.address
                countryEl.textContent = data.country
                temperatureEl.textContent = Math.trunc(data.temperature);
                descriptionEl.textContent = data.description
                humidityEl.textContent = data.humidity
                weatherEl.textContent = data.weather
                visibilityEl.textContent = Math.trunc(data.visibility / 1000);
                flagEl.src = data.flag;
                inputEl.value = ''
                inputEl.blur();

            }

        })
    })
})

function currentDate() {
    const d = new Date()
    const date = d.getDate()
    const day = d.toLocaleDateString('en-US', { weekday: 'short' });
    const month = d.toLocaleDateString('en-US', { month: 'short' });
    const year = d.getFullYear()
    return `${day} ${date} ${month} ${year}`;
}
// console.log(currentDate)