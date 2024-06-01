import { SxProps, TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  InputProps?: TextFieldProps["InputProps"];
};

const REInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth = true,
  sx,
  required,
  InputProps,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
          InputProps={InputProps}
        />
      )}
    />
  );
};

export default REInput;
