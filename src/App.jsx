import { useState } from "react";
import "./App.css";
import KeyBoard from "./Components/KeyBoard";
import DisplayText from "./Components/DisplayText";
import Color from "./Components/Color";
import Size from "./Components/Size";
import { Lang } from "./Components/Lang";

function App() {
  const [text, setText] = useState("");
  const [lang2, setLang] = useState("");
  const [value, setValue] = useState(
    "1234567890-=qwertyuiop[]asdfghjkl;'<>zxcvbnm,./"
  );
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
      return [...prev, { char: key, color: color, size: size }];
    });
  }

  function handleColor(color) {
    setColor(color);
  }

  function handleLang(lang) {
    console.log(lang);
    setLang(lang);
    switch (lang) {
      case "eng":
        console.log("here");
        setValue("1234567890-=qwertyuiop[]asdfghjkl;'<>zxcvbnm,./");
        break;
      case "heb":
        setValue("1234567890-=/'קראטוןםפ][שדגכעיחלךף,<זסבהנמצתץ.ד");
        break;
      case "span":
        setValue("1234567890-=/'קראטוןםפ][שדגכעיחלךף,<זסבהנמצתץ.ד");
        break;
    }
  }

  function handleSize(event) {
    setSize(event.target.value);
  }

  return (
    <>
      <div id="bar">
        <Color setColor={handleColor} />
        <Size handleSize={handleSize} />
        <Lang setLang={handleLang} />
      </div>
      <DisplayText text={text} />
      <KeyBoard value={value} lang={lang2} setText={handleText} />
    </>
  );
}

export default App;
