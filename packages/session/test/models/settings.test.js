import { Settings } from "../../src/models/Settings";

describe("Settings", () => {
  it("should have defined structure", () => {
    expect(new Settings().toJS()).toEqual({
      isAdministrator: false,
      isManager: false,
      includeInReports: false,
      sendSurveys: false,
      includeIn360Survey: false,
      locale: "en",
    });
  });
});
