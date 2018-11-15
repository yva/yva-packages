import { Team } from "../../src/models/Team";
import { Roles } from "../../src/models/Roles";

describe("Team", () => {
  it("should have defined structure", () => {
    expect(new Team().toJS()).toEqual({
      id: "",
      name: "",
      rolesAndSettings: null,
    });
  });

  it("should populate nested record", () => {
    const team = new Team({
      rolesAndSettings: {
        isAdministrator: true,
        isManager: true,
        sendSurveys: true,
        includeIn360Survey: true,
      },
    });

    expect(team.rolesAndSettings).toBeInstanceOf(Roles);
    expect(team.rolesAndSettings.isAdministrator).toBeTruthy();
  });
});
