import Record from "immutable-nestable-record";

export const Settings = Record(
  {
    isAdministrator: false,
    isManager: false,
    includeInReports: false,
    sendSurveys: false,
    includeIn360Survey: false,
    locale: "en",
  },
  {},
  "SessionSettings"
);