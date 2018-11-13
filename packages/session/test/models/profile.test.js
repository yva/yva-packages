import { List } from "immutable";
import { Email } from "../../models/Email";
import { Profile } from "../../models/Profile";

describe("Profile", () => {
  const profile = new Profile({ emails: [{ value: "iburnaev@yva.ai" }] });

  it("should have a defined structure", () => {
    expect(profile.toJS()).toEqual({
      avatar: null,
      createdAt: null,
      department: null,
      displayName: null,
      emails: [
        {
          isConfirmed: false,
          isHeuristic: false,
          isPrimary: false,
          value: "iburnaev@yva.ai",
        },
      ],
      id: null,
      jobTitle: null,
      primaryEmail: null,
      status: null,
      team: null,
      userId: null,
    });
  });

  it("should have a List of emails", () => {
    expect(profile).toHaveProperty("emails");
    expect(profile.emails).toBeInstanceOf(List);
  });

  it("should populate nested structures", () => {
    expect(profile.emails.get(0)).toBeInstanceOf(Email);
  });

  it("should have no default team", () => {
    expect(profile.team).toBeNull();
  });
});
