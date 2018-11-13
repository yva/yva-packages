import { Roles } from "../../models/Roles";

describe("Roles", () => {
  it("should have defined structure", () => {
    expect(new Roles().toJS()).toEqual({
      isAdministrator: false,
      isManager: false,
      sendSurveys: false,
      includeIn360Survey: false,
    });
  });
});
