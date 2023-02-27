import React from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";
import { useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = (e) => {
    console.log('toggle');

    // Changes it to the opposite of what it was
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  // Button text changes based on the state variable
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>{buttonText}</button>
      </header>
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
