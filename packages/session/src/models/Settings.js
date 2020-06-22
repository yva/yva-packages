import Record from "immutable-nestable-record";

export const Settings = Record(
  {
    isAdministrator: false,
    isManager: false,
    includeInReports: false,
    sendSurveys: false,
    includeIn360Survey: false,
    forcedSurveysRequired: false,
    timeZoneId: null,
    locale: "en",
    custom1: null,
    custom3: null,
    custom2: null,
  },
  {},
  "SessionSettings"
);
