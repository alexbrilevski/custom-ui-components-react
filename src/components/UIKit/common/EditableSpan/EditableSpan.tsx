import {
  useState,
  type DetailedHTMLProps,
  type FC,
  type FocusEvent,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type MouseEvent
} from "react";
import InputText from "../InputText/InputText";
import s from "./EditableSpan.module.css";

type DefaultInputPropsType =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type DefaultSpanPropsType =
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperEditableSpanType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void,
  onEnter?: () => void,
  error?: string,
  spanClassName?: string,
  spanProps?: DefaultSpanPropsType,
};

const EditableSpan: FC<SuperEditableSpanType> = (
  {
    autoFocus,
    onBlur,
    onEnter,
    spanProps,
    ...restProps
  }
) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = () => {
    setEditMode(false);

    onEnter && onEnter();
  }
  const onBlurCallback = (e: FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    onBlur && onBlur(e);
  }
  const onDoubleClickCallBack = (e: MouseEvent<HTMLSpanElement>) => {
    setEditMode(true);
    onDoubleClick && onDoubleClick(e);
  }

  const spanClassName = `${s.editableSpan} ${className ? className : ""}`;

  return (
    <>
      {editMode
        ? (
          <InputText
            autoFocus
            onBlur={onBlurCallback}
            onEnter={onEnterCallback}
            {...restProps}
          />
        ) : (
          <span
            onDoubleClick={onDoubleClickCallBack}
            className={spanClassName}
            {...restSpanProps}
          >
            {children || restProps.value}
          </span>
        )
      }
    </>
  );
};

export default EditableSpan;
