import { useState } from "react";
import InputText from "./common/InputText/InputText";
import s from "./UIKit.module.css";

function UIKit() {
  const [text, setText] = useState<string>("");
  const error = text ? "" : "error";

  const showAlert = () => {
    if (error) {
      alert("Input text...");
    } else {
      alert(text);
    }
  };

  return (
    <div>
      <div className={s.column}>
        <InputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
          spanClassName={s.testSpanError}
        />

        <InputText
          className={s.solidBottomBorder}
        />
      </div>
    </div>
  );
}

export default UIKit;