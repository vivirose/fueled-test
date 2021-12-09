import us from "./Images/Flags/us.svg";
import uk from './Images/Flags/uk.svg';
import aus from './Images/Flags/au.svg';
import ind from './Images/Flags/in.svg';
import clock from "./Images/clock.svg";

import "./App.scss";
import { useState } from "react";
import WorldCities from "./WorldCities";

let today = new Date();

function convertTZ(date, tzString) {
  const newDate =  new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})); 
  return newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
}

const Cities = {
  "New York": {
    flag: us,
    time: convertTZ(today, "America/New_York")
  },
  "Sydney":{
    flag: aus,
    time: convertTZ(today, "Australia/Sydney")
  },
  "London":{
    flag: uk,
    time: convertTZ(today, "Europe/London")
  },
  "Delhi":{
    flag: ind,
    time: convertTZ(today, "Asia/Kolkata")
  },
  "San Francisco":{
    flag: us,
    time: convertTZ(today, "America/Los_Angeles")
  }
}

function App() {

  const [city, setCity] = useState("")
  const handleSelectCity = (id) => {
      setCity(id);
    }


  return (
    <div className="App">
      <div className="Overlay_right"/>
      <div className="Overlay_left"/>
      <div className="Map">
        <WorldCities onSelectCity={handleSelectCity}/>
      </div>
      <section className="Time">
        <div className="Time_clock">
        <img src={clock} alt="clock" />
        </div>
        <div className="Time_city_hour">
          <div className="Time_city">
            {city && <img src={Cities[city].flag} alt="country flag" />}
            <h2>{city && city}</h2>
          </div>
          <h1 className="Time_hour">{city && Cities[city].time}</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
