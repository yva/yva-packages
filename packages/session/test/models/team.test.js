import { Team } from "../../models/Team";
import { Roles } from "../../models/Roles";

describe("Team", () => {
  it("should have defined structure", () => {
    expect(new Team().toJS()).toEqual({
      id: "",
      name: "",
      roles: null,
    });
  });

  it("should populate nested record", () => {
    const team = new Team({
      roles: {
        isAdministrator: true,
        isManager: true,
        sendSurveys: true,
        includeIn360Survey: true,
      },
    });

    expect(team.roles).toBeInstanceOf(Roles);
    expect(team.roles.isAdministrator).toBeTruthy();
  });
});
