import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import cloudy from '../assets/cloudy.png'
import thunder_rain from '../assets/thunder-rain.png'
import rain from '../assets/rain.png'
import rainbow from '../assets/rainy-rainbow.png'

function CardCurrent() {
    const { current } = useContext(WeatherContext)

    function getWeatherIcon(weatherMain) {
        switch (weatherMain) {
            case 'Rain':
                return rain;
            case 'Drizzle	':
                return rain;
            case 'Clouds':
                return cloudy;
            case 'Thunderstorm':
                return thunder_rain;
            case 'Clouds':
                return rainbow;
            default:
                return rainbow;
        }
    }

    return (
        <div class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
            <div class="flex flex-col items-center">
                <div>

                    <h2 class="font-bold text-gray-600 text-center">{current.name}    <span>{current.sys?.country}</span></h2>
                </div>
                <div>
                    {current.weather?.map((item) => (
                      <img
                                src={getWeatherIcon(item.main)}
                                alt={item.main}
                                className='w-60 h-60'
                            />

                    ))}
                     </div>
                    <div>
                        <p>{new Date(current.dt * 1000).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold'>{(current.main?.temp - 273.15).toFixed(0)}°C</p>
                    </div>
                    <div>
                        {current.weather?.map((item) => (
                            <p key={item.id}>{item.main}</p>
                        ))}
                    </div>
                    <div>
                        <p>Humidity {current.main?.humidity} %</p>

                    </div>
                    <div>

                        <p>Wind   {current.wind?.speed} km/h</p>
                    </div>
                </div>
            </div>
            )
}

            export default CardCurrent