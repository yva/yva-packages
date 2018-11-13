import { of } from "rxjs";
import * as creds from "@findo/credits";
import { signOut as epic } from "../../epics/signOut";
import { signOut } from "../../actions";

jest.mock("@findo/config", () => ({
  getConfig: () => ({
    BASE_NAME: "/dashboard",
    UPDATE_INTERVAL: 20000,
    APP: "https://localhost/dashboard",
    API: "https://localhost/api",
    SSO: "https://localhost/sso",
    CLIENT_ID: "5a9602da0f2ce70fd438bc43",
    REDIRECT_URI: "https://localhost/dashboard/auth",
    VERSION: "1.0.1",
  }),
}));

describe("signOut", () => {
  it("should redirect to the sso auth and logout", done => {
    window.location.assign = jest.fn();

    const action$ = of(signOut());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(window.location.assign).toHaveBeenCalledWith(
          `https://localhost/sso/oauth2/authorize?clientId=5a9602da0f2ce70fd438bc43&redirectUri=https%3A%2F%2Flocalhost%2Fdashboard%2Fauth&responseType=Code&logout=true`
        );

        window.location.assign.mockRestore();

        done();
      },
    });
  });

  it("should clear stored credentials", done => {
    creds.cleanCreds = jest.fn();

    const action$ = of(signOut());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(creds.cleanCreds).toBeCalled();
        expect(creds.cleanCreds).toBeCalledTimes(1);
        creds.cleanCreds.mockRestore();
        done();
      },
    });
  });
});
