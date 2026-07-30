
import type { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import s from "./RadioButtons.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
};

const RadioButtons: FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label key={name + '-' + i} className={s.label}>
      <input
        className={s.radio}
        type={'radio'}
        name={name}
        value={o}
        checked={o === value}
        onChange={onChangeCallback}
        {...restProps}
      />
      {o}
    </label>
  )) : [];

  return (
    <>
      {mappedOptions}
    </>
  );
};

export default RadioButtons;
