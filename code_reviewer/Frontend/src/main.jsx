import { StrictMode } from 'react' //You’re importing StrictMode from React.It helps you find problems in your app early (like a teacher pointing out mistakes).
//It doesn’t affect how your app looks — just shows warnings in the console during development.
import { createRoot } from 'react-dom/client' //React needs to connect your app to the actual HTML page createRoot is the new way (React 18+) to do this.It tells React: “Hey, put the app inside this HTML element.”
import './index.css'//This imports the global CSS file (index.css) we just talked about.Applies styles like font, layout, colors, etc., to the whole app.
import App from './App.jsx'// This brings in your main component (App) from App.jsx.This is the actual UI with the code editor and review section.

createRoot(document.getElementById('root')).render( //Finds the HTML element with id root (in index.html).Creates a React "connection" to that div.Then renders (displays) your React app inside it.
  <StrictMode>
    <App />
  </StrictMode>,
)//Wraps your app to catch common bugs and give warnings.Only used during development. It’s like training wheels — safe to remove in production.
//This file is the entry point — it launches your React app and places it into the real webpage.
