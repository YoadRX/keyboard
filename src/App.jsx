import { useState } from "react";
import "./App.css";
import KeyBoard from "./Components/KeyBoard";
import DisplayText from "./Components/DisplayText";
import Color from "./Components/Color";
import Size from "./Components/Size";
import Lang from "./Components/Lang";

function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("eng");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("12");
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

  function handleColor(color) {
    setColor(color);
  }

  function handleLang(lang) {
    console.log(lang);

    setLang(lang);
  }

  function handleSize(event) {
    console.log(event.target.value);
    setSize(event.target.value);
  }

  return (
    <>
      <div id="bar">
        <Color setColor={handleColor} />
        <Size handleSize={handleSize} />
        <Lang setLang={handleLang} />
      </div>
      <DisplayText text={text} color={color} size={size} />
      <KeyBoard
        value="1234567890-=qwertyuiop[]asdfghjkl;'\<>zxcvbnm,./"
        lang={lang}
        setText={handleText}
      />
      {/* <KeyBoard
        value="1234567890-=/'קראטוןםפ][שדגכעיחלךף,\<זסבהנמצתץ.ד"
        lang="heb"
        setText={handleText}
      /> */}
    </>
  );
}

export default App;
