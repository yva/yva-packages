import * as selectors from "../src/selectors";

describe("selectors", () => {
  it("should return state", () => {
    expect(selectors.getState({ state: "idle", details: null })).toEqual(
      "idle"
    );
  });

  it("should return details", () => {
    expect(selectors.getDetails({ state: "idle", details: null })).toBeNull();
  });
});
