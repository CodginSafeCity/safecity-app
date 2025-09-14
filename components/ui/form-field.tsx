import { Control, Form } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

type options = {
  label: string;
  value: string;
};

type FormFieldProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "checkbox" | "switch" | "select";
  options?: options[];
  // Type props for input component
  [x: string]: any;
};
const FormInputField = ({
  control,
  name,
  label,
  placeholder,
  type,
  options,
  ...props
}: FormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && type !== "checkbox" && type !== "switch" && (
            <FormLabel>{label}</FormLabel>
          )}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...props}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInputField;
