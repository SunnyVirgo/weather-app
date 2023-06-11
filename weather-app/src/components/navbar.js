import React from "react";
import '@heroicons/react/outline';
import NavbarContent from "./navbarContent";
export default function WeekNav() {
    return (
        <div className="p-1 mx-20 px-10 bg-gray-500 bg-opacity-10 rounded-lg h-4/5">
            <ul className="flex flex-nowrap justify-evenly border-b-2 border-gray-600 text-yellow-50 text-2xl">
                <li>Today</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
            </ul>
            <div className="grid grid-cols-6">
               <NavbarContent/>
               <NavbarContent/>
               <NavbarContent/>
               <NavbarContent/>
               <NavbarContent/>
               <NavbarContent/>
              

            </div>
        </div>
    )
}