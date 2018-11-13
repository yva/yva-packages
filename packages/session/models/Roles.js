import Record from "immutable-nestable-record";

export const Roles = Record(
  {
    isAdministrator: false,
    isManager: false,
    sendSurveys: false,
    includeIn360Survey: false,
  },
  {},
  "SessionRoles"
);
