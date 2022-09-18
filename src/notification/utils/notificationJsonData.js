export const name = {
  id: "name",
  label: "Name",
  value: "",
  key: "name",
};

export const category = {
  id: "category",
  label: "Category",
  key: "category",
  data: [
    { value: "assignment", label: "Assignment" },
    { value: "learningPlan", label: "Learning Plan" },
    { value: "classroom", label: "Classroom" },
    { value: "expiration", label: "Expiration" },
    { value: "completion", label: "Completion" },
    { value: "newUser", label: "New User" },
  ],
  isMultiselect: false,
  placeholder: "Select Category",
  value: "",
};

export const assignment = [
  { value: "na", label: "New Assignment" },
  { value: "ara", label: "Assignment Reminder – Automated" },
  { value: "arm", label: "Assignment Reminder - Manual" },
];

export const classroom = [
  { value: "ne", label: "New Enrollment" },
  { value: "cr", label: "Classroom Reminder" },
  { value: "cdu", label: "Classroom Details Updated" },
];

export const learningPlan = [
  { value: "nlp", label: "New Learning Plan" },
  { value: "nlpr", label: "New Learning Plan Requirement" },
];

export const completion = [
  { value: "tc", label: "Training Completed" },
  { value: "lpc", label: "Learning Plan Completed" },
];

export const expiration = [
  { value: "et", label: "Expired Training" },
  { value: "ec", label: "Expired Credential" },
  { value: "est", label: "Expired Soon Training" },
  { value: "esc", label: "Expired Soon Credential" },
];

export const newUse = [{ value: "wn", label: "Welcome Notification" }];

export const event = {
  id: "event",
  label: "Event",
  key: "event",
  data: assignment,
  isMultiselect: true,
  placeholder: "Select Event",
  value: "na",
};

export const tracked = {
  id: "tracked",
  label: "Tracked User/Group",
  key: "tracked",
  data: [
    { value: "group", label: "Group" },
    { value: "users", label: "User's" },
  ],
  isMultiselect: false,
  placeholder: "Select Tracked User/Group",
  value: "",
};

export const group = {
  id: "group",
  label: "Group",
  key: "group",
  data: [
    { value: "allgroup", label: "All Group" },
    { value: "group1", label: "Group 1" },
  ],
  isMultiselect: false,
  placeholder: "Select Group",
  value: "",
};

export const users = {
  id: "users",
  label: "User's",
  key: "users",
  data: [
    { value: "abc", label: "ABC" },
    { value: "xyz", label: "XYZ" },
  ],
  isMultiselect: false,
  placeholder: "Select User's",
  value: "",
};

export const recipient = {
  id: "recipient",
  label: "Recipient",
  key: "recipient",
  data: [
    { value: "ru", label: "Related User" },
    { value: "su", label: "Specific User" },
    { value: "supervisor", label: "Supervisor" },
  ],
  isMultiselect: false,
  placeholder: "Select Recipient",
  value: "",
};

export const specificuser = {
  id: "su",
  label: "Specific User(s)",
  key: "su",
  value: "",
};

export const defineddays = {
  id: "defineddays",
  label: "Defined Days",
  key: "defineddays",
  value: "",
};

export const subject = {
  id: "subject",
  label: "Subject",
  key: "subject",
  value: "",
};


export const removeFields = {
  category: ["event", "tracked", "group", "users", "recipient", "specificuser", "defineddays", "subject"],
  event: ["tracked", "group", "users", "recipient", "specificuser", "defineddays", "subject"],
  tracked: ["group", "users", "recipient", "specificuser", "defineddays", "subject"],
  group: [ "recipient", "specificuser", "defineddays", "subject"],
  users: ["recipient", "specificuser", "defineddays", "subject"],
  recipient: ["specificuser", "defineddays", "subject"],
  specificuser: ["defineddays", "subject"],
  defineddays: ["subject"],
}