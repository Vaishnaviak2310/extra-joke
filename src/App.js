import React, { useState } from "react";
import "./App.css"; // Import the updated CSS file

function App() {
  const [joke, setJoke] = useState(""); // State to store the joke
  const [isLoading, setIsLoading] = useState(false); // State to handle loading

  // Function to fetch a random Chuck Norris joke
  const fetchJoke = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value); // Set the joke text from API response
    } catch (error) {
      setJoke("Oops! Couldn't fetch a joke. Try again later.");
      console.error("Error fetching joke:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="App">
      <h1>Chuck Norris Joke Generator</h1>
      <div className="joke-container">
        <div className="speech-bubble">
          <p>{joke || "Click the button to get a joke!"}</p>
        </div>
      </div>
      <button onClick={fetchJoke} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get a Joke"}
      </button>
    </div>
  );
}

export default App;
