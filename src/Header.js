import React from "react";

function Header() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour <= 6; // Assume night time is between 6 PM and 6 AM

  // Define background color and text color based on night time
  const backgroundColor = isNightTime ? "bg-gray-800" : "bg-orange-100";
  const textColor = isNightTime ? "text-white" : "text-black";

  return (
    <header>
      <nav>
        <div
          className={`border-b-2 border-black ${backgroundColor} px-4 lg:px-6 py-2.5`}
        >
          <div className="flex flexbox justify-center items-center">
            <img
              src="//elliothasacoolstore.com/cdn/shop/files/bgstar_30x.png?v=1644751126"
              srcSet="//elliothasacoolstore.com/cdn/shop/files/bgstar_30x.png?v=1644751126 1x, //elliothasacoolstore.com/cdn/shop/files/bgstar_30x@2x.png?v=1644751126 2x, //elliothasacoolstore.com/cdn/shop/files/bgstar_30x@3x.png?v=1644751126 3x"
              alt="elliothasacoolstore"
            />
            <div className="flex lg:order-2">
              <div className="flex items-stretch space-x-80">
                <a
                  className={`flex py-2 relative self-stretch flex-col ${textColor}`}
                  href="/"
                >
                  <span className="text-2xl inline-block m-auto">Home</span>
                </a>
                <a
                  className={`flex py-2 relative self-stretch flex-col ${textColor}`}
                  href="/"
                >
                  <span className="text-2xl inline-block m-auto">Prints</span>
                </a>
                <a
                  className={`flex py-2 relative self-stretch flex-col ${textColor}`}
                  href="/"
                >
                  <span className="text-2xl inline-block m-auto">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
