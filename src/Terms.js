import React from "react";

function Terms() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour <= 6;

  const backgroundColor = isNightTime ? "bg-gray-800" : "bg-orange-100";
  const textColor = isNightTime ? "text-white" : "text-black";

  return (
    <div>
      <div
        className={`pt-5 pb-5 border-b-2 border-black ${backgroundColor} px-4 lg:px-6 py-2.5  grid-cols12 justify-between flex`}
      >
        <div className="col-span-3">
          <img
            src="//elliothasacoolstore.com/cdn/shop/files/bgstar_80x.png?v=1644751126"
            srcSet="//elliothasacoolstore.com/cdn/shop/files/bgstar_80x.png?v=1644751126 1x, //elliothasacoolstore.com/cdn/shop/files/bgstar_80x@2x.png?v=1644751126 2x, //elliothasacoolstore.com/cdn/shop/files/bgstar_80x@3x.png?v=1644751126 3x"
            alt="elliothasacoolstore"
          />
        </div>
        <div className={`text-2xl col-span-3 ${textColor}`}>
          This is the official Kevin store only. <br />I promise that this is
          the real Kevin
        </div>
        <div className={`text-2xl col-span-3 ${textColor}`}>
          Search <br />
          Terms of Service <br />
          Refund policy
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

export default Terms;
