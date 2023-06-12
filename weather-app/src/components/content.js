import React, { useState, useEffect } from "react";
import axios from "axios";
import WeekNav from "./navbar";

export default function Content() {
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
    } catch (error) {
      console.error("Error retrieving weather data:", error);
    }
  };

  return (
    <div>
    <div className="grid grid-cols-7">
      <div className="col-span-4 p-10 pl-20 block">
        <div>
          <span className="text-5xl leading-10 font-sans text-yellow-50">{location}</span>
        </div>
        <div className="mt-4 pl-1">
          <span className="py-4 text-base text-2xl text-yellow-50">{date}</span>
        </div>
        <div className="mt-3 ml-3">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-20 h-13 text-yellow-400"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-20 ml-5 w-24 h-24 text-yellow-50"
            >
              <path
                fillRule="evenodd"
                d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="">
            <span className="text-4xl text-yellow-50 capitalize">{currentWeather}</span>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex justify-center pt-10">
          <span className="text-9xl text-yellow-50 font-thin">{temperature}&deg;</span>
        </div>
        <div className="flex justify-center mt-20">
          <span className="text-3xl text-yellow-50">{minTemperature}&deg;</span>
          <span className="text-3xl text-yellow-50"> /</span>
          <span className="text-3xl text-blue-900 ml-1">{maxTemperature}&deg;</span>
        </div>
      </div>
    </div>
    <WeekNav forecastData={forecastData} />
   </div>

  );
}
