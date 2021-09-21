import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { tempColors, statesAbbr } from "../data/data"

export const Map = () => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    statesAbbr.forEach(async (state) => {
      const stateName = state.name

    })
  })

  return (
    <div>
      This is ze map
    </div>
  )
}

export default Map
