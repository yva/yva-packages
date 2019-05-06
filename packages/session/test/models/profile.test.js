import { List } from "immutable";
import { Profile } from "../../src/models/Profile";
import { Info } from "../../src/models/Info";

describe("Profile", () => {
  const profile = new Profile({
    info: { emails: ["iburnaev@yva.ai"] },
  });

  it("should have a defined structure", () => {
    expect(profile.toJS()).toEqual({
      id: null,
      teamId: null,
      createdAt: null,

      settings: {
        includeInReports: false,
        includeIn360Survey: false,
        isAdministrator: false,
        isManager: false,
        sendSurveys: false,
        locale: "en",
      },
      info: {
        displayName: null,
        firstName: null,
        lastName: null,
        department: null,
        jobTitle: null,
        primaryEmail: null,
        loginEmail: null,
        excludedEmails: [],
        emails: ["iburnaev@yva.ai"],
      },
    });
  });

  it("should have a List of emails", () => {
    expect(profile.info).toHaveProperty("emails");
    expect(profile.info.emails).toBeInstanceOf(List);
  });

  it("should populate nested structures", () => {
    expect(profile.info).toBeInstanceOf(Info);
  });

  it("should have no default team", () => {
    expect(profile.teamId).toBeNull();
  });
});
