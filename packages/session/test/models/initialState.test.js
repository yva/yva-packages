import { InitialState } from "../../src/models/InitialState";

describe("InitialState", () => {
  it("should have defined structure", () => {
    expect(new InitialState().toJS()).toEqual({
      profile: {
        avatar: null,
        createdAt: null,
        department: null,
        displayName: null,
        emails: [],
        id: null,
        jobTitle: null,
        primaryEmail: null,
        status: null,
        team: null,
        userId: null,
      },
      ui: { details: null, state: "idle" },
    });
  });
});
