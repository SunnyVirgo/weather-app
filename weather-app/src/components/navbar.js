import React, { useState, useEffect } from "react";
import NavbarContent from "./navbarContent";

export default function WeekNav({ forecastData }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const currentDay = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const orderedDaysOfWeek = [...days.slice(currentDay), ...days.slice(0, currentDay)];
    setDaysOfWeek(orderedDaysOfWeek);
    setSelectedDay(orderedDaysOfWeek[0]);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const filteredDayData = forecastData.filter((data) => data.day === selectedDay);

  return (
    <div>
      <div className="p-1 mx-20 px-10 bg-gray-500 bg-opacity-10 rounded-lg h-4/5">
        <ul className="flex flex-nowrap justify-evenly border-b border-gray-600 text-yellow-50 text-2xl ">
          {daysOfWeek.map((day) => (
            <li
              key={day}
              className={`cursor-pointer ${
                selectedDay === day ? "border-b-2 border-yellow-50" : ""
              } ${selectedDay === day ? "" : "text-gray-500"}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </li>
          ))}
        </ul>
        <div>
          <NavbarContent dayData={filteredDayData} />
        </div>
      </div>
    </div>
  );
}