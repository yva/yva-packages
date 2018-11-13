import { Email } from "../../models/Email";

describe("Email", () => {
  it("should have defined structure", () => {
    expect(new Email().toJS()).toEqual({
      isConfirmed: false,
      isHeuristic: false,
      isPrimary: false,
      value: "",
    });
  });
});
