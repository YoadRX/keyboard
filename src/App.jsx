import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Size from "./Components/Size";
import Color from "./Components/Color";
import KeyBoard from "./Components/KeyBoard";
import Lang from "./Components/Lang";
import DisplayText from "./Components/DisplayText";

function App() {
  const [text, setText] = useState("");

  function handleText(key) {
    setText((prev) => prev + key);
  }

  return (
    <>
      <DisplayText text={text} />
      <KeyBoard
        value="1234567890-=qwertyuiop[]asdfghjkl;'\<>zxcvbnm,./"
        lang="eng"
        setText={handleText}
      />
    </>
  );
}

export default App;
