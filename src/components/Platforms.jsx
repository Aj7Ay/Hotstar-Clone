import React from 'react'
import './Platforms.css'
function Platforms() {
  return (
    <div className='rww'>

<div className='plat'>
    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Disney-logo-white-png.png" alt="" />
   <div className='vid'>
        <video   playsinline="true" loop="true" autoplay preload="auto">
            <source type='video/mp4' src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132" />
        </video>
   </div>
</div>

<div className='plat'>
    <img src="https://1000logos.net/wp-content/uploads/2017/08/Pixar-symbol.jpg" alt="" />
   <div  className='vid'>
        <video   playsinline="" loop="true" autoplay preload="auto">
            <source type='video/mp4' src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483" />
        </video>
   </div>


</div>
<div className='plat'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="" />
   <div className='vid'>
        <video   autoplay loop muted preload>
            <source type='video/mp4' src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549" />
        </video>
   </div>

   
</div>
<div className='plat'>
    <img style={{height:"100px"}} src="https://static.vecteezy.com/system/resources/previews/019/550/675/original/star-wars-white-logo-free-download-free-vector.jpg" alt="" />
   <div className='vid'>
        <video   muted autoplay loop>
            <source type='video/mp4' src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512" />
        </video>
   </div>

   
</div>

<div className='plat'>
    <img style={{height:"70px"}} src="https://b606234.smushcdn.com/606234/wp-content/uploads/2020/01/National-Geographic-logo.jpg?lossy=1&strip=1&webp=1" alt="" />
   <div className='vid'>
        <video   autoplay loop muted preload>
            <source type='video/mp4' src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208" />
        </video>
   </div>

   
</div>

<div className='plat'>
    <img style={{height:"100px",width:"150px"}} src="https://www.iwmbuzz.com/wp-content/uploads/2019/08/everything-you-need-to-know-about-hotstar-specials-series-special-ops-1024x576.jpg" alt="" />
   <div className='vid'>
        <video   autoplay loop muted preload>
            <source type='video/mp4' src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594" />
        </video>
   </div>

   
</div>


    </div>
  )
}

export default Platforms