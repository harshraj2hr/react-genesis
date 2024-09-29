import React from "react";

import './CustomForm.css'
import LeftTop from './LeftTop'
import RightTop from './RightTop'
import BottomRight from './BottomRight'
import BottomLeft from './BottomLeft'

function CustomForms() {
    return (
        <>
        <div className="form-wrapper">
            <div className="top-class">
                <LeftTop/>
                <RightTop/>
            </div>

            <div className="bottom-class">
                <BottomLeft/>
                <BottomRight/>
            </div>

        </div>
        </>
    );
}

export default CustomForms;
export {} ;