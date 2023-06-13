import React from "react";
import CloudsIcon from "../icons/sun.png";
import ThunderIcon from "../icons/thunder.png";
import RainyIcon from "../icons/rainny.png";
import ClearIcon from "../icons/sunnny.png";
import StormIcon from "../icons/stormy.png";
import WindIcon from "../icons/wind.png";
import HazeIcon from "../icons/haze.png";

export default function WeathercontentIcon({ weather }) {
  // Define a mapping of weather values to corresponding icon paths
  const weatherIcons = {
    Clouds: CloudsIcon,
    Thunder: ThunderIcon,
    Rain: RainyIcon,
    Clear: ClearIcon,
    Storm: StormIcon,
    Wind: WindIcon,
    Haze: HazeIcon,
  };

  // Check if the weather value exists in the mapping, otherwise use a default icon
  const iconPath = weatherIcons[weather] || CloudsIcon;

  return (
    <div className="relative">
      <img className="h-12 w-12" src={iconPath} alt="" />
    </div>
  );
}
