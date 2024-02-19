import React from "react";

function Description() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour <= 6;

  const backgroundColor = isNightTime ? "bg-gray-800" : "bg-orange-100";
  const textColor = isNightTime ? "text-white" : "text-black";

  return (
    <div>
      <div
        className={`border-b-2 border-black ${backgroundColor} px-4 lg:px-6 py-2.5`}
      >
        <div className="grid-cols-2">
          <div>
            <h1 className={`pb-36 pt-3 text-2xl ${textColor}`}>
              Welcome to my store! This has been a long time coming and I'm very
              glad it is a thing now. I always wanted my work to be available in
              the physical world so it feels very cool to be able to sell these
              to all of you sweet people! If you get one, make sure to chuck it
              up on Instagram and tag me! I'd love to see it up on a wall or
              something. I have no prints on my wall. I'm afraid of damaging my
              walls.
              <br />
              <br />
              Enjoy the store!
              <br /> <br /> xx Kevin
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
