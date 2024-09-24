import React, {useState} from "react";

import './CustomForm.css';

const formInputs = [{
    inputName:'First Name',
    inputType:'text'
},{
    inputName:'Last Name',
    inputType:'text'
},{
    inputName:'Email',
    inputType:'text'
},{
    inputName:'Country',
    inputType:'text'
},{
    inputName:'Phone',
    inputType:'text'
},{
    inputName:"Father's Name",
    inputType:'text'
},{
    inputName:'Address',
    inputType:'text'
}];

const SavedFormData = () => {
    const [formData, setFormData] = useState({
        'First Name': '',
        'Last Name': '',
        'Email': '',
        'Country': '',
        'Phone': '',
        "Father's Name": '',
        'Address': ''
   } )};

function CustomForms() {
    return (

        <div className="form-view-port">

            <div className="form-outine">
                <form className="form-input-outline" method="POST" action="/react-genesis/form" onSubmit={saveForm}>

                <table className="form-table">
                {formInputs.map((formInput) => (
                    <tr className="table-row">
                     <td className="form-label" id={formInput.inputName}>{formInput.inputName} </td>
                     <td className="form-box-input"> 
                        <input type={formInput.inputType} className="input-form-text"/></td>
                     </tr>
                ))
                }
                <button type="submit" value="Submit" onClick={saveForm}>Submit</button>
                </table>
                
                </form>
            </div>

        </div>
    );


}

function saveForm() {
    const dataFetched: Map<string, HTMLElement | null> = new Map();
    formInputs.map((inputRecieved) => {
        const dataRecieved = document.getElementById(inputRecieved.inputName);
        dataFetched.set(inputRecieved.inputName, dataRecieved);
    })
    console.log(dataFetched);

}



function returnForm() {
    return (
        <div className="form-outine">

                <table className="form-table">
                {formInputs.map((formInput) => (
                    <tr className="table-row">
                     <td className="form-label" id={formInput.inputName}>{formInput.inputName} </td>
                     </tr>
                ))
                }
                </table>
            </div>
    );
}

export default CustomForms;