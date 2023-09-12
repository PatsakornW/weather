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

        <header className='mt-10 mx-auto sm:mx-10 text-center sm:text-start'>
            <p className='text-6xl font-bold text-sky-500 tracking-wider'>{currentTime}</p>
            <p className='text-lg font-medium text-gray-700'>{currentDate}</p>
        </header>
    )
}

export default Header