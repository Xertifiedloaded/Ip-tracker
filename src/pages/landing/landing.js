import React from 'react'
import Hero from '../../components/hero/hero'
import Location from '../../components/location/location'
import MapLayout from '../../components/map/map'
import Map from '../../components/map/map'
const Landing = () => {
    return (
        <React.Fragment>
            <Hero />
            <Location />
            <MapLayout/>
        </React.Fragment>
    )
}

export default Landing