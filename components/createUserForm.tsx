import React, { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button
} from "@chakra-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onSubmit: (vals: any) => void;
}

export default function createUserForm({ onSubmit }: Props): ReactElement {
  const [since, setSince] = useState(new Date());
  const { register, handleSubmit, setValue, errors } = useForm();
  const onDateChange: (date: Date) => void = (date: Date) => {
    date.setHours(0);
    date.setMinutes(0);
    setSince(date);
    setValue("since", date); // to save state in hooks form
  };
  setValue("since", since);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className="border-gray-400 rounded my-4">
        <FormLabel htmlFor="email">Your username</FormLabel>
        <Input
          name="username"
          placeholder="username"
          aria-describedby="username-helper-text"
          ref={register({ required: true })}
        />
        <FormHelperText id="username-helper-text">
          This will be displyed
        </FormHelperText>
      </FormControl>
      <FormControl className="border-gray-400 rounded my-4">
        <FormLabel htmlFor="email">Your email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="email"
          aria-describedby="email-helper-text"
          ref={register({ required: true })}
        />
        <FormHelperText id="email-helper-text">
          We never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl className="border-gray-400 rounded my-4">
        <FormLabel htmlFor="email">Your tagline</FormLabel>
        <Input
          aria-describedby="tagline-helper-text"
          name="tagline"
          placeholder="tagline"
          ref={register}
        />
        <FormHelperText id="tagline-helper-text">
          Your motivation in 140 chars or less. Displayed under your username.
        </FormHelperText>
      </FormControl>
      <input name="since" hidden ref={register} />
      <FormControl className="border-gray-400 rounded my-4">
        <FormLabel htmlFor="since">Your start Date</FormLabel>
        <DatePicker
          selected={since}
          ref={register}
          name="since"
          maxDate={new Date()}
          onChange={onDateChange}
          label="Your sober start date"
          className="bg-white border border-gray-400 my-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
        />
        <FormHelperText id="since-helper-text">
          Pick the date when you started to get sober!
        </FormHelperText>
      </FormControl>

      {/* errors will return when field validation fails  */}
      {errors.usernameRequired && (
        <FormErrorMessage>This field is required</FormErrorMessage>
      )}

      <Button size="lg" type="submit" variantColor="green">
        Get Sober
      </Button>
    </form>
  );
}
