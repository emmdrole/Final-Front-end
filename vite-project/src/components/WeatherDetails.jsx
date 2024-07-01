import React from 'react'
import sunSetPng from '../assets/sunset.png'
import sunRisePng from '../assets/sunrise.png'
import clearSun from '../assets/clearSun.png'

import humidity from '../assets/humidity.png'
import preassure from '../assets/pressure.png'
import uv from '../assets/uv-.png'
import wind from '../assets/wind.png'
import Icon from './Icon'

const WeatherDetails = ({ cityCurrentTemp,tempfeelslike,sunrise,sunset,humiditylevel,preassurelevel,windspeed,icon }) => {

    const formatTime = (timestamp) => { //code to get the timestamp in human readible
        const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      };
 
      

  return (
    <div className='flex flex-row justify-between gap-10  bg-widget-grey shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] p-5 rounded-[30px] items-center w-full' style={{ maxWidth:"80%"}}>
        <div className=''>
            <h2 className='xl:text-[80px] lg:text-[70px] md:text-[60px]'>{cityCurrentTemp}°C</h2>
            <p className='xl:text-[1.25rem] lg:text-[1rem]  lg:mt-[-25px] md:mt-[-13px]'>feels like: <span className='xl:text-[2rem] lg:text-[1.8rem] md:text-[1.4rem] lg:mt-10'>{tempfeelslike}</span></p>

            <div className='flex items-center justify-center mt-10'>
            <img className='w-[48px] h-[48px]' src={sunRisePng} alt="" />
            
            <div className='ml-3'>
            <h2 className='xl:text-[1.25rem] lg:text-[1rem] font-bold'>Sunrise</h2>
            <p className='font-semibold'>{ formatTime(sunrise) } AM</p>
            </div>
            </div>

            <div className='flex items-center justify-center mt-2'>
            <img className='w-[48px] h-[48px]' src={sunSetPng} alt="" />
            <div className='ml-3 mt-3'>
            <h2 className='xl:text-[1.25rem] lg:text-[1rem] font-bold'>Sunset</h2>
            <p className='font-semibold'>{ formatTime(sunset)} PM</p>
            </div>
            </div>

        </div>

        <div>
            {/* <img className='h-[270px] w-[270px]' src={clearSun} alt="image of sun for now" />  */}
            <Icon icon={icon} className="xl:h-[270px] xl:w-[270px] lg:h-[240px] lg:w-[240px] md:h-[200px] md:w-[200px]" />
            <p className='text-[30px] text-center font-bold'>Sunny</p>
        </div>

    <div className='flex flex-row gap-12 text-center items-center '>
        <div>

        <div className='flex flex-col items-center'>
            <img className='h-[50px] w-[58px] mb-3' src={wind} alt="image of sun for now" /> 
            <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mb-3'>{windspeed}km/h</p>
            <p className='text-[16px]'>Wind</p> 
            </div>

            <div  className='mt-5  flex flex-col items-center'>
            <img className='xl:w-[50px] xl:h-[58px] lg:w-[40px] lg:h-[48px] sm:w-[30px] sm:h-[38px] mb-3' src={preassure} alt="image of sun for now" /> 
            <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mb-3'>{preassurelevel}hPa</p>
            <p className='text-[16px]'>preassure</p> 
            </div>

           

            
        </div>

        <div >

        <div className='flex flex-col items-center'>
            <img className='xl:w-[50px] xl:h-[58px] lg:w-[40px] lg:h-[48px] sm:w-[30px] sm:h-[38px] mb-3' src={humidity} alt="image of sun for now" /> 
            <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mb-3'>{humiditylevel}%</p>
            <p className='text-[16px]'>Humidity</p>
            </div>

            <div className='flex mt-5 flex-col items-center'>
            <img className='xl:w-[50px] xl:h-[58px] lg:w-[40px] lg:h-[48px] sm:w-[30px] sm:h-[38px] mb-3' src={uv} alt="image of sun for now" /> 
            <p className='xl:text-[1.25rem] lg:text-[1rem] font-bold mb-3'>10</p>
            <p className='text-[16px]'>UV</p>
            </div>
        </div>
    </div>




    </div>
  )
}

export default WeatherDetails