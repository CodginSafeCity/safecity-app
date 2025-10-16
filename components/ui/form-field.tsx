import { Control, Form } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

import Select from "react-select";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./select";
import { Textarea } from "./textarea";

type options = {
  label: string;
  value: string;
};

type FormFieldProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "checkbox"
    | "switch"
    | "select"
    | "textarea";
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
            {type === "select" ? (
              <Select
                options={options}
                defaultValue={field.value}
                onChange={(selectedOption) => {
                  field.onChange(selectedOption.value);
                }}
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 500, // Set your desired z-index value
                  }),
                }}
                // {...field}
                // {...props}
              />
            ) : // <Select>
            //   <SelectTrigger className="w-full">
            //     <SelectValue placeholder={placeholder} />
            //   </SelectTrigger>
            //   <SelectContent style={{ zIndex: 500 }}>
            //     {options?.map((opt) => (
            //       <SelectItem key={opt.value} value={opt.value}>
            //         {opt.label}
            //       </SelectItem>
            //     ))}
            //   </SelectContent>
            // </Select>
            type === "textarea" ? (
              <Textarea placeholder={placeholder} {...field} {...props} />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                autoFocus={false}
                {...props}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInputField;
