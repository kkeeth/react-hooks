import type { FC } from "react";
import "./App.css";
import UniteStates from "./components/unite-states";

const App: FC = () => {
	return (
		<>
			<div className="App">This is the Template for React App</div>
			<div>
				<UniteStates />
			</div>
		</>
	);
};

export default App;
