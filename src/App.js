import React from "react"
import "./App.css"
import Graph from "./Components/Graph"
import data from "./data.json"

function App() {
	const d = new Date()
	const date_day = d.getDay()

	let day
	switch (date_day) {
		case 0:
			day = "sun"
			break
		case 1:
			day = "mon"
			break
		case 2:
			day = "tue"
			break
		case 3:
			day = "wed"
			break
		case 4:
			day = "thu"
			break
		case 5:
			day = "fri"
			break
		case 6:
			day = "sat"
			break
    default:
      day = 'sun'
	}

	return (
		<div
			className="App"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Graph data={data} curr_day={day} />
		</div>
	)
}

export default App
