import React from 'react'
import './CustomForm.css'
import { useState } from 'react'
import CardInfo from './CardInfo';


export default function RightTop() {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(isSubmitted);
    isSubmitted?setIsSubmitted(false):setIsSubmitted(true); 
};

const handleFormInputChange = (event:any) => {
    const {name, value} = event.target;
    console.log(event.target.value+'   here');
    setFormData({
        ...formData,
        [name]: value
      });
}

  return (
    <>
    {isSubmitted?
    (
      <div className='right-top'>
        <CardInfo formData={formData}/>
        <button type='submit' onClick={handleSubmit}>Re-submit</button>  
    </div>
  ) :
      <div className='right-top'>
        <form className='form'  onSubmit={handleSubmit}>
        <label htmlFor="name" className='form-label'>Name:</label>
        <input type="text" id='name' className="input-box-pii"  name='name' value={formData.name} onChange={handleFormInputChange} required/>
        <label htmlFor="email" className='form-label'>Email:</label>
        <input type="email" id='email' name="email" className="input-box-pii" value={formData.email} onChange={handleFormInputChange} />
        <label htmlFor="message" className='form-label'>Message:</label>
        <textarea id='message' name="message" className="input-message" value={formData.message} onChange={handleFormInputChange} required/>
        <div className="button-container">
        <button type='submit'>Submit</button>  
        </div>     
        </form>
      </div>}
    </>
  )
}
