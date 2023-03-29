import { useState } from "react"
export default function Bar({ amount, currDayStyle}) {
	const [isHover, setIsHover] = useState(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}

	let height = amount * 2.5

	let barStyle =
		currDayStyle === 1
			? {
					display: "flex",
					justifyContent: "center",
					height: `${height}px`,
					width: "40px",
					borderRadius: "5px",
					backgroundColor: isHover ? "rgb(241,160,140)" : "#DC7C64",
					margin: "0",
			  }
			: {
					display: "flex",
					justifyContent: "center",
					height: `${height}px`,
					width: "40px",
					borderRadius: "5px",
					backgroundColor: isHover ? "rgb(189,	222	,228)" : "#7DA9B0",
					margin: "0",
			  }

	return (
		<span
			className="bar"
			style={barStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		></span>
	)
}
