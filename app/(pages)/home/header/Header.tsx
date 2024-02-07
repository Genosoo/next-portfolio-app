import React from 'react'
import Image from 'next/image'
import Profile from '@/public/profile.png'
import Line from '@/public/line-r.svg'
import BackgroundCard from '@/public/background_card.svg'
import './Header.css'

export default function Header() {
  return (
    <main className='headerContainer'>
           <div className='headerWrapper'>
              <Image
                  className='profileImg'
                  src={Profile}
                  alt='profile'
               />
           </div>

           <div className='headerWrapper'>
               <Image
                  className='backgroundCard'
                  src={BackgroundCard}
                  alt='background card'
               />
               <div className="headerContent">
               <h1 className='name'>Geno Ureta</h1>
                <span className="jobTitle">
                  <div className="circle"></div>
                  <h3>Web developer</h3>
                </span>

                <p className='detail'>
                As a passionate and experienced developer, I bring creativity, efficiency, 
                and expertise to every project I undertake. Explore my portfolio 
                to see examples of my work and discover how I can help bring your ideas to life. 
                </p>
               </div>
           </div>
           <Image src={Line} alt='line' className='line-r' />
    </main>
  )
}
