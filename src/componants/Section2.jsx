import midimage1 from "../assets/midimage1.png";
import midimage2 from "../assets/midimage2.png";
import midimage3 from "../assets/midimage3.png";
import midimage4 from "../assets/midimage4.png";
import midimage5 from "../assets/midimage5.png";
import midimage6 from "../assets/midimage6.png";


import React from 'react'

function Section2() {
  return (
    <>
  
 <div className="bg-[#ffffff]  w-full pt-[64px] ">
 <div className='bg-[#EAF3FB] items-center p-6 pt-[10px]'>
      <h2 className="pl-[600px] text-[#0962E5] text-xl ">You Are in GooD Company</h2>
      <h1 className="pl-[500px] font-bold text-[#000000] text-4xl">Recognised and Supported By</h1>
      <p className="pl-[400px] text-[#939caa] text-xl">Empowering Innovation and Growth Through Esteemed Partnerships and Recognitions</p>
      <div className="flex justify-between p-8 m-4">
        <img src={midimage1} alt="" className="w-[250px]  " />
        <img src={midimage2} alt="" className="w-[250px] " />
        <img src={midimage3} alt="" className="w-[150px] " />
        <img src={midimage4} alt="" className="w-[150px] " />
        <img src={midimage5} alt="" className="w-[250px] " />
        <img src={midimage6} alt="" className="w-[250px] " />
      </div>
    </div>
 </div>

    </>
  )
}

export default Section2