import { ComponentProps, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends ComponentProps<"input"> {
  error?: boolean;
  helperText?: string;
  label?: string;
  inputClassName?: string;
}

export const Input = ({ className, error, helperText, label, inputClassName, id, ...props }: InputProps) => {
  const { current: idValue } = useRef(id ?? Math.random().toString(36).substring(7));

  return (
    <div className={cx("input-wrapper", className)}>
      {label && (
        <label htmlFor={idValue} className={styles.label}>
          {label}
        </label>
      )}
      <input id={idValue} className={cx("input", inputClassName)} {...props} />
      {helperText && (
        <div
          className={cx("helper-text", {
            error,
            "non-selectable": !helperText.trim(),
          })}
        >
          {helperText.trim() ? helperText : <>&nbsp;</>}
        </div>
      )}
    </div>
  );
};
