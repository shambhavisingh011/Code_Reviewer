import js from '@eslint/js' //You’re importing standard JavaScript rules from ESLint’s official package.These are like basic grammar rules for JavaScript (no-unused-vars, no-undef, etc.).
import globals from 'globals'// This imports a list of global variables for different environments like browsers or Node.js.
import reactHooks from 'eslint-plugin-react-hooks'//This brings in rules for React Hooks like useState, useEffect, etc. helps u use hook properly
import reactRefresh from 'eslint-plugin-react-refresh'//Adds a rule to ensure hot reloading works correctly with React.Prevents bugs when using tools like Vite or Webpack with fast-refresh.

export default [ //This line starts the ESLint configuration and exports it so tools can use it.
  { ignores: ['dist'] }, //Tells ESLint to ignore the dist/ folder.dist is where your final production build goes — no need to lint it.
  {
    files: ['**/*.{js,jsx}'], // This block applies to all .js and .jsx files in your project (React code).**/* means: in any folder, any file.
    languageOptions: {
      ecmaVersion: 2020, //Use JavaScript 2020 syntax (optional chaining, nullish coalescing, etc.).
      globals: globals.browser, //Enables browser globals like window, document, console, etc.
      parserOptions: {   //Tells ESLint: Use the latest ECMAScript version Enable JSX (needed for React).This is a module-based file (uses import/export).
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks, //Loads the React-related plugins so you can use their special rules.
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, //Uses all recommended JS rules (like missing semicolons, undefined variables, etc.).
      ...reactHooks.configs.recommended.rules, //Adds recommended rules for React Hooks, like:Always call hooks at the top of the function.Don’t forget dependencies in useEffect.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], //Gives an error if variables are unused.But ignores variables that start with an uppercase letter or underscore (e.g., _DEBUG, CONSTANT).
      'react-refresh/only-export-components': [
        'warn', //Warns if you're exporting things in a way that breaks hot reload.Allows safe export of constants
        { allowConstantExport: true },
      ],
    },
  },
]
