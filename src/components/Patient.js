import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Patient() {
    const location = useLocation()
    const state = location.state
    console.log(state)
    return (
    <div>
        <Link to="../main">back</Link>
        <p>{JSON.stringify(state)}</p>

    </div>
  )
}
