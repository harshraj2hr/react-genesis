import React from 'react'
import girl from '../../icons/form-assets/long-haired-girl-watching-through-binoculars (2) 1.png'
import ellipse from '../../icons/form-assets/Ellipse 2.png'
import rectangle_bottom_1 from '../../icons/form-assets/Rectangle 5 (1).png'
import rectangle_bottom_2 from '../../icons/form-assets/Rectangle 6 (1).png'
import rectangle_top_1 from '../../icons/form-assets/Rectangle 5.png'
import rectangle_top_2 from '../../icons/form-assets/Rectangle 6.png'


function LeftTop() {
  return (
    <div className='left-top'>
                <img src={rectangle_top_1} className='rectangle-3'></img>
                <img src={rectangle_top_2} className='rectangle-4'></img>

        <div className="message-box-wrapper margin-left margin-bottom-0px">
            
        <p className='welcome-msg'>Let's get in <span className='highlight-text bold-text'>Touch!</span></p>
        <p className="message-box">Have a question or a need assistance? Reach out to use via email, phone or the contact form. We are eager to assist you.</p>
        </div>
        <p className='highlight-text bold-text margin-left margin-top-0px'>Nice hearing from you!</p>
       

        <img src={girl} className='girl-image'></img>
        <img src={ellipse} className='ellipse'></img>
        <img src={rectangle_bottom_1} className='rectangle-1'></img>
        <img src={rectangle_bottom_2} className='rectangle-2'></img>
    </div>
  )
}

export default LeftTop
