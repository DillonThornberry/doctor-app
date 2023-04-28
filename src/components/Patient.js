import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const formatDate = (date) => {
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    return `${month}/${day}/${year}`
}

const generateRandomHistory = () => {
    var output = []
    const daysSince = 14
    for(var i=0; i < daysSince; i++){
        var thisDay = Math.random() < .9
        output.push(thisDay)
    }
    return output
}


const formatTime = time => {
    const hours = Math.floor(time)
    const minutes = (time - Math.floor(time)) * 60
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

const generateMedTable = (history) => {
    var dates = [<td className='history-item'>Success Rate</td>]
    const successRate = (Math.floor((history.reduce((acc, cur) => acc += cur ? 1 : 0) / history.length) * 100)).toString() + '%'
    var success = [<td className='history-item'>{successRate}</td>]
    for (var i = 0; i < history.length; i++){
        const daysSince = history.length - i
        const thisDay = new Date()
        thisDay.setDate(thisDay.getDate() - daysSince)
        const dateStr = formatDate(thisDay)
        dates.push(<td className='history-item'>{dateStr.substring(0, dateStr.length - 5)}</td>)
        success.push(<td className='history-item'>{history[i] ? '\u2713' : 'X'}</td>)
    }

    return <table id="history-table"><tr className='history-row'>{dates}</tr><tr className='history-row'>{success}</tr></table>


}

export default function Patient() {
    const location = useLocation()
    const patientInfo = JSON.parse(location.state.info)
    const randomHistory = generateRandomHistory()

    return (
    <div>
        <div id="buttons">
            <Link to="../main"><button className='left'>back</button></Link>
            <button className='right' onClick={() => window.alert("Feature not yet available")}>Export Data</button>
        </div>

        <div id="info-container">
            <div id="patient-info">
                <h2>Patient Info</h2>
                <button onClick={() => window.alert("Feature not yet available")}>edit</button>
                <p>Name: {patientInfo.name}</p>
                <p>D.O.B.: {formatDate(new Date(patientInfo.dob))}</p>
                <p>Phone: {patientInfo.phone}</p>
            </div>
            <div id="caretaker-info">
                <h2>Caretaker Info</h2>
                <button onClick={() => window.alert("Feature not yet available")}>edit</button>
                <p>Caretaker: {patientInfo.caretaker}</p>
                <p>Phone: {patientInfo.phone}</p>
            </div>
        </div>
        
        <div id="med-times">
            <h3>Medication Times:</h3>
            <button onClick={() => window.alert("Feature not yet available")}>edit</button>
            {patientInfo.times.map((time, i) => <p className="time">{formatTime(time)}</p>)}
        </div>
        <div id="med-history">
            <h3>Patient Medication History</h3>
            <table>
                {generateMedTable(randomHistory)}
            </table>
        </div>

        

    </div>
  )
}
