import React, {Component} from 'react'

const makeTimeChoices = () => {
  var output = []
  for (var i = 0; i < 24; i++){
    var hour = (i < 10 ? '0' : '') + i.toString()
    for (var j = 0; j < 4; j++){
      var minute = j * 15
      minute = (minute < 10 ? '0' : '') + minute.toString()
      output.push(<option>{`${hour}:${minute}`}</option>)
    }
  }
  return output
}

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

      <div id='set-times'>
        <label className='times-input'>
          Select Medication Time:
          <select id='dropdown'>
            {makeTimeChoices()}
          </select>
        </label>
      </div>

      <div id='add-patient-buttons'>
        <button id='confirm' onClick={() => window.alert("Feature not yet available")}>Confirm</button>
        <button id='cancel' onClick={() => props.quit()}>Cancel</button>
      </div>

    </div>
    
  )
}
