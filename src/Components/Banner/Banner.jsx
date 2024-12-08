import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className="bannerButtons">
                <div className="button">Play</div>
                <div className="button">My List</div>
            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the </h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner