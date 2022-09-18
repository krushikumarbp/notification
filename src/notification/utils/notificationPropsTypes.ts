export interface InputBoxObjType {
  id: string;
  label: string;
  key: string;
}

export interface DropDownObjType {
  id: string;
  label: string;
  key: string;
  data: itemObjType[];
  isMultiselect: boolean;
  placeholder: string;
}
export interface itemObjType {
  value: string;
  label: string;
}
