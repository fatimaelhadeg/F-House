import React from 'react'
import {testimonialsData} from '../assets/assets'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'
const Testimonails = () => {
  return (
    <motion.div 
     initial={{opacity:0,x:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden ' id='Testimonials'>
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonails </span></h1>
    <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from those who Found Home With Us</p>
    <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonail,index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
            <img src={testimonail.image} alt={testimonail.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
            <h2 className='text-xl text-gray-700 font-medium'> {testimonail.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonail.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-4'> 
                {Array.from({length: testimonail.rating}).map((item,i)=>(
                    <img src={assets.star_icon} alt="" key={index}/>
                ))}
            </div>
            <p className='text-gray-600'>{testimonail.text}</p>
            </div>
        ))}
    </div>
    </motion.div>
  )
}

export default Testimonails