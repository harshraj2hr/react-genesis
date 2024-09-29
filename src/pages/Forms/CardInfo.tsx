import React from 'react'
import './CustomForm.css'

function CardInfo({formData}:any) {

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='card-wrapper'>
         {Object.entries(formData).map(([key, value]: [string, any]) => (
        <div className="card-info-wrapper" key={key}>
          <p className='card-label'>{capitalizeFirstLetter(key)}: </p>
          <p className='card-label-value'>{value}</p>
        </div>
      ))
      }
    </div>
  )
}

export default CardInfo
