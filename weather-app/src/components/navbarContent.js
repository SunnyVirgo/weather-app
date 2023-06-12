import React from "react";
import WeatherIcon from "./weatherIcon";

export default function NavbarContent({ dayData }) {
  let data = null;

  if (dayData.length > 0) {
    const selectedDay = dayData.find((data) => data.day === dayData[0].day); // Assuming dayData contains only one day's data
    if (selectedDay) {
      data = selectedDay;
    }
  }

  return (
    <div className="flex justify-center">
      {data && (
        <div className="grid grid-cols-6 gap-10">
         <div className="text-center">
            <div className="flex justify-center mt-3">
              <WeatherIcon />
            </div>
            <div className="uppercase mt-3">
              <span className="text-yellow-50 text-2xl">Weather</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-50 text-xl capitalize">{data.weatherName}</span>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mt-3">
              <WeatherIcon />
            </div>
            <div className="uppercase mt-3">
              <span className="text-yellow-50 text-2xl">description</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-50 text-xl capitalize">{data.weather} </span>
            </div>
          </div>


          <div className="text-center">
            <div className="flex justify-center mt-3">
              <WeatherIcon />
            </div>
            <div className="uppercase mt-3">
              <span className="text-yellow-50 text-2xl">Temperature</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-50 text-xl">{data.temperature}&deg;</span>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mt-3">
              <WeatherIcon />
            </div>
            <div className="uppercase mt-3">
              <span className="text-yellow-50 text-2xl">Humidity</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-50 text-xl">{data.humidity} %</span>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mt-3">
              <WeatherIcon />
            </div>
            <div className="uppercase mt-3">
              <span className="text-yellow-50 text-2xl">Pressure</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-50 text-xl">{data.pressure} hPa</span>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mt-3">
              <WeatherIcon />
            </div>
            <div className="uppercase mt-3">
              <span className="text-yellow-50 text-2xl">Wind Speed</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-50 text-xl">{data.windSpeed} m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
