import type { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import s from "./InputRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value: number) => void
};

const InputRange: React.FC<InputRangePropsType> = ({
  type,
  onChange, onChangeRange,
  className,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeRange && onChangeRange(+e.currentTarget.value);
  }

  const finalRangeClassName = `${s.range} ${className ? className : ''}`;

  return (
    <>
      <input
        type={'range'}
        onChange={onChangeCallback}
        className={finalRangeClassName}
        {...restProps}
      />
    </>
  );
}

export default InputRange;
