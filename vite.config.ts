import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src") },
			{ find: "widgets", replacement: path.resolve(__dirname, "src/widgets") },
			{
				find: "features",
				replacement: path.resolve(__dirname, "src/features"),
			},
			{ find: "shared", replacement: path.resolve(__dirname, "src/shared") },
			{ find: "app", replacement: path.resolve(__dirname, "src/app") },
		],
	},
})
