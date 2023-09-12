import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import cloudy from '../assets/icons8-clouds-96.png'
import thunder_storm from '../assets/icons8-storm-100.png'
import drizzle from '../assets/icons8-rain-100.png'
import rain from '../assets/icons8-heavy-rain-100.png'
import suuny from '../assets/icons8-sun-100.png'
import tem from '../assets/icons8-thermometer-100.png'
import max from '../assets/icons8-thermometer-up-100.png'
import min from '../assets/icons8-thermometer-down-100.png'



function CardCurrent() {
    const { current } = useContext(WeatherContext)

    function getWeatherIcon(weatherMain) {
        switch (weatherMain) {
            case 'Rain':
                return rain;
            case 'Drizzle':
                return drizzle;
            case 'Clouds':
                return cloudy;
            case 'Sunny':
                return suuny;
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
        <div className="w-full  bg-white shadow p-6 border rounded-2xl text-gray-700">
            <div className="flex flex-col  items-center">
                <div>
                    <h2 className=" tracking-wide text-xl font-bold text-gray-600 text-center">{current.name}    <span>({current.sys?.country}) </span></h2>
                </div>
                <div>
                    {current.weather?.map((item) => (
                        <img
                            key={item.id}
                            src={getWeatherIcon(item.main)}
                            alt={item.main}
                            className='w-60 h-60'
                        />

                    ))}
                </div>
                <div>
                    <p className=' tracking-wide'>Today,{currentDate}</p>
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