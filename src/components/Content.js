import React from 'react'
import ImageOne from '../images/egg1.jpg'
import ImageTwo from '../images/egg2.jpg'

function Content() {
    return (
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={ImageOne} alt="egg" className='h-full rounded mb-20 shadow'/>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
            </div>
        </div>
    )
}

export default Content
