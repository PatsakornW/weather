import React from 'react';

function Header() {
    function getCurrentTime() {
        const currentDate = new Date();
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        const formattedTime = currentDate.toLocaleTimeString('en-US', options);

        return formattedTime;
    }

    function getCurrentDate() {
        const currentDate = new Date();
        const options = {
          weekday: 'long',
          month: 'long',
          year: 'numeric',
        };
      
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
      
        return formattedDate;
      }
      

    const currentTime = getCurrentTime();
    const currentDate = getCurrentDate();

    return (

        <header className='flex flex-col m-10 '>
            <p className='text-4xl font-bold'>{currentTime}</p>
            <p className='text-lg font-medium'>{currentDate}</p>
        </header>
    )
}

export default Header