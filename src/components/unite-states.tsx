import { useState, type FC } from "react";
import "../App.css";

type UnitePrice = {
	name: string;
	price: number;
};

const UniteStates: FC<UnitePrice> = (
	props = {
		name: "kkeeth",
		price: 1000,
	},
) => {
	const [state, setState] = useState(props);
	const { name, price } = state;

	return (
		<>
			<div className="App">
				<p>
					Now {state.name} is ￥{price}.
				</p>
				<button
					type="button"
					onClick={() => setState({ ...state, price: price + 1 })}
				>
					+1
				</button>
				<button
					type="button"
					onClick={() => setState({ ...state, price: price - 1 })}
				>
					-1
				</button>
				<button type="button" onClick={() => setState(props)}>
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
