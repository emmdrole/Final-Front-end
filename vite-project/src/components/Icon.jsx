import React from 'react'
import cloudySun from '../assets/02d.png'
import rainHard from '../assets/10d13d.png'
import rainSoft from '../assets/09d.png'
import snow from '../assets/13d.png'
import clearSun from '../assets/clearSun.png'
import thunderStorm from '../assets/11d.png'
import cloud from '../assets/03d.png'



const Icon = ({icon,className =''}) => {

  const iconMapped ={
    '02d':cloudySun,
    '02n':cloudySun,
    '10d':rainHard,
    '10n':rainHard,
    '09d':rainSoft,
    '09n':rainSoft,
    '13d':snow,
    '13n':snow,
    '01d':clearSun,
    '01n':clearSun,
    '11d':thunderStorm,
    '11n':thunderStorm,
    '03n':cloud,
    '03d':cloud,
    '04d':cloud,
    '04n':cloud
  }

  const icondefined = iconMapped[icon] 
  return (
    <>
     <img src={icondefined} alt={icon} className={className}/>
    </>
  )
}

export default Icon