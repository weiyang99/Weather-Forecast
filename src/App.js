import React, { useState } from 'react';
import './App.css';
// import axios from 'axios';
// import { REACT_APP_API_KEY } from './config';
import { fetchFromAPI } from './fetchFromAPI';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      fetchFromAPI(location).then((data) => {
        setData(data)
      })
      setLocation('')
    }
  }

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${REACT_APP_API_KEY}&units=metric`

  // const handleSearch = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault()
  //     axios.get(url).then((response) => {
  //       setData(response.data)
  //     })
  //     setLocation('')
  //   }
  // }

  return (
    <div className="App">

      <div className='search'>
        <input
          type='text'
          value={location}
          onChange={(e) => { setLocation(e.target.value) }}
          onKeyDown={handleSearch}
          placeholder='Enter Location'
        />
      </div>

      <div className="container">
        <div className='title'>
          <h1>Current Weather</h1>
        </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
