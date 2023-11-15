import React from "react";
import { Counter } from "./counter";
import { Clock } from "./clock";
import { SelectTimer } from "./timer";




const Home = () => {
	return (
		<div className="counterContainer d-flex justify-content-center mt-5 bg-dark text-white ">
			<Clock />
			<Counter />
			<SelectTimer />
		</div>
	);
};

export default Home;
