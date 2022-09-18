import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import { itemObjType } from "../utils/notificationPropsTypes";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface LMSSelectProps {
  id: string;
  value: string;
  data: itemObjType[];
  placeholder: string,
  onMultiSelectChange: (val: string) => void;
  selectProps?: SelectInputProps;
}

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const LMSMultiSelect: React.FC<LMSSelectProps> = ({
  id,
  value = "",
  data = [],
  placeholder = "",
  onMultiSelectChange,
  selectProps,
}) => {
  const theme = useTheme();
  const [multiSelectValue, setMultiSelectValue] =
    React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<any>): void => {
    console.log(event.target.value)
    const {
      target: { value },
    } = event;
    setMultiSelectValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    onMultiSelectChange(value.join(','));
  };

  return (
    <Select
      id={id}
      multiple
      displayEmpty
      value={multiSelectValue}
      onChange={handleChange}
      input={<OutlinedInput/>}
      MenuProps={MenuProps}
      fullWidth
      renderValue={(selected:any) => {
        if (selected.length === 0) {
          return <span>{placeholder}</span>;
        }
        return selected.join(', ');
      }}
      {...selectProps}
    >
        <MenuItem disabled value="">
            {placeholder}
        </MenuItem>
        {data.map((item: itemObjType) => (
            <MenuItem
            key={item.value}
            value={item.value}
            style={getStyles(item.value, multiSelectValue, theme)}
            >
            {item.label}
            </MenuItem>
        ))}
    </Select>
  );
};

export default LMSMultiSelect;