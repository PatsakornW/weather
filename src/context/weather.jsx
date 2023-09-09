import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const [current, setcurrent] = useState([])
    const [forecast, setforecast] = useState([])

    const [search, setSearch] = useState("yasothon")

    console.log(forecast);



    useEffect(() => {
        function getCurrent(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ab0ae72e9977c99eab9cb7c59cedeb70`)
            .then(function (response) {
                setcurrent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        function getForecast(){
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=ab0ae72e9977c99eab9cb7c59cedeb70
            `)
            .then(function (response) {
                setforecast(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        getForecast()

        getCurrent()

    }, [search])

    return <WeatherContext.Provider value={{current,search, setSearch,forecast}}>{children}</WeatherContext.Provider>
}



export default WeatherProvider