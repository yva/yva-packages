import { getResponse } from "../lib/get-response";
import { of } from "rxjs";

describe("getResponse", () => {
  it("should return `response` prop of observable", done => {
    const obs$ = of({
      response: "dummy response",
    });

    getResponse()(obs$).subscribe(val => {
      expect(val).toEqual("dummy response");
      done();
    });
  });

  it("should return custom prop of observable", done => {
    const obs$ = of({
      custom: "custom response",
    });

    getResponse("custom")(obs$).subscribe(val => {
      expect(val).toEqual("custom response");
      done();
    });
  });
});
