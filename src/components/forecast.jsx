import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import cloudy from '../assets/cloudy.png'
import thunder_rain from '../assets/thunder-rain.png'
import rain from '../assets/rain.png'
import rainbow from '../assets/rainy-rainbow.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




function Forecast() {
    const { forecast } = useContext(WeatherContext)

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
    const day = 10;
    const hours = 0;
    const minutes = 0;
    const seconds = 0;

    const currentDate = new Date(year, month, day, hours, minutes, seconds);
    const filteredList = forecast.list?.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate.getDate() === currentDate.getDate() &&
            itemDate.getMonth() === currentDate.getMonth() &&
            itemDate.getFullYear() === currentDate.getFullYear();
    });

    console.log(filteredList);

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

    var settings = {
      

        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        swipeToSlide: true,
        


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (

        <div className='container mx-10 w-[600px] sm:w-[700px] xl:w-[1000px]'>
            <Slider {...settings} >
                {filteredList?.map((item) => (
                    <div class="bg-slate-200  p-2 rounded-2xl border-2 border-gray-50">
                        <div className='flex flex-col items-center justify-center '>
                            <p>{formatTime(item.dt_txt)}</p>
                            {item.weather?.map((item) => (
                                <img
                                    src={getWeatherIcon(item.main)}
                                    alt={item.main}
                                    className='w-20 h-20'
                                />
                            ))}
                            <p className='text-xl font-bold'>{(item.main?.temp - 273.15).toFixed(0)}°C</p>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>



    )
}

export default Forecast