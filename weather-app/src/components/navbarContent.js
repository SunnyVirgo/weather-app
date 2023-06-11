import React from "react";
import WeatherIcon from "./weatherIcon";

export default function NavbarContent () {
    return (
        <div className="p-5">
        <div className="flex justify-center uppercase">
            <span className="text-yellow-50 text-2xl mt-3">now</span>
        </div>
        <div className="flex justify-center mt-3 ">
            <WeatherIcon/>
        </div>
        <div className="flex justify-center mt-2">
        <span className="text-yellow-50 text-2xl">72&deg;</span>
        </div>
        </div>
    )
}