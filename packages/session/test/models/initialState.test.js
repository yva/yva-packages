import { InitialState } from "../../src/models/InitialState";

describe("InitialState", () => {
  it("should have defined structure", () => {
    expect(new InitialState().toJS()).toEqual({
      profile: null,
      ui: { details: null, state: "idle" },
    });
  });
});
