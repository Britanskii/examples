import "./App.css"
import { Greetings } from "widgets/greetings"
import { Counter } from "features/counter"

export const App = () => {
	return (
		<>
			<Greetings />
			<Counter />
		</>
	)
}
