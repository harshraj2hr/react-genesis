import React from 'react'
import address_image_frame from './../../icons/form-assets/Frame 1.png'
import phone_img from './../../icons/Vector (1).png'
import location_img from './../../icons/Vector (2).png'
import mail_img from './../../icons/Vector.png'

function BottomRight() {
  return (
    <div className='bottom-right'>
        <div className="image-container">
            <p className='heading-text'>Head Office:</p>


            <div className="info-container">
        <img src={phone_img} alt="phone.jpg" className="image" />
         <div className="text-overlay">+91 7689098767</div>
         </div>


         <div className="info-container">
        <img src={location_img} alt="phone.jpg" className="image" />
         <div className="text-overlay">HSR layout</div>
         </div>


         <div className="info-container">
        <img src={mail_img} alt="phone.jpg" className="image" />
         <div className="text-overlay">yo@gmail.com</div>
         </div>
        </div>

        <div className="image-container">
            <p className='heading-text'>Branch Office:</p>
       
        <div className="info-container">

        <img src={phone_img} alt="phone.jpg" className="image" />
         <div className="text-overlay">+91 8789766898 </div>
        </div>



        <div className="info-container">
        <img src={location_img} alt="phone.jpg" className="image" />
         <div className="text-overlay">Bellandur</div>
         </div>


         <div className="info-container">
        <img src={mail_img} alt="phone.jpg" className="image" />
         <div className="text-overlay">hi@gmail.in</div>
         </div>
        </div>
    </div>
  )
}

export default BottomRight
