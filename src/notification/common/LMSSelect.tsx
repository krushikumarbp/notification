import * as React from "react";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import { itemObjType } from '../utils/notificationPropsTypes';

interface LMSSelectProps {
  id: string;
  value: string;
  data: itemObjType[];
  placeholder: string,
  onSelectChange: (val: string) => void;
  selectProps?: SelectInputProps;
}

const LMSSelect: React.FC<LMSSelectProps> = ({
  id,
  value = "",
  data = [],
  placeholder = "",
  onSelectChange,
  selectProps,
}) => {
  const [selectValue, setSelectValue] = useState<string>(value);

  useEffect(() => {
    // this will perform the prefilled select value
    if (value) {
      onSelectChange(value);
    }
  }, [value]);

  const handleChange = (event: SelectChangeEvent<any>): void => {
    const val = event.target.value;
    updateValueToState(val);
  };

  const updateValueToState = (val: string) => {
    // this will update the selected value on this component state
    setSelectValue(val);
    onSelectChange(val);
  };

  return (
      <Select
        id={id}
        value={selectValue}
        onChange={handleChange}
        fullWidth
        displayEmpty
        {...selectProps}
      >
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
        {data.map((item: itemObjType) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
  );
};

export default LMSSelect;
