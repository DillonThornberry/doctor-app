import React, { Component} from 'react'
import { Link } from 'react-router-dom'

const generateRandomHistory = times => {
    var output = []
    const daysSince = Math.floor(Math.random() * 30)
    for(var i=0; i < daysSince; i++){
        var thisDay = {}
        for (var time of times){
            thisDay[time] = Math.random() < .9
        }
        output.push(thisDay)
    }
    return output
}

class Main extends Component {
    state = { 
        patients: [
            {
                name: "Robert Oldman", dob: new Date('01/03/1939'), times: [8, 19.5],
                history: () => generateRandomHistory(this.times)
            },
            {
                name: "Dorothy Gale", dob: new Date('04/09/1945'), times: [7],
                history: () => generateRandomHistory(this.times)
            },
            {
                name: "Richard Nixon", dob: new Date('11/12/1940'), times: [9, 12, 19.5],
                history: () => generateRandomHistory(this.times)
            },
            {
                name: "Albert Einstein", dob: new Date('09/15/1930'), times: [8, 10, 16, 20],
                history: () => generateRandomHistory(this.times)
            },
            {
                name: "Alan Anderson", dob: new Date('02/28/1948'), times: [9],
                history: () => generateRandomHistory(this.times)
            },
            {
                name: "Brenda Bates", dob: new Date('12/28/1944'), times: [8, 12.5],
                history: () => generateRandomHistory(this.times)
            },
        ]
    } 

    formatDate(date){
        var month = date.getMonth() + 1
        var day = date.getDate()
        var year = date.getFullYear()
        return `${month}/${day}/${year}`
    }
    
    render() { 
        const patientCards = this.state.patients.sort((a, b) => b.name.split(' ')[1] > a.name.split(' ')[1] ? -1 : 1).map((patient, index) => {
            return <li key={patient.name} index={index} class="patient-card">
            <span class="left">{patient.name}</span>
            <span class="right">{this.formatDate(patient.dob)}</span>
            </li>
        })
        return (
            <div>
                <h1 class="logo" style={{fontSize: '50px'}}>MedAlert</h1>
                <div id="patients-div">
                    <ul class="patient-list">
                        <li class="patient-card">
                        <span class="left">Name:</span>
                        <span class="right">D.O.B.</span>
                        </li>
                        { patientCards }
                    </ul>
                </div>
                
                <Link to={{pathame:"/patient", state:{patients: this.state.patients}}}>Patient</Link>
                <Link to="/"><button>Sign Out</button></Link>
            </div>
        );
    }
}
 
export default Main;