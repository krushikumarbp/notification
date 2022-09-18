import React from "react";
import { Grid } from "@mui/material";
import LMSSelect from "./common/LMSSelect";
import LMSMultiSelect from "./common/LMSMultiSelect";
import { itemObjType } from "./utils/notificationPropsTypes";

interface DropdownListItemProps {
  id: string;
  label: string;
  value: string;
  data: itemObjType[];
  placeholder: string;
  isMultiselect: boolean;
  onChange: (value: string) => void;
}

const DropdownListItem: React.FC<DropdownListItemProps> = ({
  id,
  label,
  value,
  data,
  isMultiselect,
  placeholder,
  onChange,
}) => {
  console.log(isMultiselect)
  return (
    <>
      <Grid item xs={4} textAlign="right">
        {label}
      </Grid>
      <Grid item xs={8}>
        {isMultiselect ? (
          <LMSMultiSelect
            id={id}
            value={value}
            data={data}
            placeholder={placeholder}
            onMultiSelectChange={onChange}
          />
        ) : (
          <LMSSelect
            id={id}
            value={value}
            data={data}
            placeholder={placeholder}
            onSelectChange={onChange}
          />
        )}
      </Grid>
    </>
  );
};

export default DropdownListItem;
