import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import AddPatient from './AddPatient'

const generateRandomHistory = times => {
    var output = []
    const daysSince = 14
    for(var i=0; i < daysSince; i++){
        var thisDay = {}
        for (var time of times){
            thisDay[time] = Math.random() < .9
        }
        output.push(thisDay)
    }
    return output
}

const generateRandomPhone = () => {
    const first = Math.floor(Math.random() * 899 + 100)
    const second = Math.floor(Math.random() * 899 + 100)
    const third = Math.floor(Math.random() * 8999 + 1000)
    return `(${first}) ${second}-${third}`
}

class Main extends Component {
    state = {
        addingNew: false, 
        patients: [
            {
                name: "Robert Oldman", dob: new Date('01/03/1939'), times: [8, 19.5],
                history: () => generateRandomHistory(this.times),
                caretaker: "Suzy Oldman", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()

            },
            {
                name: "Dorothy Gale", dob: new Date('04/09/1945'), times: [7],
                history: () => generateRandomHistory(this.times),
                caretaker: "Toto", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Richard Nixon", dob: new Date('11/12/1940'), times: [9, 12, 19.5],
                history: () => generateRandomHistory(this.times),
                caretaker: "Gerald Ford", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Albert Einstein", dob: new Date('09/15/1930'), times: [8, 10, 16, 20],
                history: () => generateRandomHistory(this.times),
                caretaker: "Isaac Newton", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Alan Anderson", dob: new Date('02/28/1948'), times: [9],
                history: () => generateRandomHistory(this.times),
                caretaker: "Abby Anderson", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Brenda Bates", dob: new Date('12/28/1944'), times: [8, 12.5],
                history: () => generateRandomHistory(this.times),
                caretaker: "Brendon Bates", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Claudia Cortez", dob: new Date('01/12/1935'), times: [5, 10, 17],
                history: () => generateRandomHistory(this.times),
                caretaker: "Cain Cortez", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Donald Trump", dob: new Date('06/14/1946'), times: [6, 18],
                history: () => generateRandomHistory(this.times),
                caretaker: "Michael Pence", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Joseph Biden", dob: new Date('11/20/1942'), times: [5, 7, 10, 12, 15, 18, 21],
                history: () => generateRandomHistory(this.times),
                caretaker: "Kamala Harris", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
            {
                name: "Francis Farmer", dob: new Date('05/05/1932'), times: [8],
                history: () => generateRandomHistory(this.times),
                caretaker: "Fedrico Farmer", 
                phone: generateRandomPhone(), caretakerPhone: generateRandomPhone()
            },
        ]
    } 

    formatDate(date){
        var month = date.getMonth() + 1
        var day = date.getDate()
        var year = date.getFullYear()
        return `${month}/${day}/${year}`
    }

    closeAddPatient(){
        this.setState({addingNew: false})
    }
    
    render() { 
        const patientCards = this.state.patients.sort((a, b) => b.name.split(' ')[1] > a.name.split(' ')[1] ? -1 : 1).map((patient, index) => {
            return <Link className='patient-link' to='/patient' state={{info: JSON.stringify(patient)}}><li key={patient.name} index={index} class="patient-card">
            <span class="left">{patient.name}</span>
            <span class="right">{this.formatDate(patient.dob)}</span>
            </li></Link>
        })
        return (
            <div>
                {this.state.addingNew ? <AddPatient quit={() => this.closeAddPatient()}/> : null}
                <button id='new-patient-button' onClick={() => this.setState({addingNew: true})}>Add New Patient</button>
                <h1 class="logo" style={{fontSize: '50px'}}>MedAlert</h1>
                <div id="patients-div">
                    <ul class="patient-list">
                        <li style={{}}><b>Registered Patients</b></li>
                        <li class="patient-card">
                        <span class="left">Name:</span>
                        <span class="right">D.O.B.</span>
                        </li>
                        { patientCards }
                    </ul>
                </div>
                
                <Link to="/" ><button id="sign-out">Sign Out</button></Link>
            </div>
        );
    }
}
 
export default Main;