import { Weather } from '../hook/useWeather'
import { formatTempeture } from '../utils'
import styles from './WeatherDetails.module.css'

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
    return (
        <div className={styles.container}>
            <h2>Clima: {weather.name}</h2>
            <p className={styles.current}>{formatTempeture(weather.main.temp)}&deg;C</p>
            <div className={styles.temperatures}>
                <p>Max: <span>{formatTempeture(weather.main.temp_max)}&deg;C</span></p>
                <p>Min: <span>{formatTempeture(weather.main.temp_min)}&deg;C</span></p>
            </div>
        </div>
    )
}
