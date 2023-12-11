import React from 'react'

const WorkCard = (props) => {
    return (
        <div className='relative p-0 md:p-2'>
            <div className='view-project absolute flex justify-center items-center'><a href="" className='font-medium'>View Project</a></div>
            <div className='flex flex-col'>
                <div className='overflow-hidden hover:grayscale hover:opacity-50'>
                    <img src={props.image} alt="work-1" className='object-cover w-full h-full object-center hover:scale-125 transition duration-500 cursor-pointer'/>
                </div>
                <div className='px-4 mt-4 md:px-0'>
                    <h4 className='text-lg'>{props.title}</h4>
                    <p className='text-sm font-thin'>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}
``
export default WorkCard