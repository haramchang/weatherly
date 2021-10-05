import React from 'react'
import {connect} from 'react-redux'
import Map from "./Map"

export const Home = props => {
  return (
    <>
      <p>Weather by US States</p>
      <Map />
    </>
  )
}

export default Home
