import React from 'react'
import '../../styles/common-section.css'

const CommonSection = ({title}) => {
  return (
    <section className='common__section'>
        <div className='text-center'>
            <h1 className='text-white font-medium text-30'>{title}</h1>
        </div>
    </section>
  )
}

export default CommonSection