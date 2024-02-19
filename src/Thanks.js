import React from "react";

function Thanks() {
  // Determine the current season based on the month
  const currentMonth = new Date().getMonth() + 1;
  let season = "";

  if (currentMonth >= 3 && currentMonth <= 5) {
    season = "spring";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = "summer";
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    season = "autumn";
  } else {
    season = "winter";
  }

  // Assign the appropriate background color based on the season
  let backgroundColor = "";
  switch (season) {
    case "spring":
      backgroundColor = "bg-green-300"; // Green for spring
      break;
    case "summer":
      backgroundColor = "bg-yellow-300"; // Yellow for summer
      break;
    case "autumn":
      backgroundColor = "bg-orange-300"; // Orange for autumn
      break;
    case "winter":
      backgroundColor = "bg-blue-300"; // Blue for winter
      break;
    default:
      backgroundColor = "bg-gray-300"; // Default background color
  }

  return (
    <div className={backgroundColor + " border-b-2 border-black py-4"}>
      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee3 whitespace-nowrap">
          <span className="mx-4 text-3xl text-black font-bold">
            THANK YOU FOR SHOPPING AT THE KEVIN STORE I REALLY APPRECIATE IT!
          </span>
          <span className="mx-4 text-3xl text-black font-bold">
            THANK YOU FOR SHOPPING AT THE KEVIN STORE I REALLY APPRECIATE IT!
          </span>
          <span className="mx-4 text-3xl text-black font-bold">
            THANK YOU FOR SHOPPING AT THE KEVIN STORE I REALLY APPRECIATE IT!
          </span>
        </div>
        <div className="absolute top-0 py-1 animate-marquee4 whitespace-nowrap">
          <span className="mx-4 text-3xl text-black font-bold">
            THANK YOU FOR SHOPPING AT THE KEVIN STORE I REALLY APPRECIATE IT!
          </span>
          <span className="mx-4 text-3xl text-black font-bold">
            THANK YOU FOR SHOPPING AT THE KEVIN STORE I REALLY APPRECIATE IT!
          </span>
          <span className="mx-4 text-3xl text-black font-bold">
            THANK YOU FOR SHOPPING AT THE KEVIN STORE I REALLY APPRECIATE IT!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
