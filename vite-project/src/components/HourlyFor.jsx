import React, { useEffect } from 'react'
import Icon from './Icon'

const HourlyFor = ({temphour1,timehour1,iconhour1,windspeedhour1,temphour2,timehour2,iconhour2,windspeedhour2,temphour3,timehour3,iconhour3,windspeedhour3,temphour4,timehour4,iconhour4,windspeedhour4}) => {
  


    const backgroundColourDayNight= (iconCode) =>{
      const iconMapped ={
        '02d':true,
        '10d':true,
        '09d':true,
        '13d':true,
        '01d':true,
        '11d':true,
        '03d':true,
        '04d':true,
        
      }
  
      return iconMapped[iconCode] || false;
  
    }

    console.log(iconhour1)

    console.log(backgroundColourDayNight(iconhour1))
 

  



  return (
    <div className='flex items-center flex-col w-full bg-widget-grey shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] p-5 rounded-[30px] xl:h-[366px]' >
      <div><h1 className='xl:text-[2rem] lg:text-[1.8rem] md:text-[1.4rem] font-bold'>Hourly Forecast</h1></div>
      <div className="flex mt-4  justify-center  xl:gap-8 lg:gap-4 sm:gap-3 w-full h-full">
        <div style={{background: backgroundColourDayNight(iconhour1) ? 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)': 'linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)'}} className='w-[15.5%] rounded-[30px] flex flex-col items-center justify-around' >
          <p className='xl:text-[1.5rem] lg:text-[1.4rem] font-bold mt-2'>{timehour1}</p>
          <Icon icon={iconhour1} className='xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-[75px] sm:w-[65px] sm:h-[65px]'/>
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mt-[-20px]'>{temphour1} C</p>
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold  pb-[35px]'>{Math.round(windspeedhour1)}km/h</p>
        </div>

        <div style={{background: backgroundColourDayNight(iconhour2) ? 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)': 'linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)'}} className='w-[15.5%] rounded-[30px] flex flex-col items-center justify-around'>
          <p className='xl:text-[1.5rem] lg:text-[1.4rem] font-bold mt-2'>{timehour2}</p>
          <Icon icon={iconhour2} className='xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-750px] sm:w-[65px] sm:h-[65px]'/>
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mt-[-20px]'>{temphour2} C</p>
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold  pb-[35px]'>{Math.round(windspeedhour2)}km/h</p>
        </div>

        <div style={{background: backgroundColourDayNight(iconhour3) ? 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)': 'linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)'}} className='w-[15.5%] rounded-[30px] flex flex-col items-center justify-around'>
          <p className='xl:text-[1.5rem] lg:text-[1.4rem] font-bold mt-2'>{timehour3}</p>
          <Icon icon={iconhour3} className='xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-750px] sm:w-[65px] sm:h-[65px]' />
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mt-[-20px]'>{temphour3} C</p>
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold  pb-[35px]'>{Math.round(windspeedhour3)}km/h</p>
        </div>

        <div style={{background: backgroundColourDayNight(iconhour4) ? 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)': 'linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)'}} className='w-[15.5%] rounded-[30px] flex flex-col items-center justify-around'>
          <p className='xl:text-[1.5rem] lg:text-[1.4rem] font-bold mt-2'>{timehour4}</p>
          <Icon icon={iconhour4} className='xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-750px] sm:w-[65px] sm:h-[65px]' />
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mt-[-20px]'>{temphour4} C</p>
          <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold  pb-[35px]'>{Math.round(windspeedhour4)}km/h</p>
        </div>
      </div>
      
    </div>
  )
}

export default HourlyFor