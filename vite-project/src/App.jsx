import { Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import { useEffect, useState } from 'react'

function App() {

  const [cordinates,setCordinates] =  useState({lat:null, lon:null});
  const [cordinates2,setCordinates2] = useState({lat:null,lon:null});
  const [city,setCity] = useState('');
  const [weatherData,setWeatherData] = useState({});
  

  useEffect(()=>{

    const getCurrentLocation =() =>{
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
          const {latitude,longitude} = position.coords;
          setCordinates({ lat:latitude, lon:longitude});
          
        },
        error =>{
          console.error('Error getting geolocation',error);
          
        }
      )
      } else{
        console.log("there has been an error getting the location")
      }
    }

    

    getCurrentLocation();
  },[]);

  useEffect(() =>{ //fetch apiiiia data here
    const fetchWeatherData = async() =>{
      if(cordinates.lat !== null){
        try {
          const response = await fetch(`http://localhost:5001/starter`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              latitude: cordinates.lat,
              longitude: cordinates.lon
            }),
          });
          if(!response.ok) {
            throw new Error('auto feetch not working',response.statusText);

          }

          const data = await response.json();
          

          console.log(data)

          // const [date,time] = data.list[0].dt_txt.split(' '); // split date and time for passing it as prop separately
          const [date,time] = splitDateTime(data.list[0].dt_txt)
          const formattedTime = time.split(':').slice(0, 2).join(':'); //format time for proper showing
          // day 1
          const [date1,time1] =splitDateTime(data.list[8].dt_txt);
          // day 2
          const [date2,time2] =splitDateTime(data.list[16].dt_txt);
          //day 3
          const [date3,time3] =splitDateTime(data.list[24].dt_txt);
          //day 4
          const [date4,time4] =splitDateTime(data.list[32].dt_txt);
          // day 5
          const [date5,time5] =splitDateTime(data.list[39].dt_txt);

          //date and time splitting for Hours
          //Hour 1
           const [datehour,timehour] =splitDateTime(data.list[1].dt_txt);
           const formattedTime1 = timehour.split(':').slice(0, 2).join(':');

           //Hour 2
           const [datehou2r,timehour2] =splitDateTime(data.list[2].dt_txt);
           const formattedTime2 = timehour2.split(':').slice(0, 2).join(':');

          //  hour 3
          const [datehour3,timehour3] =splitDateTime(data.list[3].dt_txt);
          const formattedTime3 = timehour3.split(':').slice(0, 2).join(':');

          //hour 4

          const [datehour4,timehour4] =splitDateTime(data.list[4].dt_txt);
          const formattedTime4 = timehour4.split(':').slice(0, 2).join(':');




          setWeatherData({
            city:data.city.name,
            temp:toCelcius(data.list[0].main.temp),
            tempfeelslike: toCelcius(data.list[0].main.feels_like),
            date,
            time:formattedTime,
            sunrise:data.city.sunrise,
            sunset:data.city.sunset,
            humidity:data.list[0].main.humidity,
            preassure:data.list[0].main.pressure,
            windspeed:data.list[0].wind.speed,
            icon:data.list[0].weather[0].icon,
            //Second Column line widget 5 day forecast data
            tempday1:toCelcius(data.list[8].main.temp),
            date1,
            icon1:data.list[8].weather[0].icon,

            //second day widget data 
            tempday2:toCelcius(data.list[16].main.temp),
            date2,
            icon2:data.list[16].weather[0].icon,

            //third day widget data

            tempday3:toCelcius(data.list[24].main.temp),
            date3,
            icon3:data.list[24].weather[0].icon,
            
            //fourth day widget data

            tempday4:toCelcius(data.list[32].main.temp),
            date4,
            icon4:data.list[32].weather[0].icon,

            //fifth day widget data

            tempday5:toCelcius(data.list[39].main.temp),
            date5,
            icon5:data.list[39].weather[0].icon,


            //new data Horly forecast
            //Hour 1 for temp of that dat
            
            temphour1: toCelcius(data.list[1].main.temp),
            timehour1:formattedTime1,
            iconhour1:data.list[1].weather[0].icon,
            windspeedhour1:data.list[1].wind.speed,

            //hour 2 for temp data
            temphour2 :toCelcius(data.list[2].main.temp),
            timehour2:formattedTime2,
            iconhour2:data.list[2].weather[0].icon,
            windspeedhour2:data.list[2].wind.speed,

            //hour 3  for temp data
            temphour3 :toCelcius(data.list[3].main.temp),
            timehour3:formattedTime3,
            iconhour3:data.list[3].weather[0].icon,
            windspeedhour3:data.list[3].wind.speed,

            //hour 4 for tmep data

            temphour4 :toCelcius(data.list[4].main.temp),
            timehour4:formattedTime4,
            iconhour4:data.list[4].weather[0].icon,
            windspeedhour4:data.list[4].wind.speed,

          });
          
        } catch(error) {
          console.error('Error fetching weather data');
        }
      }
    }

    fetchWeatherData();
    
  },[cordinates]);


  const toCelcius =(temp) =>{
    return Math.round(temp - 273.15);
  }

  const splitDateTime = dateTime => {
    const [date, time] = dateTime.split(' ');
    return [date, time];
  };


useEffect(()=>{
  const fetchGeoCode = async () =>{
    
    try{
      const response  = await fetch('http://localhost:5001/api/data',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city:city
        }),
      });
    
      if(!response.ok) {
        throw new Error('auto feetch not working',response.statusText);
    
      }
    
      const data = await response.json();

      setCordinates2({
        lat:data[0].lat,
        lon:data[0].lon
      })

      

    } catch(error){
      console.error('error Fetching weather data',error);
    
       }
    }

    if(city !== ''){
      fetchGeoCode();
    }

    

},[city])

console.log(city)


useEffect(()=>{
  const fetchWeatherData = async() =>{
    if(cordinates.lat !== null){
      try {
        const response = await fetch(`http://localhost:5001/starter`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            latitude: cordinates2.lat,
            longitude: cordinates2.lon
          }),
        });
        if(!response.ok) {
          throw new Error('auto feetch not working',response.statusText);

        }

        const data = await response.json();
        

        console.log(data)

        // const [date,time] = data.list[0].dt_txt.split(' '); // split date and time for passing it as prop separately
        const [date,time] = splitDateTime(data.list[0].dt_txt)
        const formattedTime = time.split(':').slice(0, 2).join(':'); //format time for proper showing
        // day 1
        const [date1,time1] =splitDateTime(data.list[8].dt_txt);
        // day 2
        const [date2,time2] =splitDateTime(data.list[16].dt_txt);
        //day 3
        const [date3,time3] =splitDateTime(data.list[24].dt_txt);
        //day 4
        const [date4,time4] =splitDateTime(data.list[32].dt_txt);
        // day 5
        const [date5,time5] =splitDateTime(data.list[39].dt_txt);

        //date and time splitting for Hours
        //Hour 1
         const [datehour,timehour] =splitDateTime(data.list[1].dt_txt);
         const formattedTime1 = timehour.split(':').slice(0, 2).join(':');

         //Hour 2
         const [datehou2r,timehour2] =splitDateTime(data.list[2].dt_txt);
         const formattedTime2 = timehour2.split(':').slice(0, 2).join(':');

        //  hour 3
        const [datehour3,timehour3] =splitDateTime(data.list[3].dt_txt);
        const formattedTime3 = timehour3.split(':').slice(0, 2).join(':');

        //hour 4

        const [datehour4,timehour4] =splitDateTime(data.list[4].dt_txt);
        const formattedTime4 = timehour4.split(':').slice(0, 2).join(':');




        setWeatherData({
          city:data.city.name,
          temp:toCelcius(data.list[0].main.temp),
          tempfeelslike: toCelcius(data.list[0].main.feels_like),
          date,
          time:formattedTime,
          sunrise:data.city.sunrise,
          sunset:data.city.sunset,
          humidity:data.list[0].main.humidity,
          preassure:data.list[0].main.pressure,
          windspeed:data.list[0].wind.speed,
          icon:data.list[0].weather[0].icon,
          //Second Column line widget 5 day forecast data
          tempday1:toCelcius(data.list[8].main.temp),
          date1,
          icon1:data.list[8].weather[0].icon,

          //second day widget data 
          tempday2:toCelcius(data.list[16].main.temp),
          date2,
          icon2:data.list[16].weather[0].icon,

          //third day widget data

          tempday3:toCelcius(data.list[24].main.temp),
          date3,
          icon3:data.list[24].weather[0].icon,
          
          //fourth day widget data

          tempday4:toCelcius(data.list[32].main.temp),
          date4,
          icon4:data.list[32].weather[0].icon,

          //fifth day widget data

          tempday5:toCelcius(data.list[39].main.temp),
          date5,
          icon5:data.list[39].weather[0].icon,


          //new data Horly forecast
          //Hour 1 for temp of that dat
          
          temphour1: toCelcius(data.list[1].main.temp),
          timehour1:formattedTime1,
          iconhour1:data.list[1].weather[0].icon,
          windspeedhour1:data.list[1].wind.speed,

          //hour 2 for temp data
          temphour2 :toCelcius(data.list[2].main.temp),
          timehour2:formattedTime2,
          iconhour2:data.list[2].weather[0].icon,
          windspeedhour2:data.list[2].wind.speed,

          //hour 3  for temp data
          temphour3 :toCelcius(data.list[3].main.temp),
          timehour3:formattedTime3,
          iconhour3:data.list[3].weather[0].icon,
          windspeedhour3:data.list[3].wind.speed,

          //hour 4 for tmep data

          temphour4 :toCelcius(data.list[4].main.temp),
          timehour4:formattedTime4,
          iconhour4:data.list[4].weather[0].icon,
          windspeedhour4:data.list[4].wind.speed,

        });
        
      } catch(error) {
        console.error('Error fetching weather data');
      }
    }
  }

  fetchWeatherData();

},[cordinates2])
 
   
 // for the new search function just set the same state with the new parameters

  return (
    
    <>
    <div className='background-main'>
    <div className='h-auto  pl-20 pr-20 flex flex-col pt-10'>
     <Nav 
       setCity={setCity}
     />
     <Routes>
      <Route index element={<Home 
        cityName = { weatherData.city }
        cityCurrentTemp = { weatherData.temp }
        tempfeelslike = {weatherData.tempfeelslike}
        sunrise = {weatherData.sunrise}
        sunset = {weatherData.sunset}
        humiditylevel ={weatherData.humidity}
        preassurelevel  = {weatherData.preassure}
        windspeed = {weatherData.windspeed}
        date = {weatherData.date}
        time={weatherData.time}
        icon={weatherData.icon}
        //day 1 widget dayly
        tempday1={weatherData.tempday1}
        date1={weatherData.date1}
        icon1={weatherData.icon1}
        // day 2 widget dayly
        tempday2={weatherData.tempday2}
        date2={weatherData.date2}
        icon2={weatherData.icon2}
        //day 3 widget dayly
        tempday3 = {weatherData.tempday3}
        date3={weatherData.date3}
        icon3={weatherData.icon3}
        //day 4 widget dayly
        tempday4={weatherData.tempday4}
        date4={weatherData.date4}
        icon4={weatherData.icon4}
        //day 5 widget dayly
        tempday5={weatherData.tempday5}
        date5={weatherData.date5}
        icon5={weatherData.icon5}

        // new widget

        //day-hour 1 widget one
        temphour1 = {weatherData.temphour1}
        iconhour1 = {weatherData.iconhour1}
        timehour1 = {weatherData.timehour1}
        windspeedhour1 = {weatherData.windspeedhour1}

        // day hour 2 widget one
        temphour2 = {weatherData.temphour2}
        iconhour2 = {weatherData.iconhour2}
        timehour2 = {weatherData.timehour2}
        windspeedhour2 = {weatherData.windspeedhour2}

        //day hour 3 widget one three

        temphour3 = {weatherData.temphour3}
        iconhour3 = {weatherData.iconhour3}
        timehour3 = {weatherData.timehour3}
        windspeedhour3 = {weatherData.windspeedhour3}

        //day hour 4 widget one three

        temphour4 = {weatherData.temphour4}
        iconhour4 = {weatherData.iconhour4}
        timehour4 = {weatherData.timehour4}
        windspeedhour4 = {weatherData.windspeedhour4}



        
      />}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
     </Routes>

     </div>
     </div>
 
     
    
     

     
    </>
  )
}

export default App
