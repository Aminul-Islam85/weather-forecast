import * as React from 'react'
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import WeatherCard from './components/WeatherCard/WeatherCard';

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [city, setCity] = React.useState(null)

  const [weatherData, setWeatherData] = React.useState(null)
  const handleOnSearch = async searchText => {
    try {
      const cityDetails = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${searchText}`)
      const cityDetailsJson = await cityDetails.json();
      if (!cityDetailsJson.length) {
        alert('Could not find weather data for the city you provided')
        return
      }
      const locationKey = cityDetailsJson[0].Key
      const weatherDetails = await fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
      const weatherDetailsJson = await weatherDetails.json()
      setCity(cityDetailsJson[0])
      setWeatherData(weatherDetailsJson[0])
    } catch (error) {
      alert('Failed to fetch. Daily fetch limit exceeded')
    }

  }
  return (
    <div className="App">
      <SearchBox onSearch={handleOnSearch} />
      <WeatherCard weatherData={weatherData} city={city} />
    </div>
  );
}

export default App;
