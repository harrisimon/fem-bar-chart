import { useState } from "react"
import Day from "./Day"

const getHeight = (data) => {
	let nums = data.map((num) => num.amount)
	return Math.max(...nums)
}
const Graph = (props) => {
	const { data } = props

	let height = getHeight(data)

	let days = data.map((day, index) => (
		<Day className="day" key={index} day={day.day} amount={day.amount} />
	))

	return (
		<>
			<div className="title">Spending - Last 7 days</div>
			<div className="day">{days}</div>
		</>
	)
}

export default Graph
