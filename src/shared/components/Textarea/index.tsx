import { ComponentProps } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface TextareaProps extends ComponentProps<"textarea"> {
  error?: boolean;
  helperText?: string;
  label?: string;
  textareaClassName?: string;
  resizable?: boolean;
}

export const Textarea = ({
  className,
  error,
  helperText,
  label,
  textareaClassName,
  id,
  resizable,
  ...props
}: TextareaProps) => {
  return (
    <div className={cx("textarea-wrapper", className)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea className={cx("textarea", textareaClassName, { resizable })} id={id} {...props} />
      {helperText && (
        <div
          className={cx("helper-text", {
            error,
            "select-none": !helperText.trim(),
          })}
        >
          {helperText.trim() ? helperText : <>&nbsp;</>}
        </div>
      )}
    </div>
  );
};
