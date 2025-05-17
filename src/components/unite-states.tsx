import { useState, useEffect, type FC } from "react";
import "../App.css";

type UnitePrice = {
	name: string;
	price: number;
};

const UniteStates: FC<UnitePrice> = ({ name = "kkeeth", price = 1000 }) => {
	const [state, setState] = useState({ name, price });
	console.log(state);

	useEffect(() => {
		console.log("use effect is invoked");
	});

	const renderPeriod = () => {
		console.log("renderPeriod renders period");
		return ".";
	};

	return (
		<>
			<div className="App">
				<p>
					Now {state.name} is ￥{state.price}
					{renderPeriod()}
				</p>
				<button
					type="button"
					onClick={() => setState({ ...state, price: state.price + 1 })}
				>
					+1
				</button>
				<button
					type="button"
					onClick={() => setState({ ...state, price: state.price - 1 })}
				>
					-1
				</button>
				<button type="button" onClick={() => setState({ name, price })}>
					reset
				</button>
				<input
					value={name}
					onChange={(e) => setState({ ...state, name: e.target.value })}
				/>
			</div>
		</>
	);
};

export default UniteStates;
