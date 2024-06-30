import React from 'react'
import Icon from './Icon'

const HourlyFor = ({temphour1,timehour1,iconhour1,windspeedhour1,temphour2,timehour2,iconhour2,windspeedhour2,temphour3,timehour3,iconhour3,windspeedhour3,temphour4,timehour4,iconhour4,windspeedhour4}) => {
  console.log(temphour4)

  const backgroundColourDayNight= (iconCode) =>{
    const iconMapped ={
      '02d':true,
      '02n':false,
      '10d':true,
      '10n':false,
      '09d':true,
      '09n':false,
      '13d':true,
      '13n':false,
      '01d':true,
      '01n':false,
      '11d':true,
      '11n':false,
      '03n':false,
      '03d':true,
      '04d':true,
      '04n':false
    }

    return iconMapped[iconCode];

  }

  backgroundColourDayNight(iconhour1)



  return (
    <div className='flex items-center flex-col  w-full bg-widget-grey shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] p-5 rounded-[30px] h-[366px]' >
      <div><h1 className='text-[32px] font-bold'>Hourly Forecast</h1></div>
      <div className="flex mt-4  justify-center gap-6 w-full h-full">
        <div className={`${backgroundColourDayNight(iconhour1) ? 'bg-[linear-gradient(171deg,_#F88508_-12.41%,_rgba(246,_250,_217,_0.00)_163.32%)]' : 'bg-[linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)]'} w-[15.5%] rounded-[30px] flex flex-col items-center justify-around`}>
          <p className='text-[24px] font-bold mt-2'>{timehour1}</p>
          <Icon icon={iconhour1} className='w-[80px] h-[80px]'/>
          <p className='text-[20px] font-bold mt-[-20px]'>{temphour1} C</p>
          <p className='text-[20px] font-bold  pb-[35px]'>{Math.round(windspeedhour1)}km/h</p>
        </div>

        <div className={`${backgroundColourDayNight(iconhour2) ? 'bg-[linear-gradient(171deg,_#F88508_-12.41%,_rgba(246,_250,_217,_0.00)_163.32%)]' : 'bg-[linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)]'} w-[15.5%] rounded-[30px] flex flex-col items-center justify-around`}>
          <p className='text-[24px] font-bold mt-2'>{timehour2}</p>
          <Icon icon={iconhour2} className='w-[80px] h-[80px]'/>
          <p className='text-[20px] font-bold mt-[-20px]'>{temphour2} C</p>
          <p className='text-[20px] font-bold  pb-[35px]'>{Math.round(windspeedhour2)}km/h</p>
        </div>

        <div className={`${backgroundColourDayNight(iconhour3) ? 'bg-[linear-gradient(171deg,_#F88508_-12.41%,_rgba(246,_250,_217,_0.00)_163.32%)]' : 'bg-[linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)]'} w-[15.5%] rounded-[30px] flex flex-col items-center justify-around`}>
          <p className='text-[24px] font-bold mt-2'>{timehour3}</p>
          <Icon icon={iconhour3} className='w-[80px] h-[80px]' />
          <p className='text-[20px] font-bold mt-[-20px]'>{temphour3} C</p>
          <p className='text-[20px] font-bold  pb-[35px]'>{Math.round(windspeedhour3)}km/h</p>
        </div>

        <div className={`${backgroundColourDayNight(iconhour3) ? 'bg-[linear-gradient(171deg,_#F88508_-12.41%,_rgba(246,_250,_217,_0.00)_163.32%)]' : 'bg-[linear-gradient(168deg, #443D64 -19.21%, rgba(101, 130, 198, 0.00) 158.48%)]'} w-[15.5%] rounded-[30px] flex flex-col items-center justify-around`}>
          <p className='text-[24px] font-bold mt-2'>{timehour4}</p>
          <Icon icon={iconhour4} className='w-[80px] h-[80px]' />
          <p className='text-[20px] font-bold mt-[-20px]'>{temphour4} C</p>
          <p className='text-[20px] font-bold  pb-[35px]'>{Math.round(windspeedhour4)}km/h</p>
        </div>
      </div>
      
    </div>
  )
}

export default HourlyFor