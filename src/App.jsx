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
  function handleText(key) {
    if (key === -1) {
      setText((prev) => prev.slice(0, prev.length - 1));
      return;
    } else if (key === "All") {
      setText(() => "");
      return;
    }
    setText((prev) => {
      console.log(prev + key);
      return prev + key;
    });
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

  return (
    <>
      <div id="bar">
        <Color />
        <Size />
        <Lang setLang={handleLang} />
      </div>
      <DisplayText text={text} />
      <KeyBoard value={value} lang={lang2} setText={handleText} />
    </>
  );
}

export default App;
