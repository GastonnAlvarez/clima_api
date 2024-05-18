import Alert from './Alert/Alert'
import styles from './App.module.css'
import Form from './Form/Form'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import useWeather from './hook/useWeather'
import Spinner from './spinner/Spinner'

function App() {
  const { fetchWeather, weather, loading, notFound, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData && (
          <WeatherDetails weather={weather} />
        )}
        {notFound && <Alert>{'Clima no encontrado'}</Alert>}
      </div>
    </>
  )
}

export default App
