import { useState } from "react";
import "./App.css";
import KeyBoard from "./Components/KeyBoard";
import DisplayText from "./Components/DisplayText";
import Color from "./Components/Color";
import Size from "./Components/Size";
import { Lang } from "./Components/Lang";
import "./Components/Btn.css";
function App() {
  const [text, setText] = useState([]);
  const [lang2, setLang] = useState("");
  const [value, setValue] = useState(
    "1234567890-=qwertyuiop[]asdfghjkl;'<>zxcvbnm,./"
  );
  const [undo, setundo] = useState([]);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("12");

  function handleUndo() {
    if (!undo[0]) {
      return;
    }
    setText(undo[undo.length - 1]);
    setundo((prev) => [...prev].slice(0, prev.length - 1));
  }

  function handleText(key) {
    if (key == -1) {
      setText((prev) => [...prev].slice(0, prev.length - 1));
      setundo((prev) => [...prev, text]);
      return;
    } else if (key == "All") {
      setText((prev) => []);
      setundo((prev) => [...prev, text]);
      return;
    }
    setText((prev) => {
      setundo((prev) => [...prev, text]);
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
        setValue("1234567890-=qwertyuiop[]asdfghjkl;'<>zxcvbnm,./");
        break;
      case "heb":
        setValue("1234567890-=/'קראטוןםפ][שדגכעיחלךף,<זסבהנמצתץ.ד");
        break;
      case "rus":
        setValue("ё1234567890-ъяшертыуиопющэасдфгчйкльжзхцвбнм;:");
        break;
      case "arb":
        setValue("1234567890ء=قويرتيويوپ[]اسدفعهجكل؛'<زخچڢبنم،.");
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
        <button
          className="colorbtn"
          id="undo"
          type="button"
          onClick={handleUndo}
        >
          Undo
        </button>
      </div>
      <DisplayText text={text} />
      <KeyBoard value={value} lang={lang2} setText={handleText} />
    </>
  );
}

export default App;
