import { of } from "rxjs";
import * as creds from "@yva/credits";
import { signIn as epic } from "../../src/epics/sign-in";
import { signIn } from "../../src/actions";

describe("signIn", () => {
  beforeAll(() => {
    window.env = {
      REACT_APP_ROOT: "/app",
      REACT_APP_API: "https://localhost/api",
      REACT_APP_SSO: "https://single-sign-on.service",
      REACT_APP_CLIENT_ID: "1",
      REACT_APP_REDIRECT_URI: "/auth",
      REACT_APP_VERSION: "1.0.1",
    };
  });

  it("should redirect to the sso auth", done => {
    window.location.assign = jest.fn();

    const action$ = of(signIn());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(window.location.assign).toHaveBeenCalledWith(
          `https://single-sign-on.service/oauth2/authorize?clientId=1&redirectUri=http%3A%2F%2Flocalhost%2Fapp%2Fauth&responseType=Code`
        );

        window.location.assign.mockRestore();

        done();
      },
    });
  });

  it("should retun `fetchProfile` action observable", done => {
    creds.getCreds = jest.fn(() => ({
      accessToken: 12345,
    }));

    const action$ = of(signIn({ state: null }));
    const obs$ = epic(action$);

    obs$.subscribe({
      next: action => {
        expect(action).toHaveProperty("type");
        expect(action.type).toEqual("@yva/session/fetch-profile");
        creds.getCreds.mockRestore();
        done();
      },
    });
  });
});
