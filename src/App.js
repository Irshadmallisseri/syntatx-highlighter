import React, { useState } from "react";

import { Dropdown } from "./components/Dropdown";
import { Editor } from "./components/Editor";
import { Highlighter } from "./components/Highlighter";

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

import "./App.css";

const defaultLanguage = "python" || Object.keys(languages).sort()[0];
const defaultTheme = "androidstudio" || Object.keys(themes).sort()[0];

export default function App() {
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1 className="heading">React Code Editor and Syntax Highlighter</h1>
      <div className="ControlsBox">
        <h3 className="titles">Select Language</h3>
        <h3 className="titles">Select Theme</h3>

        <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setTheme(e.target.value)}
          data={themes}
        />
      </div>
      <div className="PanelsBox">
        <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language} theme={themes[theme]}>
          {input}
        </Highlighter>
      </div>
    </div>
  );
}