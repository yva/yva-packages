import { Observable } from "rxjs";
import { pipe, getRequest, request } from "../src/index";

jest.mock("@findo/credits", () => ({
  getCreds: () => ({ accessToken: "mocked token" }),
}));

describe("pipe", () => {
  const add1 = a => a + 1;
  const multiply2 = a => a * 2;

  it("should call functions in specified order", () => {
    const complexFunc = pipe(
      add1,
      multiply2
    );

    const anotherComplexFunc = pipe(
      multiply2,
      add1
    );

    expect(complexFunc(3)).toEqual(8);
    expect(anotherComplexFunc(3)).toEqual(7);
  });
});

describe("getRequest", () => {
  it("should call ajax function and return an Observable", () => {
    const request = getRequest();
    const obs$ = request({ url: "http://localhost" });

    expect(obs$).toBeInstanceOf(Observable);
  });

  it("should apply all enhancers to request cofig", () => {
    const addHeader = conf => {
      conf.headers = {
        Accept: "application/json",
      };

      return conf;
    };

    const request = getRequest(addHeader);
    const obs$ = request({ url: "http://localhost" });

    expect(obs$.request.headers).toEqual({ Accept: "application/json" });
  });
});

describe("request", () => {
  it("should return an Observable with prefilled headers", () => {
    const obs$ = request({ url: "http://localhost" });

    expect(obs$).toBeInstanceOf(Observable);
    expect(obs$.request.headers).toEqual({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer mocked token",
    });
  });
});
