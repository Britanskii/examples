import { ReactImage, ViteImage } from "shared/assets"

export const Greetings = () => {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={ViteImage} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={ReactImage} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
		</>
	)
}
