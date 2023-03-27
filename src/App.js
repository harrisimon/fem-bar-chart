import logo from "./logo.svg"
import "./App.css"
import Graph from "./Components/Graph"
import data from "./data.json"

function App() {
	return (
		<div className="App">
			<div>My balance</div>
      <div className="graph">

			<Graph  data={data} />
      <hr style={{color:'black', height:'3px'}}/>
      </div>
		</div>
	)
}

export default App
