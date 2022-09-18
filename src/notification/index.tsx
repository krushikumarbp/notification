import React from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownListItem from "./DropdownListItem";
import InputBoxItem from "./InputBoxItem";
// import LMSCKEditor from "./LMSCKEditor";
import LMSWysiwgEditor from "./LMSWysiwgEditor";
import {
  name,
  category,
  event,
  tracked,
  group,
  users,
  recipient,
  specificuser,
  defineddays,
  subject,
  removeFields,
} from "./utils/notificationJsonData";
import {
  InputBoxObjType,
  DropDownObjType,
} from "./utils/notificationPropsTypes";

interface DdlStateInterface {
  [key: string]: string;
}

const Notification = () => {
  const [state, setState] = useState<DdlStateInterface | null>(null);
  const handleOnchange = (key: string, value: string) => {
    if (state && state.hasOwnProperty(key)) {
      switch (key) {
        case "category":
          removeFieldsFunc(removeFields["category"]);
          break;
      }
    }
    setState((prv) => ({
      ...prv,
      [key]: value,
    }));
  };

  const removeFieldsFunc = (fieldTypeArr: string[]): void => {
    let tempState = { ...state };
    for (const item of fieldTypeArr) {
      if (tempState && tempState.hasOwnProperty(item)) {
        tempState = withoutProperty(tempState, item);
      }
    }
    setState(tempState);
  };
  const withoutProperty = (
    obj: DdlStateInterface,
    property: string
  ): DdlStateInterface => {
    const { [property]: unused, ...rest } = obj;
    console.log(rest);
    return rest;
  };
  console.log(state);
  const renderDropdown = (data: DropDownObjType) => (
    <DropdownListItem
      id={data.id}
      label={data.label}
      data={data.data}
      placeholder={data.placeholder}
      value={state ? state[data.id] : ""}
      isMultiselect={data.isMultiselect}
      onChange={(value) => handleOnchange(data.id, value)}
    />
  );
  const renderInputBox = (data: InputBoxObjType) => (
    <InputBoxItem
      id={data.id}
      label={data.label}
      value={state ? state[data.id] : ""}
      onChange={(value) => handleOnchange(data.id, value)}
    />
  );

  const renderDropdownList = (): JSX.Element[] => {
    const dropDownList: JSX.Element[] = [];
    dropDownList.push(renderInputBox(name));
    dropDownList.push(renderDropdown(category));
    if (state && state.category) {
      dropDownList.push(renderDropdown(event));
    }
    if (state && state.event) {
      dropDownList.push(renderDropdown(tracked));
    }
    if (state && state.tracked && state.tracked === "group") {
      dropDownList.push(renderDropdown(group));
    }
    if (state && state.tracked && state.tracked === "users") {
      dropDownList.push(renderDropdown(users));
    }
    if (state && (state.group || state.users)) {
      dropDownList.push(renderDropdown(recipient));
    }
    if (state && state.recipient && state.recipient === "su") {
      dropDownList.push(renderInputBox(specificuser));
    }
    if (state && state.recipient) {
      dropDownList.push(renderInputBox(defineddays));
    }
    if (state && state.defineddays) {
      dropDownList.push(renderInputBox(subject));
    }

    return dropDownList;
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card variant="outlined">
        <CardHeader
          title="Hello this is card header"
          sx={{ backgroundColor: "#007FFF", color: "#FFFFFF" }}
        />
        <CardContent>
          <Grid container spacing={2} rowSpacing={1} alignItems="center">
            {renderDropdownList()}
            {/* <LMSCKEditor/> */}
            <LMSWysiwgEditor/>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notification;
