import React from 'react'
import Search from '../components/search'
import CardCurrent from '../components/cardCurrent'
import Header from '../components/header'
import Forecast from '../components/forecast'
import CardHightlight from '../components/cardHightlight'

function Home() {
  return (
    <div className='grid grid-cols-3 h-screen  auto-rows-max bg-slate-50'>
      <div className=' order-1 col-span-3 sm:col-span-2  '>
        <Header />
      </div>
      <div className=' order-3 col-span-3 sm:col-span-2    px-0 sm:px-10 '>
        <Forecast />
        <CardHightlight/> 
      </div>
      <div className='my-10 order-2 col-span-3 sm:col-span-1 row-span-2  flex-col justify-center flex items-center'>
        <Search />
        <CardCurrent />
      </div>
    </div>


  )
}

export default Home