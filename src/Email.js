import React from "react";

function Email() {
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

  let backgroundColor = "";
  switch (season) {
    case "spring":
      backgroundColor = "bg-green-300";
      break;
    case "summer":
      backgroundColor = "bg-yellow-300";
      break;
    case "autumn":
      backgroundColor = "bg-orange-300";
      break;
    case "winter":
      backgroundColor = "bg-blue-300";
      break;
    default:
      backgroundColor = "bg-gray-300";
  }

  return (
    <div
      className={
        backgroundColor + " border-b-2 border-black px-4 lg:px-6 py-2.5"
      }
    >
      <div className="section-x-padding lg:flex justify-center lg:items-center lg:justify-between">
        <h1 className="pb-3 pt-3 text-2xl ">
          Enter your email here so I can email you when I do sell my stuff
        </h1>
      </div>
    </div>
  );
}

export default Email;
