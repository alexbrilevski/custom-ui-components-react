import { type ChangeEvent, useState } from "react";
import InputText from "./common/InputText/InputText";
import Button from "./common/Button/Button";
import Checkbox from "./common/Checkbox/Checkbox";
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

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

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

        <Button className={s.blueBackground}>
          default
        </Button>

        <Button
          red
          onClick={showAlert}
        >
          delete
        </Button>

        <Button disabled>
          disabled
        </Button>

        <Checkbox
          checked={checked}
          onChangeChecked={setChecked}
        >
          some text
        </Checkbox>

        <Checkbox
          checked={checked}
          onChange={testOnChange}
        />
      </div>
    </div>
  );
}

export default UIKit;