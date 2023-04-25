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
        ]
     } 
    render() { 
        return (
            <div>
                <h1 class="logo" style={{fontSize: '50px'}}>MedAlert</h1>
                <h1>Hello</h1>
                <Link to="/patient">Patient</Link>
                <Link to="/"><button>Sign Out</button></Link>
            </div>
        );
    }
}
 
export default Main;