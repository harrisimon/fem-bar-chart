import Bar from "./Bar"
const Day = (props) => {
	const { day, amount, curr_day } = props

	let currDayStyle = curr_day === day ? 0 : 1

	return (
		<>
			<div className="bar-section">
				<small className="bar-section__label">${amount}</small>
				<Bar amount={amount} currDayStyle={currDayStyle} />
				<small className="label">{day}</small>
			</div>
		</>
	)
}

export default Day
