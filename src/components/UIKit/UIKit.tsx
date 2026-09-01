import { type ChangeEvent, useState } from "react";
import InputText from "./common/InputText/InputText";
import Button from "./common/Button/Button";
import Checkbox from "./common/Checkbox/Checkbox";
import s from "./UIKit.module.css";
import EditableSpan from "./common/EditableSpan/EditableSpan";
import { restoreState, saveState } from "../../utils/localStorage";
import Select from "./common/Select/Select";
import RadioButtons from "./common/RadioButtons/RadioButtons";
import InputRange from "./common/InputRange/InputRange";

const arr = ["a", "b", "c"];

function UIKit() {
  const [value1, setValue1] = useState(0);
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

  const save = () => {
    saveState<string>("editable-span-value", text);
  };

  const restore = () => {
    setText(restoreState<string>("editable-span-value", ""));
  };

  const [value, onChangeOption] = useState(arr[1]);

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

        <div>
          <EditableSpan
            value={text}
            onChangeText={setText}
            spanProps={{ children: text ? undefined : "enter text..." }}
          />
        </div>
        <Button onClick={save}>save</Button>
        <Button onClick={restore}>restore</Button>

        <div>
          <Select
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>

        <div>
          <RadioButtons
            name={"radio"}
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>

        <div className={s.rangeWrap}>
          <span>{value1}</span>
          <InputRange
            value={value1}
            onChangeRange={setValue1}
          />
        </div>
      </div>
    </div>
  );
}

export default UIKit;