const Day = (props) => {
	const { day, amount } = props
	return (
		<div className="bar-section">
            <div className="bar">


			<div className="amount">
				{amount}
				</div>
			</div>
			<br />
			{day}
		</div>
	)
}

export default Day
