import { defineConfig } from 'vite' //Imports a helper function defineConfig from Vite.It helps with auto-complete and type checking if you're using TypeScript or an IDE.
import react from '@vitejs/plugin-react' //Imports the official React plugin for Vite.

// https://vite.dev/config/
export default defineConfig({ //Exports the configuration using defineConfig() so Vite can read it.
  plugins: [react()], //Tells Vite: “Use the React plugin.”Understand .jsx/.tsx files Properly build the React app
})
//Hey, I’m building a React app — use the React plugin to make everything work properly
