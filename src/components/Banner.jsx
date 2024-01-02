import React from 'react'
import './Banner.css'
import  { useEffect, useState } from 'react'


function Banner() {

    const [show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className='banner'>

    <div className='bbc'>
        <div className='st'>
          <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/2448/1602448-i-fbe90a6f290a" alt="" />
          </div>
       
        
        <div className={`cc ${show && "black"}`}>
          
        </div>
    </div>

    </div>
  )
}

export default Banner