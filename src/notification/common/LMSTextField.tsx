import * as React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface LMSTextFieldProps {
  id: string;
  label: string;
  value: string;
  onInputChange: (val: string) => void;
  textFieldProps?: TextFieldProps;
}

const LMSTextField: React.FC<LMSTextFieldProps> = ({
  id,
  label,
  value = "",
  onInputChange,
  textFieldProps,
}) => {
  const [inputValue, setValue] = useState<string>(value);

  useEffect(() => {
    // this will perform the prefilled input value
    if (value) {
      updateValueToState(value)
    }
  }, [value])

  const hanldeInputValueUpdate = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const val = event.target.value;
    updateValueToState(val)
  };

  const updateValueToState = (val: string) => {
    // this will update the input value on this component state
    setValue(val);
    onInputChange(val);
  } 

  return (
    <TextField
      value={inputValue}
      id={id}
      aria-label={label}
      onChange={hanldeInputValueUpdate}
      hiddenLabel
      {...textFieldProps}
    />
  );
};

export default LMSTextField;
