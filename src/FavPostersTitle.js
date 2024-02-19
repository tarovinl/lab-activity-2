import React from "react";

function FavPostersTitle() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour <= 6;

  const backgroundColor = isNightTime ? "bg-gray-800" : "bg-orange-100";
  const textColor = isNightTime ? "text-white" : "text-black";

  return (
    <div>
      <div
        className={`border-b-2 border-black ${backgroundColor} px-4 lg:px-6 py-2.5`}
      >
        <div>
          <h1 className={`pb-2 pt-8 text-3xl font-bold ${textColor}`}>
            MY FAV POSTERS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FavPostersTitle;
