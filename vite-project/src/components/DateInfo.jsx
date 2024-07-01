import React from 'react'

const DateInfo = ({cityName,date,time}) => {
  return (
    <div className='flex items-center flex-col  justify-around rounded-[30px] shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] bg-widget-grey w-full' style={{ maxWidth:"35%"}}>
        <div className=''>
        <h2 className='text-[2.25rem] font-bold'>{cityName}</h2>
        </div>

        <div className='text-center'>
        <p className='xl:text-[6rem] lg:text-[5.5rem] md:text-[5.2rem] sm:text-[4.4rem] font-bold'>{time}</p>
        <p className='font-normal xl:text-[1.25rem] lg:text-[1rem] '>{date}</p>
        </div>

        

    </div>
  )
}

export default DateInfo


