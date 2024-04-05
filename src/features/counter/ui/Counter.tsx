import {
	ChangeEvent,
	Dispatch,
	FC,
	memo,
	SetStateAction,
	useMemo,
	useState,
} from "react"
import { AgeCounter } from "./AgeCounter.tsx"

export type Form = { age: number; name: string; surname: string }
export const Counter = () => {
	const [form, setForm] = useState({ name: "", age: 0, surname: "" })

	return (
		<>
			<AgeCounter form={form} />
			<div className="card">
				Имя <br />
				<Input setForm={setForm} name={"name"} />
			</div>
			<div className="card">
				Фамилия
				<br />
				<Input setForm={setForm} name="surname" />
			</div>
			<button onClick={() => alert(JSON.stringify(form))}>Отправить!</button>
		</>
	)
}

type InputProps = {
	name: string
	setForm: Dispatch<SetStateAction<Form>>
} & Partial<HTMLInputElement>

const Input: FC<InputProps> = memo(({ name, setForm, type = "text" }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setForm((form) => ({ ...form, [name]: value }))
	}

	return <input onChange={handleChange} name={name} type={type} />
})
