import React, {useEffect, useState} from "react";
import './App.css';

const App = ()=> {

  const[city, setCity]=useState({});
  const[search, setSearch] = useState('');

  useEffect( () => {
    const fetchApi = async () =>{
      const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
      const response =await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
    
  }, [search])

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
   
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={ (e) =>{ setSearch(e.target.value)}}
            value={search}
            
          />
        </div>
        {city ? (
        <div>
          <div className="location-box">
            <div className="location">{search} </div> 
            <div className="date">{dateBuilder(new Date())}</div> 
          </div>
          <div className="weather-box">
            <div className="temp">
              {city.temp}°c
            </div>
          </div>
        </div>
        ) : ('No data')}
      </main>

  
  );
}

export default App;
