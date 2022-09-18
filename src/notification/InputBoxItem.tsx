import React from 'react';
import { Grid } from "@mui/material";
import LMSTextField from "./common/LMSTextField";

interface InputBoxItemProps {
  label: string;
  value: string;
  id: string;
  onChange: (val: string) => void;
}

const InputBoxItem: React.FC<InputBoxItemProps> = ({
  label,
  value,
  id,
  onChange,
}) => {
  return (
    <>
        <Grid item xs={4} textAlign="right">
            {label}
        </Grid>
        <Grid item xs={8}>
            <LMSTextField
            value={value}
            id={id}
            label={label}
            onInputChange={onChange}
            />
        </Grid>
    </>
  );
};

export default InputBoxItem;
