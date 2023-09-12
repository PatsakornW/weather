import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
import pin from '../assets/icons8-pin-32.png'


function Search() {
    const { search, setSearch } = useContext(WeatherContext)
    return (
        <div className='relative'>
            <input
                type="text"
                placeholder='Search country or province ....'
                className='mb-10 p-2 rounded-lg border border-slate-200 focus:outline-none w-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img src={pin} alt="pin" className=' absolute right-2 top-2 w-6 h-6 flex items-center' />
        </div>




    )
}

export default Search