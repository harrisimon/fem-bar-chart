import Bar from "./Bar"
const Day = (props) => {
	const { day, amount, max, curr_day } = props
	let proportion = amount / max
	// console.log(proportion)
	let style = (curr_day === day) ? 0 : 1
	

	return (
		<>
		<div className="bar-section">
			<small className="bar-section__label">${amount}</small>
			<Bar amount={amount} style={style}/>
			<small className="label">{day}</small>
		 </div>
		</>
	)
}

export default Day
