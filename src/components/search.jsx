import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'

function Search() {
    const { search, setSearch } = useContext(WeatherContext)

    return (
        <input type="text" placeholder='Search...'
            className='my-10 p-2 rounded-lg focus:outline-none w-1/2'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default Search