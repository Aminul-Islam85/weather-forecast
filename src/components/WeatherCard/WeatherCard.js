import React from 'react'
import { Card } from 'react-bootstrap'

const WeatherCard = ({ weatherData, city }) => {
    if (!weatherData || !city) return null
    const cityName = city?.EnglishName
    const countryName = city?.Country?.EnglishName
    const temperature = weatherData?.Temperature?.Metric?.Value
    const weatherText = weatherData?.WeatherText
    const weatherIcon = weatherData?.WeatherIcon
    var image = require(`./../../images/${weatherIcon}.PNG`)
    return (
        <Card style={{ marginTop: '20px' }}>
            <Card.Header>{`${cityName}, ${countryName}`}</Card.Header>
            <Card.Body>
                <Card.Title>{temperature} C</Card.Title>
                <Card.Text>
                    <img src={image} alt={weatherText} />
                    <br />
                    {weatherText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard
