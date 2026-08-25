// import dotenv from 'dotenv'; // Import dotenv
// dotenv.config();
// console.log(`You are using Node.js version: ${process.version}`);
// import dotenv from 'dotenv'; // Import dotenv
// dotenv.config();
// console.log(`You are using Node.js version: ${process.version}`);

// quote block
const quoteArea = document.querySelector('#quoteOfDay');
const authorArea = document.querySelector('#quoteAuthor');
const sourceTitleArea = document.querySelector('#quoteSource');


// object for quotes
const quotes = [{
    quote: 'Computers are like Old Testament gods; lots of rules and no mercy.', 
    author: 'Joseph Campbell', 
    source: 'The Power of Myth'
},
{
    quote: 'Man is still the most extraordinary computer of all', 
    author: 'President John F. Kennedy', 
    source: 'Brainy Quote'
},
{
    quote: 'The good news about computers is that they do what you tell them to do.  The bad news is they do what you tell them to do.', author: 'Ted Nelson', 
    source: 'Unknown'
},
{
    quote: "Never trust a computer you can't throw out a window", 
    author: 'Steve Wozniack', 
    source: 'Brainy Quote'
},
{
    quote: 'Computing is not about computers any more.  It is about living', 
    author: 'Nicholas Negroponte', 
    source: 'Unknown'
},
{
    quote: 'Those who can imagine anything, can create the impossible', author: 'Alan Turing', 
    source: 'Unknown'
},
{
    quote: 'Computer Science is no more about computers than astronomy is about telescopes', 
    author: 'Edsger Wybe Dijkstra', 
    source: 'Unknown'
}];


function displayQuoteOfTheDay() {

  // Get today's date

  const today = new Date();

  // Create a date representing the beginning of the current year

  const startOfYear = new Date(today.getFullYear(), 0, 0);

  // Find the difference between today and the beginning of the year

  const difference = today - startOfYear;

  // Number of milliseconds in one day

  const oneDay = 1000 * 60 * 60 * 24;

  // Determine what day of the year it is

  const dayOfYear = Math.floor(difference / oneDay);

  // Use the remainder to select one of our seven quotes

  const quoteIndex = dayOfYear % quotes.length;

  // Get today's quote object

  const todaysQuote = quotes[quoteIndex];

  // Display it

  quoteArea.textContent = todaysQuote.quote;

  authorArea.textContent = todaysQuote.author;

  sourceTitleArea.textContent = todaysQuote.source;

}

// Display the quote when the page loads
displayQuoteOfTheDay();


// weather block
const far = document.querySelector('#farenheit');
const cel = document.querySelector('#celsius');
const far2 = document.querySelector('#farenheit2');
const cel2 = document.querySelector('#celsius2');
const far3 = document.querySelector('#farenheit3');
const cel3 = document.querySelector('#celsius3');
const far4 = document.querySelector('#farenheit4');
const cel4 = document.querySelector('#celsius4');
const far5 = document.querySelector('#farenheit5');
const cel5 = document.querySelector('#celsius5');
const far6 = document.querySelector('#farenheit6');
const cel6 = document.querySelector('#celsius6');
const far7 = document.querySelector('#farenheit7');
const cel7 = document.querySelector('#celsius7');
const weather = document.querySelector('#weatherPic');
const localCity = document.querySelector('#locale');
const weather2 = document.querySelector('#weatherPic2');
const localCity2 = document.querySelector('#locale2');
const weather3 = document.querySelector('#weatherPic3');
const localCity3 = document.querySelector('#locale3');
const weather4 = document.querySelector('#weatherPic4');
const localCity4 = document.querySelector('#locale4');
const weather5 = document.querySelector('#weatherPic5');
const localCity5 = document.querySelector('#locale5');
const weather6 = document.querySelector('#weatherPic6');
const localCity6 = document.querySelector('#locale6');
const weather7 = document.querySelector('#weatherPic7');
const localCity7 = document.querySelector('#locale7');
const apiKey = process.env.API_KEY;
const cities = ['Atlanta','Phoenix','Manhattan','Dillon', 'Tampa', 4473083, 'Okinawa']
const cache = new Map();
// async function getWeatherData(city) {
//     // Checks if the city exists in the array
//     // IF the array citites does NOT INCLUDE whatever paramater is entered then a new error will be thrown with a message
//     if (!cities.includes(city)) {
//         throw new Error(`City "${city}" not found in the list`);
//     }

//     // Construct the API URL
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     try {
       
//         const response = await fetch(apiURL);

//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
//         }

//         // Return the weather data as JSON
//         return await response.json();
//     } catch (error) {
//         // Handle any errors that occur during the fetch
//         console.error("Error fetching weather data:", error.message);
//         throw error; // Re-throw the error for higher-level handling
//     }
// }



// async function getWeatherData(city){

    
//     for(const currentCity of cities){
//         if(currentCity === city){

//             const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//             const response = await fetch(apiURL);

//             // If the response is NOT ok ✅ throw a NEW error with a message

//             if(!response.ok){
//                 throw new Error('Did not fetch the weather data')
//             }
            
//             return await response.json();

//         }
//     }
    
// }

// Function to fetch weather data with caching
async function getWeatherData(city) {
    city = cities;
    if (cache.has(city)) {
        console.log(`Using cached data for ${city}`);
        return cache.get(city); // Return cached data if available
    }
    
   

    try {
        
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiURL);

        for(city of cities) {
            if(city === 'Atlanta'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity.innerHTML = `${data.name}, GA`;
                far.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';

            }
            if(city === 'Phoenix'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity2.innerHTML = `${data.name}, AZ`;
                far2.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel2.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Manhattan'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity3.innerHTML = `${data.name}, NYC`;
                far3.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel3.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Dillon'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity4.innerHTML = `${data.name}, SC`;
                far4.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel4.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Tampa'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity5.innerHTML = `${data.name}, FL`;
                far5.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel5.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 4473083){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity6.innerHTML = `${data.name}, NC`;
                far6.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel6.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Okinawa'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity7.innerHTML = `${data.name}, JP`;
                far7.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel7.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }  
            
        }

        const data = await response.json();
        cache.set(city, data); // Store result in cache
        return localCity;
    } catch (error) {
        throw error;
    }
}

//Day N Night
function themeChange() {
    const body = document.querySelector('.main-body');
    const inBody = document.querySelector('.inner-main');
    const skills = document.querySelectorAll('h5');
    const quoteSpace = document.querySelector('.card-body');
    const paragraphs = document.querySelectorAll('p');

    // Get current time
    const now = new Date();
    const hours = now.getHours(); // Hours in 24-hour format (0-23)

    if (hours >= 18 || hours <= 8){
        body.setAttribute('style', 'background-color: #202426');
        inBody.setAttribute('style', 'background-color: #353839');
        // loops thru all the h5 tags and turns them into the set color
        skills.forEach((skill) => {
            console.log(skill.textContent);
            skill.style.color = '#FAF9F6';
        });
        quoteSpace.setAttribute('style', 'background-color: #353839');
        // loops thru all the p tags and turns them into the set color
        paragraphs.forEach((paragraph) => {
            paragraph.style.color = '#FAF9F6';
        });

    } else {
        body.setAttribute('style', 'background-color: #FAF9F6');
        inBody.setAttribute('style', 'background-color: #ffffff');
        // loops thru all the h5 tags and turns them into the set color
        skills.forEach((skill) => {
            console.log(skill.textContent);
            skill.style.color = '#202426';
        });
        quoteSpace.setAttribute('style', 'background-color: #ffffff');
        // loops thru all the p tags and turns them into the set color
        paragraphs.forEach((paragraph) => {
            paragraph.style.color = '#202426';
        });
    }
}

getWeatherData();
themeChange();




