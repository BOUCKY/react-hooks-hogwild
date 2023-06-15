import React, {useState} from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";

import hogsData from "../porkers_data";


function App() {
	const [greased, setGreased] = useState(false)
	const toggleFilter = () => setGreased(!greased)

	const byGrease = hobObj => hobObj.greased

	const filteredHogs = greased ? hogsData.filter(byGrease) : hogsData

	const [sort, setSort] = useState('')
	const toggleSort = e => setSort(e.target.value)

	const byNameorWeight = (hogObjA, hogObjB) => {
		switch (sort){
			case 'name':
				if(hogObjA.name < hogObjB.name){
					return -1
				}
				else {
					return 1
				}
			case 'weight':
				return hogObjA.weight - hogObjB.weight
			default:
				return 0
		}
	}
	const sortedHogs = [ ...filteredHogs].sort(byNameorWeight)

	return (
		<div className="App">
			<Nav toggleFilter={toggleFilter} toggleSort={toggleSort}/>
			<PigPen hogsArray={sortedHogs}/>
		</div>
	);
}

export default App;
