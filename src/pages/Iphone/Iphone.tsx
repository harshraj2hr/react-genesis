import React from 'react';
import './Iphone.css';
import apple from '../../icons/apple.svg'


function Iphone() {
    return (
  
  
      <div className="view-port">
  
        <div className="i-phone">
          <div className="upper-container-wrapper">
            <div className="upper-container">
              <div className="camera-wrapper">
                <div className="left-half-camera">
  
                  <div className="camera">
  
                    <div className="large-camera">
  
                        <div className="large-camera-bubble">
  
                        </div>
                    </div>
                  </div>
  
                  <div className="camera">
  
  
                    <div className="smallest-camera">
  
                    </div>
                  </div>
  
                </div>
                <div className="right-half-camera">
                <div className="camera">
                  <div className="medium-camera">
                    <div className="medium-camera-bubble"></div>
                    </div>
  
                  </div>
                   <div className="camera">
  
                    <div className="large-camera">
  <div className="large-camera-bubble">
                          
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-wrapper">
                <div className="message-heading">
                    <span>AUTO FOCUS</span>
                </div>
  
                <div className="underline">
  
                </div>
  
                <div className="message-content">
                    <span>Ultimate Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-container d-flex just-center align-center">
            <div className='apple-logo' >
              <img className='apple-logo' src={apple} alt="apple" />
            </div>
          </div>
        </div>
  
      </div>
  
    )
  }


export default Iphone;

export  {}
