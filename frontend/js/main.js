// import dotenv from 'dotenv'; // Import dotenv
// dotenv.config();
// console.log(`You are using Node.js version: ${process.version}`);

const skillsCarousel = document.querySelector("#compSkills");

const skillSlides = document.querySelectorAll(
"#compSkills .carousel-item"
);

const currentSkill = document.querySelector("#currentSkill");
const totalSkills = document.querySelector("#totalSkills");
const skillProgressFill = document.querySelector("#skillProgressFill");

if (
  skillsCarousel &&
  currentSkill &&
  totalSkills &&
  skillProgressFill
) {
  const total = skillSlides.length;

  // Automatically display total number of skills
  totalSkills.textContent = total;

  function updateSkillProgress() {
    const activeSlide = document.querySelector(
      "#compSkills .carousel-item.active"
    );

    const currentIndex = Array.from(skillSlides).indexOf(activeSlide);

    const currentPosition = currentIndex + 1;

    const progressPercentage =
      (currentPosition / total) * 100;

    // Update current / total display
    currentSkill.textContent = currentPosition;

    // Update progress bar width
    skillProgressFill.style.width =
      `${progressPercentage}%`;
  }

  // Set initial progress when page loads
  updateSkillProgress();

  // Update after Bootstrap finishes changing slides
  skillsCarousel.addEventListener(
    "slid.bs.carousel",
    updateSkillProgress
  );
}

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


/* ==========================
 *       WEATHER SECTION
 * ========================== */

const weatherBoxes = [
    {
        city: "atlanta",
        fahrenheit: document.querySelector("#farenheit"),
        celsius: document.querySelector("#celsius"),
        weather: document.querySelector("#weatherPic"),
        locale: document.querySelector("#locale"),
    },
    {
        city: "phoenix",
        fahrenheit: document.querySelector("#farenheit2"),
        celsius: document.querySelector("#celsius2"),
        weather: document.querySelector("#weatherPic2"),
        locale: document.querySelector("#locale2"),
    },
    {
        city: "manhattan",
        fahrenheit: document.querySelector("#farenheit3"),
        celsius: document.querySelector("#celsius3"),
        weather: document.querySelector("#weatherPic3"),
        locale: document.querySelector("#locale3"),
    },
    {
        city: "dillon",
        fahrenheit: document.querySelector("#farenheit4"),
        celsius: document.querySelector("#celsius4"),
        weather: document.querySelector("#weatherPic4"),
        locale: document.querySelector("#locale4"),
    },
    {
        city: "tampa",
        fahrenheit: document.querySelector("#farenheit5"),
        celsius: document.querySelector("#celsius5"),
        weather: document.querySelector("#weatherPic5"),
        locale: document.querySelector("#locale5"),
    },
    {
        city: "jacksonville",
        fahrenheit: document.querySelector("#farenheit6"),
        celsius: document.querySelector("#celsius6"),
        weather: document.querySelector("#weatherPic6"),
        locale: document.querySelector("#locale6"),
    },
    {
        city: "okinawa",
        fahrenheit: document.querySelector("#farenheit7"),
        celsius: document.querySelector("#celsius7"),
        weather: document.querySelector("#weatherPic7"),
        locale: document.querySelector("#locale7"),
    },
];

function createWeatherIcon(weatherId) {
    const icon = document.createElement("span");

    // Thunderstorm
    if (weatherId >= 200 && weatherId <= 232) {
        icon.className = "fa-solid fa-cloud-bolt";
        icon.style.color = "#848884";
    }

    // Drizzle / Rain
    else if (weatherId >= 300 && weatherId <= 531) {
        icon.className = "fa-solid fa-cloud-rain";
        icon.style.color = "#848884";
    }

    // Snow
    else if (weatherId >= 600 && weatherId <= 622) {
        icon.className = "fa-regular fa-snowflake";
        icon.style.color = "#E5E4E2";
    }

    // Mist / Fog / Haze / etc.
    else if (weatherId >= 700 && weatherId <= 781) {
        icon.className = "fa-solid fa-smog";
        icon.style.color = "#848884";
    }

    // Clear
    else if (weatherId === 800) {
        icon.className = "fa-solid fa-sun";
        icon.style.color = "#fecb3e";
    }

    // Clouds
    else if (weatherId >= 801 && weatherId <= 804) {
        icon.className = "fa-solid fa-cloud-sun";
        icon.style.color = "#00c7fc";
    }

    // Fallback
    else {
        icon.className = "fa-solid fa-cloud";
    }

    return icon;
}

// Function to fetch weather data with caching
async function getWeatherData(city) {
    const response = await fetch(`/api/weather/${encodeURIComponent(city)}`);

    if (!response.ok) {
        throw new Error(
            `Failed to retrieve weather for ${city}: ${response.status}`
        );
    }

    return await response.json();
}


async function displayWeather(location) {
    try {
        const data = await getWeatherData(location.city);

        if (
            !location.fahrenheit ||
            !location.celsius ||
            !location.weather ||
            !location.locale
        ) {
            console.error(
                `Missing weather HTML elements for ${location.city}`
            );

            return;
        }

        location.fahrenheit.textContent = `${data.temperature.fahrenheit.toFixed(1)}ºF`;

        location.celsius.textContent = `${data.temperature.celsius.toFixed(1)}ºC`;

        location.locale.textContent = data.city;

        // Remove previous icon before adding a new one.
        location.weather.replaceChildren();

        const icon = createWeatherIcon(data.weather.id);

        // Hovering over the icon will show:
        // "clear sky", "few clouds", "light rain", etc.
        icon.title = data.weather.description;

        location.weather.appendChild(icon);

    } catch (error) {
        console.error(`Unable to display weather for ${location.city}:`, error);

        if (location.locale) {
            location.locale.textContent = "Weather unavailable";
        }
    }
}

weatherBoxes.forEach((location) => {
    displayWeather(location);
});

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

// DataData();
// themeChange();




