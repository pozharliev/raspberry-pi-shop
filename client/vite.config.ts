import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslintPlugin()],
	resolve: {
		alias: [{ find: "@app", replacement: path.resolve(__dirname, "src/") }],
	},
});
