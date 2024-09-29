import React, { useState } from 'react';
import RightTop from './RightTop';
import CardInfo from './RightTop';

function FormContainer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleReSubmit = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <CardInfo  />
      ) : (
        <RightTop />
      )}
    </div>
  );
}

export default FormContainer;
