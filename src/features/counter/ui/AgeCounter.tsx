import { FC, useState } from "react"
import { Form } from "./Counter.tsx"

type AgeCounterProps = {
	form: Form
}

export const AgeCounter: FC<AgeCounterProps> = ({ form }) => {
	const [age, setAge] = useState(0)

	const handleIncrementCounter = () => {
		setAge((age) => {
			const newAge = age + 1
			form.age = newAge
			return newAge
		})
	}

	return (
		<div className="card">
			<button onClick={handleIncrementCounter}>age is {age}</button>
		</div>
	)
}
