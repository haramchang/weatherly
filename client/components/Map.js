import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { tempColors, statesAbbr } from "../data/data"

export const Map = () => {
  const svg = document.getElementById("my_dataviz")
  console.log(svg)
  return (
    <div id="map">
    </div>
  )
}

export default Map
