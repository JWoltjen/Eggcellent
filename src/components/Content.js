import React from 'react'
import ImageOne from '../images/egg1.jpeg'
import ImageTwo from '../images/egg2.jpeg'

function Content() {
    return (
        <>
            <div className='menu-card'>
                <img src={ImageOne} alt="egg" className='h-full rounded mb-20 shadow'/>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                    <p className='mb-2'>I like eggs</p>
                    <span>$80</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={ImageTwo} alt="egg" className='h-full rounded mb-20 shadow'/>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>Egg Salad</h2>
                    <p className='mb-2'>Who doesn't like eggs?</p>
                    <span>$40</span>
                </div>
            </div>
        </>
    )
}

export default Content
