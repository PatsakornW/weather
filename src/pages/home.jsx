import React from 'react'
import Search from '../components/search'
import CardCurrent from '../components/cardCurrent'
import Header from '../components/header'
import Forecast from '../components/forecast'

function Home() {
  return (
    <div className='flex flex-wrap'>
        <div className='flex-col flex  flex-grow'>
            <Header/>
            <Forecast/>
        </div>
        <div className='flex-col flex  items-center  w-[500px]'>
            <Search/>
            <CardCurrent/>
        </div>
    </div>
  )
}

export default Home