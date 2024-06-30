import React, { useEffect, useState } from 'react'
import DateInfo from './DateInfo'
import WeatherDetails from './WeatherDetails'
import DaysFore from './daysFore'
import HourlyFor from './hourlyFor'





const Home = ({ cityName,cityCurrentTemp,tempfeelslike,sunrise,sunset,humiditylevel,preassurelevel,windspeed,date,time,icon,tempday1,date1,icon1,tempday2,date2,icon2,tempday3,date3,icon3,tempday4,date4,icon4,tempday5,date5,icon5,temphour1,iconhour1,timehour1,windspeedhour1,temphour2,iconhour2,timehour2,windspeedhour2,temphour3,iconhour3,timehour3,windspeedhour3,temphour4,iconhour4,timehour4,windspeedhour4 }) => {

  


  return (
    <div className='h-screen '>
      <div className='flex mt-14 justify-between gap-10'>
      <DateInfo 
         cityName={cityName}
         date = {date}
         time ={time}
       />
      <WeatherDetails  
        cityCurrentTemp={cityCurrentTemp}
        sunrise={sunrise}
        sunset={sunset}
        tempfeelslike ={tempfeelslike}
        humiditylevel ={humiditylevel}
        preassurelevel ={preassurelevel}
        windspeed ={windspeed}
        icon={icon}
        />
      </div>

      <div className="">

        <div className="mt-10 flex justify-between flex-row gap-10">
          <DaysFore
           tempday1={tempday1}
           date1={date1}
           icon1={icon1}
           //day 2
           tempday2 ={tempday2}
           date2= {date2}
           icon2={icon2}
           //day 3
           tempday3 = {tempday3}
           date3 = {date3}
           icon3 ={icon3}

           //day 4
           tempday4 = {tempday4}
           date4 = {date4}
           icon4 ={icon4}

           //day 5

           tempday5 = {tempday5}
           date5 = {date5}
           icon5 ={icon5}
          />

          <HourlyFor
           //first hour widget
           temphour1 ={temphour1}
           iconhour1={iconhour1}
           timehour1={timehour1}
           windspeedhour1={windspeedhour1}

           //Second hour widget
           temphour2 ={temphour2}
           iconhour2={iconhour2}
           timehour2={timehour2}
           windspeedhour2={windspeedhour2}

           //Third hour widget
           temphour3={temphour3}
           iconhour3={iconhour3}
           timehour3={timehour3}
           windspeedhour3={windspeedhour3}
           //Four Hour widget
           temphour4={temphour4}
           iconhour4={iconhour4}
           timehour4={timehour4}
           windspeedhour4={windspeedhour4}

           />
        </div>

      </div>
    </div>
  )
}

export default Home

// both components have to grow in order for them to fill most of the screen then apply a gap property