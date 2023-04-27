import React, {Component} from 'react'

export default function Add_Patient(props) {
  return (
    <div id='add-new-window'>
      <div id='exit-button' onClick={() => props.quit()}>X</div>
      <div id='patient-form' style={{alignItems: 'center'}}>
        <label className='form-item'>
          Name:
          <input type='text' className="input-label"></input>
        </label>
        <label className='form-item'>
          D.O.B.:
          <input type='text' className="input-label"></input>
        </label>
        <label className='form-item'>
          Phone Number:
          <input type='text' className="input-label"></input>
        </label>
      </div>
      
      <div id='caretaker-form'>
        <label className='form-item'>
          Designated Caretaker:
          <input type='text' className="input-label"></input>
        </label>
        <label className='form-item'>
          Caretaker Phone Number: 
          <input type='text' className="input-label"></input>
        </label>
      </div>


    </div>
    
  )
}
