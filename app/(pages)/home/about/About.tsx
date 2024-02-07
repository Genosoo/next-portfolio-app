import Image from 'next/image'
import React from 'react'
import Line from '@/public/line-l.svg'
import './About.css'

export default function About() {
  return (
    <div className='aboutContainer'>
       <div className="aboutWrapper">
       <div className="aboutTitle">
          <h2>About</h2>
          <div className="aboutCircle"></div>
       </div>
       <p className='aboutDetail'>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum
         has been the industry's standard dummy text ever since the 1500s,
         when an unknown

         <br />
         <br />
         Lorem Ipsum is simply dummy text of the printing and typesetting 
         industry. Lorem Ipsum has been the industry's 
         standard dummy text ever since the 1500s, when an unknown
       </p>
       </div>

       <Image src={Line} alt='line' className='line-l' />
    </div>
  )
}
