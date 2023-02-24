import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
// import { fetchFromAPI } from './fetchFromAPI';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  // const handleSearch = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault()
  //     fetchFromAPI(location).then((data) => {
  //       setData(data)
  //       console.log(data)
  //     })
  //     setLocation('')
  //   }
  // }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b23038ec723c7c4dd24b08fa5e9cd6c9`

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

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
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
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
