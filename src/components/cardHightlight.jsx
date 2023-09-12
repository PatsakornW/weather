import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import wind from '../assets/002-wind.png'
import hum from '../assets/003-humidity.png'
import pre from '../assets/001-air.png'
import rise from '../assets/005-sunrise.png'
import set from '../assets/004-sunset.png'
import visi from '../assets/vision.png'



function CardHightlight() {
    const { current } = useContext(WeatherContext)
    function convertTimestampToTime(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
      }
    


    return (
        <div className='flex-col p-6 bg-white rounded-xl shadow-lg mt-8'>
            <p className=' uppercase mb-5'>today's hightlight</p>
            <div className='grid grid-cols-3 gap-4'>
                <div className="flex  items-start space-x-4 col-span-3 sm:col-auto">
                    <img
                        src={wind}
                        alt="wind"
                        className="w-10 h-10"
                    />
                    <div className="flex sm:flex-col justify-between w-full">
                        <p className="text-sm text-gray-400">Wind</p>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">{current.wind?.speed.toFixed(1)} km/h</p>
                    </div>
                </div>
                <div className="flex  items-start space-x-4 col-span-3 sm:col-auto">
                    <img
                        src={hum}
                        alt="humidity"
                        className="w-10 h-10"
                    />
                    <div className="flex sm:flex-col justify-between w-full">
                        <p className="text-sm text-gray-400">Humidity</p>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">{current.main?.humidity} %</p>
                    </div>
                </div>
                <div className="flex  items-start space-x-4 col-span-3 sm:col-auto">
                    <img
                        src={visi}
                        alt="visibility "
                        className="w-10 h-10"
                    />
                    <div className="flex sm:flex-col justify-between w-full">
                        <p className="text-sm text-gray-400">Visibility</p>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">{(current.visibility / 1000).toFixed(1)} km</p>
                    </div>
                </div>
                <div className="flex  items-start space-x-4 col-span-3 sm:col-auto">
                    <img
                        src={pre}
                        alt="pressure "
                        className="w-10 h-10"
                    />
                    <div className="flex sm:flex-col justify-between w-full">
                        <p className="text-sm text-gray-400">Pressure</p>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">{(current.main?.pressure * 0.029529983071).toFixed(1)} InHg</p>
                    </div>
                </div>
                <div className="flex  items-start space-x-4 col-span-3 sm:col-auto">
                    <img
                        src={rise}
                        alt="sunrise "
                        className="w-10 h-10"
                    />
                    <div className="flex sm:flex-col justify-between w-full">
                        <p className="text-sm text-gray-400">Sunrise</p>
                        <p className="text-xl  sm:text-2xl font-semibold text-gray-800">{convertTimestampToTime(current.sys?.sunrise)}</p>
                    </div>
                </div>
                <div className="flex  items-start space-x-4 col-span-3 sm:col-auto">
                    <img
                        src={set}
                        alt="sunset "
                        className="w-10 h-10"
                    />
                    <div className="flex sm:flex-col justify-between w-full">
                        <p className="text-sm text-gray-400">Sunset</p>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">{convertTimestampToTime(current.sys?.sunset)}</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CardHightlight