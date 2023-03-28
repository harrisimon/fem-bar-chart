import React from "react"
import Day from "./Day"
import logo from "../logo.svg"

const Graph = (props) => {
	const { data, curr_day } = props

	let days = data.map((day, index) => (
		<Day
			className="day"
			key={index}
			day={day.day}
			amount={day.amount}
			curr_day={curr_day}
		/>
	))

	return (
		<div className="box">
			<div className="balance">
				<div>
					<small id="balance-title">My balance</small>
					<span id="current-balance">$543.22</span>
				</div>
				<div>
					<img src={logo} />
				</div>
			</div>
			<div className="graph-box">
				<h2 className="title">Spending - Last 7 days</h2>
				<div className="day">{days}</div>
				<hr />
				<small className="label">Total this month</small>
				<div className="recap">
					<div className="nums">
						<span className="monthly-total">$478.44</span>
					</div>
					<div>
						<span id="perc">+2.4%</span>
						<small className="label">from last month</small>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Graph
