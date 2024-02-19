import Promo from "./Promo.js";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Thanks from "./Thanks.js";
import FavPostersTitle from "./FavPostersTitle.js";
import PosterMenu from "./PosterMenu.js";
import NewPrintsTitle from "./NewPrintsTitle.js";
import NewPrints from "./NewPrints.js";
import Description from "./Description.js";
import Email from "./Email.js";
import Terms from "./Terms.js";
import Footer from "./Footer.js";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <Promo />
      <Header />
      <Menu />
      <Thanks />
      <FavPostersTitle />
      <PosterMenu />
      <NewPrintsTitle />
      <NewPrints />
      <Description />
      <Email />
      <Terms />
      <Footer />
    </div>
  );
}

const DarkMode = () => {
  // State variable to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {/* Toggle button for dark mode */}
      <button
        className="absolute top-0 right-0 m-4 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-800"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Other content of your application */}
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to my app</h1>
        {/* Other components */}
      </div>
    </div>
  );
};

export default App;
