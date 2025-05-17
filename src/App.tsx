import { useState, type FC } from "react";
import "./App.css";

const App: FC = () => {
	const [count, setCount] = useState<number>(0);
	const increment = (): void => setCount(count + 1);
	const decrement = (): void => setCount(count - 1);

	const incrementWithFunction = (): void =>
		setCount((previousCount: number): number => previousCount + 1);
	const decrementWithFunction = (): void =>
		setCount((previousCount: number): number => previousCount - 1);

	const reset = (): void => setCount(0);
	const double = (): void => setCount(count * 2);
	const mod3 = (): void =>
		setCount((previousCount: number): number => {
			if (previousCount % 3 !== 0) return previousCount;
			return previousCount / 3;
		});

	return (
		<>
			<div className="App">count: {count}</div>
			<div>
				<button type="button" onClick={increment}>
					+1
				</button>
				<button type="button" onClick={decrement}>
					-1
				</button>
			</div>
			<div>
				<button type="button" onClick={incrementWithFunction}>
					+1
				</button>
				<button type="button" onClick={decrementWithFunction}>
					-1
				</button>
			</div>
			<div>
				<button type="button" onClick={reset}>
					reset
				</button>
				<button type="button" onClick={double}>
					x2
				</button>
			</div>
			<div>
				<button type="button" onClick={mod3}>
					Divide by 3 only if it is a multiple of 3
				</button>
			</div>
		</>
	);
};

export default App;
