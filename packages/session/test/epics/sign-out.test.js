import { of } from "rxjs";
import * as creds from "@yva/credits";
import { signOut as epic } from "../../src/epics/sign-out";
import { signOut } from "../../src/actions";

describe("signOut", () => {
  beforeAll(() => {
    window.env = {
      REACT_APP_ROOT: "/dashboard",
      REACT_APP_API: "https://localhost/api",
      REACT_APP_SSO: "https://single-sign-on.service",
      REACT_APP_CLIENT_ID: "1",
      REACT_APP_REDIRECT_URI: "/auth",
      REACT_APP_VERSION: "1.0.1",
    };
  });

  it("should redirect to the sso auth and logout", done => {
    window.location.assign = jest.fn();

    const action$ = of(signOut());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(window.location.assign).toHaveBeenCalledWith(
          `https://single-sign-on.service/oauth2/authorize?clientId=1&redirectUri=http%3A%2F%2Flocalhost%2Fdashboard%2Fauth&responseType=Code&logout=true`
        );

        window.location.assign.mockRestore();

        done();
      },
    });
  });

  it("should clear stored credentials", done => {
    creds.clearCreds = jest.fn();

    const action$ = of(signOut());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(creds.clearCreds).toBeCalled();
        expect(creds.clearCreds).toBeCalledTimes(1);
        creds.clearCreds.mockRestore();
        done();
      },
    });
  });
});
