import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import cloudy from '../assets/icons8-clouds-96.png'
import thunder_storm from '../assets/icons8-storm-100.png'
import drizzle from '../assets/icons8-rain-100.png'
import rain from '../assets/icons8-heavy-rain-100.png'
import suuny from '../assets/icons8-sun-100.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Forecast() {
    const { forecast, } = useContext(WeatherContext)

    function formatTime(dtTxt) {
        const date = new Date(dtTxt);
        const options = {
            hour: 'numeric',

            hour12: true,
        };

        const formattedTime = date.toLocaleTimeString('en-US', options);

        return formattedTime;
    }

    const year = 2023;
    const month = 8;
    const day = 13;
    const hours = 0;
    const minutes = 0;
    const seconds = 0;
    // const currentDate = new Date(year, month, day, hours, minutes, seconds);
    const currentDate = new Date();
    const currentDateStr = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    const filteredList = forecast.list?.filter(item => {
        return item.dt_txt.includes(currentDateStr);
    });




    function getWeatherIcon(weatherMain) {
        switch (weatherMain) {
            case 'Rain':
                return rain;
            case 'Drizzle	':
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


    return (
        <div className='flex-col rounded-2xl  p-6 shadow  bg-white border'>
            <p className=' uppercase mb-5'>today's forecast</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {filteredList?.map((item) => (
                    <SwiperSlide>
                        <div className=" border-e">
                            <div className='flex flex-col gap-4 items-center justify-center text-gray-700'>
                                <p>{formatTime(item.dt_txt)}</p>
                                {item.weather?.map((item) => (
                                    <img
                                        key={item.id}
                                        src={getWeatherIcon(item.main)}
                                        alt={item.main}
                                        className='w-14 h-14'
                                    />
                                ))}
                                <p className='text-xl font-bold'>{(item.main?.temp - 273.15).toFixed(0)}°C</p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
        </div>







    )
}

export default Forecast