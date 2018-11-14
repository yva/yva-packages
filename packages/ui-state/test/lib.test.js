import * as lib from "../src/lib";

describe("lib", () => {
  it("should return `true` if idle state is passed", () => {
    expect(lib.isIdle("idle")).toBeTruthy();
  });

  it("should return `true` if error state is passed", () => {
    expect(lib.isError("error")).toBeTruthy();
  });

  it("should return `true` if success state is passed", () => {
    expect(lib.isSuccess("success")).toBeTruthy();
  });

  it("should return `true` if pending state is passed", () => {
    expect(lib.isPending("pending")).toBeTruthy();
  });

  it("should return `true` if empty state is passed", () => {
    expect(lib.isEmpty("empty")).toBeTruthy();
  });
});
