"use client";

import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";

import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";
import { Footer } from "@/shared/components/Footer";
import { Input } from "@/shared/components/Input";
import { Checkbox } from "@/shared/components/Checkbox";
import { Button } from "@/shared/components/Button";
import { Radio } from "@/shared/components/Radio";
import { Textarea } from "@/shared/components/Textarea";

import { isEmail } from "@/shared/helpers/isEmail";
import { isDate } from "@/shared/helpers/isDate";
import { isTime } from "@/shared/helpers/isTime";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface RequestInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  addressOfEvent: string;
  startTime: string;
  endTime: string;
  preferredCocktails: Array<string>;
  shouldBringPortableBar: string;
  tipJar: string;
  typeOfEvent: string;
  typeOfEventCustom?: string;
  additionalEntertainment: Array<string>;
  additionalServices: Array<string>;
  moreAboutEvent: string;
}

const RequestPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestInput>({
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<RequestInput> = (data: RequestInput) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <main className={styles["request-page"]}>
        <PageTitle>Request</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles["input-group"]}>
            <Input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
                minLength: {
                  value: 2,
                  message: "Min. 2 symbols",
                },
                maxLength: {
                  value: 50,
                  message: "Max. 50 symbols",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message ?? " "}
              label="First Name"
              className={styles.input}
            />
            <Input
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
                minLength: {
                  value: 2,
                  message: "Min. 2 symbols",
                },
                maxLength: {
                  value: 50,
                  message: "Max. 50 symbols",
                },
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message ?? " "}
              label="Last Name"
              className={styles.input}
            />
          </div>
          <div className={styles["input-group"]}>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                validate: {
                  matchPattern: (v) => isEmail(v) || "Incorrect email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message ?? " "}
              label="Email"
              type="email"
              className={styles.input}
            />
            <Input
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message ?? " "}
              label="Phone"
              type="tel"
              className={styles.input}
            />
          </div>
          <div className={styles["input-group"]}>
            <Input
              {...register("eventDate", {
                required: {
                  value: true,
                  message: "Event date is required",
                },
                validate: {
                  matchPattern: (v) => {
                    if (!isDate(v)) {
                      return "Incorrect date format";
                    }

                    if (new Date(`${v}T00:00:00Z`).getTime() < Date.now()) {
                      return "Event date should be in the future";
                    }

                    return true;
                  },
                },
              })}
              error={!!errors.eventDate}
              helperText={errors.eventDate?.message ?? " "}
              label="Event date"
              type="date"
              className={styles.input}
            />
            <Input
              {...register("guestCount", {
                required: {
                  value: true,
                  message: "Guest count is required",
                },
                min: {
                  value: 1,
                  message: "Min. 1 guest",
                },
              })}
              error={!!errors.guestCount}
              helperText={errors.guestCount?.message ?? " "}
              label="Estimated guest count"
              min={1}
              type="number"
              className={styles.input}
            />
          </div>
          <div className={styles["input-group"]}>
            <Input
              {...register("addressOfEvent", {
                required: {
                  value: true,
                  message: "Address of event is required",
                },
                minLength: {
                  value: 2,
                  message: "Min. 2 symbols",
                },
              })}
              error={!!errors.addressOfEvent}
              helperText={errors.addressOfEvent?.message ?? " "}
              label="Address of event"
              className={styles.input}
            />
            <div className={cx("input-group", "time")}>
              <Input
                {...register("startTime", {
                  required: {
                    value: true,
                    message: "Start time is required",
                  },
                  validate: {
                    matchPattern: (v) => isTime(`${v}:00`) || "Incorrect time format",
                  },
                })}
                error={!!errors.startTime}
                helperText={errors.startTime?.message ?? " "}
                label="Start time"
                type="time"
                className={cx("input", "time")}
              />
              <Input
                {...register("endTime", {
                  required: {
                    value: true,
                    message: "End time is required",
                  },
                  validate: {
                    matchPattern: (v) => isTime(`${v}:00`) || "Incorrect time format",
                  },
                })}
                error={!!errors.endTime}
                helperText={errors.endTime?.message ?? " "}
                label="End time"
                type="time"
                className={cx("input", "time")}
              />
            </div>
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>What kind of drinks you want?</div>
            <div className={styles.question_option}>
              <Checkbox
                {...register("preferredCocktails", {
                  validate: {
                    minSelected: (v) => v.length > 0 || "Please select at least one option",
                  },
                })}
                id="cocktails"
                value="Cocktails"
              />
              <label htmlFor="cocktails">Cocktails</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox
                {...register("preferredCocktails", {
                  validate: {
                    minSelected: (v) => v.length > 0 || "Please select at least one option",
                  },
                })}
                id="mocktails"
                value="Mocktails"
              />
              <label htmlFor="mocktails">Mocktails</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox
                {...register("preferredCocktails", {
                  validate: {
                    minSelected: (v) => v.length > 0 || "Please select at least one option",
                  },
                })}
                id="soft-bar"
                value="Soft bar"
              />
              <label htmlFor="soft-bar">Soft bar ( only beer, wine, juice, sodas )</label>
            </div>

            {errors.preferredCocktails && (
              <div className={styles.question_error}>{errors.preferredCocktails.message}</div>
            )}
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>Does the bartender bring a portable bar?</div>
            <div className={styles.question_option}>
              <Radio
                {...register("shouldBringPortableBar", {
                  required: "Please select an option",
                })}
                id="portable-bar-yes"
                value="Yes"
              />
              <label htmlFor="portable-bar-yes">Yes</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("shouldBringPortableBar", {
                  required: "Please select an option",
                })}
                id="portable-bar-no"
                value="No"
              />
              <label htmlFor="portable-bar-no">No</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("shouldBringPortableBar", {
                  required: "Please select an option",
                })}
                id="portable-bar-not-sure"
                value="Not Sure"
              />
              <label htmlFor="portable-bar-not-sure">Not Sure</label>
            </div>

            {errors.shouldBringPortableBar && (
              <div className={styles.question_error}>{errors.shouldBringPortableBar.message}</div>
            )}
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>Tip jar / QR code?</div>
            <div className={styles.question_option}>
              <Radio
                {...register("tipJar", {
                  required: "Please select an option",
                })}
                id="tip-jar-yes"
                value="Yes"
              />
              <label htmlFor="tip-jar-yes">Yes</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("tipJar", {
                  required: "Please select an option",
                })}
                id="tip-jar-no"
                value="No"
              />
              <label htmlFor="tip-jar-no">No</label>
            </div>

            {errors.tipJar && <div className={styles.question_error}>{errors.tipJar.message}</div>}
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>What a type of your event?</div>

            <div className={styles.question_option}>
              <Radio
                {...register("typeOfEvent", {
                  required: "Please select an option",
                })}
                id="wedding"
                value="Wedding"
              />
              <label htmlFor="wedding">Wedding</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("typeOfEvent", {
                  required: "Please select an option",
                })}
                id="birthday"
                value="Birthday"
              />
              <label htmlFor="birthday">Birthday</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("typeOfEvent", {
                  required: "Please select an option",
                })}
                id="anniversary"
                value="Anniversary"
              />
              <label htmlFor="anniversary">Anniversary</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("typeOfEvent", {
                  required: "Please select an option",
                })}
                id="corporate-event"
                value="Corporate event"
              />
              <label htmlFor="corporate-event">Corporate event</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("typeOfEvent", {
                  required: "Please select an option",
                })}
                id="home-party"
                value="Home party"
              />
              <label htmlFor="home-party">Home party</label>
            </div>
            <div className={styles.question_option}>
              <Radio
                {...register("typeOfEvent", {
                  required: "Please select an option",
                })}
                id="your-answer"
                value="your-answer"
              />
              <label htmlFor="your-answer">Your answer</label>
            </div>
            <Textarea
              {...register("typeOfEventCustom", {
                required: {
                  value: watch("typeOfEvent") === "your-answer",
                  message: "Please write your answer",
                },
                minLength: {
                  value: 2,
                  message: "Min. 2 symbols",
                },
                disabled: watch("typeOfEvent") !== "your-answer",
              })}
              placeholder="Write your answer"
              resizable
              textareaClassName={styles["custom-answer-box"]}
            />

            {(errors.typeOfEvent || errors.typeOfEventCustom) && (
              <div className={styles.question_error}>
                {errors.typeOfEvent?.message ?? errors.typeOfEventCustom?.message}
              </div>
            )}
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>Additional entertainment</div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalEntertainment")} id="dry-ice-show" value="Dry ice show" />
              <label htmlFor="dry-ice-show">Dry ice show</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox
                {...register("additionalEntertainment")}
                id="cotton-candy-machine"
                value="Cotton candy machine"
              />
              <label htmlFor="cotton-candy-machine">Cotton candy machine</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalEntertainment")} id="shaved-ice-machine" value="Shaved ice machine" />
              <label htmlFor="shaved-ice-machine">Shaved ice machine</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalEntertainment")} id="pop-corn-machine" value="Pop corn machine" />
              <label htmlFor="pop-corn-machine">Pop corn machine</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalEntertainment")} id="bubble-machine" value="Bubble machine" />
              <label htmlFor="bubble-machine">Bubble machine</label>
            </div>
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>Additional services</div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalServices")} id="hookah" value="Hookah" />
              <label htmlFor="hookah">Hookah</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalServices")} id="personal-chef" value="Personal Chef" />
              <label htmlFor="personal-chef">Personal Chef</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalServices")} id="waiter" value="Waiter" />
              <label htmlFor="waiter">Waiter</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalServices")} id="vale-parking" value="Vale Parking" />
              <label htmlFor="vale-parking">Vale Parking</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalServices")} id="dj" value="DJ or sound system" />
              <label htmlFor="dj">DJ or sound system</label>
            </div>
            <div className={styles.question_option}>
              <Checkbox {...register("additionalServices")} id="videography" value="Videography or photography" />
              <label htmlFor="videography">Videography or photography</label>
            </div>
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>Tell us more about your event</div>
            <Textarea {...register("moreAboutEvent")} textareaClassName={styles["custom-answer-box"]} resizable />
          </div>

          <Button type="submit" className={styles["submit-btn"]}>
            Submit
          </Button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default RequestPage;
