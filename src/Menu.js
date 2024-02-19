import React from "react";

function Menu() {
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
    <div className={backgroundColor}>
      <div className="border-b-2 border-black px-4 lg:px-6">
        <div>
          <h1 className="py-7 text-8xl font-bold">HOME • PRINTS • CONTACT</h1>
        </div>
      </div>
    </div>
  );
}

export default Menu;
