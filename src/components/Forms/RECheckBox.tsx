import {
  Box,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label: string;
  defaultValue?: string;
};

const RECheckBox = ({ name, label, defaultValue = "" }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      //   defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <FormControlLabel
              label={label}
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  // error={!!error?.message}
                  // helperText={error?.message}
                />
              }
            />

            {error && (
              <Box
                sx={{
                  textAlign: "center",
                  color: "red",
                }}
              >
                {error.message}
              </Box>
            )}
          </>
        );
      }}
    />
  );
};
export default RECheckBox;
