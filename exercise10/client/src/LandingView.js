import React, { useState, useEffect } from "react";

const LandingView = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null); // Initialize data state as null or an empty object depending on your use case

  const lat = "33.6425";
  const lon = "-117.8417";
  const APIkey = "4633d5cf27d9619a787d3292ab7849c7";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    )
      // handling responses
      .then((response) => response.json())
      // handling normal data state
      .then((actualData) => {
        setLoadingData(false);
        setError(false);
        setData(actualData);
      })
      // handling errors
      .catch((err) => {
        // console.log(err.message);
        setLoadingData(false);
        setError(true);
      });
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  // Render
  return (
    <>
      {loadingData && (
        <p className={`loading ${loadingData ? "loaded" : ""}`}>Loading...</p>
      )}
      <br />
      {error && (
        <p className={`error ${error ? "loaded" : ""}`}>
          Error occurred while fetching data.
        </p>
      )}
      <br />
      {!loadingData && !error && data && (
        <>
          Location: {data.name}
          <br />
          Current Temperature: {data.main.temp}°C
          <br />
          Minimum Temperature: {data.main.temp_min}°C
          <br />
          Maximum Temperature: {data.main.temp_max}°C
          <br />
          Weather Description: {data.weather[0].description}
          <br />
          Wind Speed: {data.wind.speed} m/s
          <br />
          Wind Degree: {data.wind.deg}°
        </>
      )}
    </>
  );
};

export default LandingView;
