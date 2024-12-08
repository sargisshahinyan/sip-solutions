import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames/bind";

import { isEmail } from "@/shared/helpers/isEmail";
import { Textarea } from "@/shared/components/Textarea";
import { Button } from "@/shared/components/Button";

import { Input } from "@/shared/components/Input";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export const ContactUsForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<ContactInput> = async (data) => {
    await fetch("/api/sip/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx("contact-us-form", className)}>
      <Input
        label="Your Name"
        error={!!errors.name}
        helperText={errors.name?.message || " "}
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
          minLength: {
            value: 2,
            message: "Min. 2 symbols",
          },
          maxLength: {
            value: 50,
            message: "Max. 50 symbols",
          },
          pattern: {
            value: /^[A-Za-z .`'/-]{2,50}$/,
            message: "Only letters, spaces, and special characters are allowed.",
          },
        })}
      />
      <Input
        label="Email Address"
        type="email"
        error={!!errors.email}
        helperText={errors.email?.message || " "}
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          validate: {
            matchPattern: (v) => isEmail(v) || "Incorrect email format",
          },
        })}
      />
      <Textarea
        label="Message"
        error={!!errors.message}
        helperText={errors.message?.message || " "}
        {...register("message", {
          required: {
            value: true,
            message: "Message required",
          },
          minLength: {
            value: 2,
            message: "Min. 2 symbols",
          },
        })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
