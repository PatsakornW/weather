import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'

function Search() {
    const { search, setSearch } = useContext(WeatherContext)
    return (
        <input type="text" placeholder='Search...'
            className='mb-10 p-2 rounded-lg border border-slate-200 focus:outline-none w-3/4 sm:w-1/2'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default Search