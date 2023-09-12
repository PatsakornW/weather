import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import cloudy from '../assets/006-cloud.png'
import thunder_storm from '../assets/010-thunderstorm.png'
import drizzle from '../assets/008-light-rain.png'
import rain from '../assets/009-hail.png'
import tem from '../assets/celsius.png'
import max from '../assets/up-arrow.png'
import min from '../assets/down-arrow.png'



function CardCurrent() {
    const { current } = useContext(WeatherContext)

    function getWeatherIcon(weatherMain) {
        switch (weatherMain) {
            case 'Rain':
                return rain;
            case 'Drizzle	':
                return drizzle;
            case 'Clouds':
                return cloudy;
            case 'Thunderstorm':
                return thunder_storm;
            default:
                return cloudy;
        }
    }

    function getCurrentDate() {
        const currentDate = new Date();
        const options = {
            month: "long", day: "numeric"
        };

        const formattedDate = currentDate.toLocaleDateString('en-US', options);

        return formattedDate;
    }


    const currentDate = getCurrentDate();


    return (
        <div class="w-full sm:w-80 bg-white shadow-xl p-6 rounded-2xl text-gray-700">
            <div class="flex flex-col items-center">
                <div>
                    <h2 class="font-bold text-gray-600 text-center">{current.name}    <span>({current.sys?.country}) </span></h2>
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
                    <p>Today,{currentDate}</p>
                </div>
                <div>
                    <p className='my-6 text-6xl text-gray-800 font-bold'>{(current.main?.temp - 273.15).toFixed(0)}°C</p>
                </div>

                <div>
                    {current.weather?.map((item) => (
                        <p key={item.id}>{item.main}</p>
                    ))}
                </div>
                <div className='flex my-6'>
                    <div className='flex '>
                        <img
                            src={tem}
                            alt="feellike"
                            className='w-6 h-6 me-1'
                        />
                         <p>{(current.main?.feels_like - 273.15).toFixed(0)}°C</p>
                         <div className='ms-2 border-e-2'></div>
                    </div>
                    <div className='flex '>
                        <img
                            src={max}
                            alt="feellike"
                            className='w-6 h-6 me-1'
                        />
                         <p>{(current.main?.temp_max - 273.15).toFixed(0)}°C</p>
                         <div className='ms-2 border-e-2'></div>
                    </div>
                    <div className='flex '>
                        <img
                            src={min}
                            alt="feellike"
                            className='w-6 h-6 me-1'
                        />
                         <p>{(current.main?.temp_min - 273.15).toFixed(0)}°C</p>
                         <div className='ms-2 border-e-2'></div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CardCurrent