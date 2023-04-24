import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class Main extends Component {

    constructor(props){
        super(props)
            this.state = {
                users: [
                    {
                    name: "Robert Oldman", 
                    dob: new Date(11/12/1947),
                    med_times: [ "08:00" ]
                    }
                ]
        }
    }


render() {
    return (
        <Router>
            <div className='main'>
                <Switch>
                    <Route path='/main'>
                        <h3 className='title'>Main Page</h3>
                        <Address getGeoFromAddress={this.getGeoFromAddress}
                                latitude={this.state.latitude} 
                                longitude={this.state.longitude}
                                getGeoFromGeoButton={this.getGeoFromGeoButton}/>
                    </Route>
                </Switch>   
            </div>
        </Router>
    )
}
}