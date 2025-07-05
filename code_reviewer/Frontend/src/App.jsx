import { useState, useEffect } from 'react' 
//You're bringing in React Hooks:useState: to store and change values (like variables that trigger UI updates).
//useEffect: to run code when your component is loaded (like onload).
import "prismjs/themes/prism-tomorrow.css" //This line loads a dark theme style for code syntax highlighting using Prism.js.
import Editor from "react-simple-code-editor" //You're importing a code editor component (like a mini VS Code in the browser).
import prism from "prismjs"//Importing the prism library to highlight the code inside the editor (colors, fonts, etc.).
import Markdown from "react-markdown" //This lets you render Markdown (like **bold**, # heading, or code blocks) into real HTML.
import rehypeHighlight from "rehype-highlight";//This is a plugin for react-markdown to highlight code blocks inside the markdown.
import "highlight.js/styles/github-dark.css";//A dark style (like GitHub) for the code shown in the Markdown preview area.
import axios from 'axios'//Importing axios, a tool to make HTTP requests (like asking a server for data).
import './App.css'//This brings in custom CSS styles for your app (like layout, colors, fonts).

function App() { //This defines your main React component (App) — like a page or app screen.
  const [ count, setCount ] = useState(0)//A state variable count, starting at 0. setCount is a function to update it.
  const [ code, setCode ] = useState(` function sum() { 
  return 1 + 1
}`)
//you're storing a default code snippet (function sum() { return 1 + 1 }) in state.code holds the text, and setCode updates it.
  const [ review, setReview ] = useState(``) //This stores the AI review response you’ll get from the backend (starts empty).

  useEffect(() => {
    prism.highlightAll()
  }, [])
//When the app loads, highlight any code using PrismJS.Runs only once because of the empty dependency array []
  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }
//When user clicks Review, this sends the code to your backend (localhost:3000/ai/get-review).
//axios.post() makes a POST request with the code.The response (response.data) is stored in review.
  // what is returned on the screen ,Left section of the screen contains the code editor.
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor  //This is the code editor:
              value={code} //Shows current code from state.
              onValueChange={code => setCode(code)} //Updates the code when user types
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")} //Syntax highlights it using Prism.js.
              padding={10} //Custom styles applied like font, border, etc.
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}  //A clickable button (div) that runs reviewCode() function when clicked.Triggers the review process.
            className="review">Review</div> 
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}
//This section displays the review using react-markdown.
//If the review contains any Markdown or code, it renders properly and highlights code blocks.

export default App //Makes this component available to be used elsewhere — usually in main.jsx
