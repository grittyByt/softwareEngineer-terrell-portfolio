import { Router } from "express";
const router = Router();
const API_KEY = process.env.OPENWEATHER_API_KEY;
if (!API_KEY) {
    throw new Error("OPENWEATHER_API_KEY is missing from .env");
}
const OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const CACHE_TIME = 10 * 60 * 1000;
const cities = {
    atlanta: {
        id: 4180439, // Atlanta, Georgia, US
        displayName: "Atlanta, GA",
    },
    phoenix: {
        id: 5308655, // Phoenix, Arizona, US
        displayName: "Phoenix, AZ",
    },
    manhattan: {
        id: 5125771, // Manhattan, New York, US
        displayName: "Manhattan, NY",
    },
    dillon: {
        id: 4576653, // Dillon, South Carolina, US
        displayName: "Dillon, SC",
    },
    tampa: {
        id: 4174757, // Tampa, Florida, US
        displayName: "Tampa, FL",
    },
    jacksonville: {
        id: 4473083, // Jacksonville, North Carolina, US
        displayName: "Jacksonville, NC",
    },
    okinawa: {
        id: 1894616, // Okinawa, Japan
        displayName: "Okinawa, JP",
    },
};
const weatherCache = new Map();
router.get("/:city", async (req, res) => {
    try {
        const cityKey = req.params.city.toLowerCase();
        const city = cities[cityKey];
        if (!city) {
            return res.status(404).json({ error: "City not supported" });
        }
        const cached = weatherCache.get(cityKey);
        if (cached &&
            cached.expiresAt > Date.now()) {
            return res.json(cached.data);
        }
        const params = new URLSearchParams({
            id: city.id.toString(),
            appid: API_KEY,
            units: "metric",
        });
        const response = await fetch(`${OPENWEATHER_URL}?${params.toString()}`);
        if (!response.ok) {
            const errorData = await response.text();
            console.error(`OpenWeather request failed for ${city.displayName}:`, response.status, errorData);
            return res.status(response.status).json({
                error: `Unable to retrieve weather for ${city.displayName}`,
                details: errorData
            });
        }
        const data = await response.json();
        const weatherData = {
            city: city.displayName,
            temperature: {
                celsius: data.main.temp,
                fahrenheit: (data.main.temp * 9) / 5 + 32
            },
            weather: {
                id: data.weather[0].id,
                condition: data.weather[0].main,
                description: data.weather[0].description,
            },
        };
        weatherCache.set(cityKey, {
            data: weatherData,
            expiresAt: Date.now() + CACHE_TIME,
        });
        return res.json(weatherData);
    }
    catch (error) {
        console.error("Weather route error:", error);
        return res.status(500).json({ error: "Unable to retrieve weather data" });
    }
});
export default router;
//# sourceMappingURL=weather.routes.js.map