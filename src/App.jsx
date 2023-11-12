import { useState } from "react";
import "./App.css";
import KeyBoard from "./Components/KeyBoard";
import DisplayText from "./Components/DisplayText";
import Bar from "./Components/Bar";

function App() {
  const [text, setText] = useState("jpoiegir\nnlkfe");
  function handleText(key) {
    if (key == -1) {
      setText((prev) => prev.slice(0, prev.length - 1));
      return;
    } else if (key == "All") {
      setText((prev) => "");
      return;
    }
    setText((prev) => {
      console.log(prev + key);
      return prev + key;
    });
  }

  return (
    <>
      <Bar></Bar>
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
