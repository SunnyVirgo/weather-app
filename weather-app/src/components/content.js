import React, { useState, useEffect } from "react";
import axios from "axios";
import WeekNav from "./navbar";
import WeatherIcon from "./weatherIcon";


export default function Content({ onWeatherChange }) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");

  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error retrieving location:", error);
      }
    );
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   

      const forecast = data.list.map((item) => ({
        day: daysOfWeek[new Date(item.dt * 1000).getDay()],
        time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        temperature: item.main.temp,
        humidity: item.main.humidity,
        pressure: item.main.pressure,
        seaLevel: item.main.sea_level,
        windSpeed: item.wind.speed,
        groundLevel: item.main.grnd_level,
        weather: item.weather[0].description,
        weatherName: item.weather[0].main,
      }));

      setForecastData(forecast);
      // Extract the relevant weather information for the current day from the API response
      const currentDay = data.list[0];
      setLocation(data.city.name);
      setDate(new Date(currentDay.dt * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }));
      setCurrentWeather(currentDay.weather[0].main);
      setTemperature(currentDay.main.temp);
      setMinTemperature(currentDay.main.temp_min);
      setMaxTemperature(currentDay.main.temp_max);
      onWeatherChange(currentDay.weather[0].main);
    } catch (error) {
      console.error("Error retrieving weather data:", error);
    }
  };

  return (
    <div>
    <div className="grid grid-cols-7">
      <div className="col-span-4 p-10 pl-20 block">
        <div>
          <span className="text-7xl leading-10 font-sans text-yellow-50">{location}</span>
        </div>
        <div className="mt-4 pl-1">
          <span className="py-4 text-3xl text-yellow-50">{date}</span>
        </div>
        <div className="mt-3 ml-3">
        <div>
         <WeatherIcon weather={currentWeather}/>
         </div>
          <div className="relative">
            <span className="text-4xl text-yellow-50 capitalize">{currentWeather}</span>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex justify-center pt-10">
          <span className="text-9xl text-yellow-50 font-thin">{temperature} &deg;C</span>
        </div>
        <div className="flex justify-center mt-20">
          <span className="text-3xl text-yellow-50">{minTemperature} &deg;C</span>
          <span className="text-3xl text-yellow-50"> / </span>
          <span className="text-3xl text-blue-500 ml-1">{maxTemperature} &deg;C</span>
        </div>
      </div>
    </div>
    <WeekNav forecastData={forecastData} />
   </div>

  );
}
