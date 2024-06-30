import Icon from './Icon'
import React from 'react'

const DaysFore = ({tempday1,date1,icon1,tempday2,date2,icon2,tempday3,date3,icon3,tempday4,date4,icon4,tempday5,date5,icon5}) => {

    

  return (
    <div className=' bg-widget-grey rounded-[30px] flex flex-col w-full h-auto shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)]' style={{maxWidth:'30%'}}>
        <div className=""><h2 className='text-[32px] font-bold text-center mt-4'>5 Days Forecast:</h2></div>
        <div className='flex flex-col'>
            <div className="flex justify-around items-center">
               <Icon icon={icon1} className='w-[60px] h-[60px]'/>
               <p className='text-[24px] font-bold'>{tempday1} °C</p>
               <p className='text-[20px] font-bold'>{date1}</p>
            </div>

            <div className="flex justify-around items-center">
               <Icon icon={icon2} className='w-[60px] h-[60px]'/>
               <p className='text-[24px] font-bold'>{tempday2} °C</p>
               <p className='text-[20px] font-bold'>{date2}</p>
            </div>

            <div className="flex justify-around items-center">
               <Icon icon={icon3} className='w-[60px] h-[60px]'/>
               <p className='text-[24px] font-bold'>{tempday3}°C</p>
               <p className='text-[20px] font-bold'>{date3}</p>
            </div>

            <div className="flex justify-around items-center">
               <Icon icon={icon4} className='w-[60px] h-[60px]'/>
               <p className='text-[24px] font-bold'>{tempday4} °C</p>
               <p className='text-[20px] font-bold'>{date4}</p>
            </div>

            <div className="flex justify-around items-center">
               <Icon icon={icon5} className='w-[60px] h-[60px]'/>
               <p className='text-[24px] font-bold'>{tempday5} °C</p>
               <p className='text-[20px] font-bold'>{date5} </p>
            </div>
        </div>
        
    </div>
  )
}

export default DaysFore