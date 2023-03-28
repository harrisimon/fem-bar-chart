import React from "react"
import "./App.css"
import Graph from "./Components/Graph"
import data from "./data.json"
import { useEffect, useState } from "react"

function App() {
  const d = new Date()
  const date_day = d.getDay()

  let day
  switch(date_day){
    case 0:
      day = 'sun'
      break
    case 1:
      day = 'mon'
      break
    case 2:
      day = 'tue'
      break
    case 3:
      day = 'wed'
      break
    case 4:
      day = 'thu'
      break
    case 5:
      day = 'fri'
      break
    case 6:
      day = 'sat'
      break
  }

	return (
    <React.Fragment>
      <Graph data={data} curr_day={day} />
    </React.Fragment>
	)
}

export default App
