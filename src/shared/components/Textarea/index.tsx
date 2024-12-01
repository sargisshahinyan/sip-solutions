import { ComponentProps } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface TextareaProps extends ComponentProps<"textarea"> {
  error?: boolean;
  helperText?: string;
  label?: string;
  textareaClassName?: string;
}

export const Textarea = ({ className, error, helperText, label, textareaClassName, ...props }: TextareaProps) => {
  return (
    <div className={cx("textarea-wrapper", className)}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={cx("textarea", textareaClassName)} {...props} />
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
