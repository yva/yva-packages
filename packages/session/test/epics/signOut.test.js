import { of } from "rxjs";
import * as creds from "@findo/credits";
import { signOut as epic } from "../../src/epics/signOut";
import { signOut } from "../../src/actions";

jest.mock("@findo/config", () => ({
  getConfig: () => ({
    UPDATE_INTERVAL: 20000,
    SSO: "https://single-sign-on.service",
    CLIENT_ID: "1",
    REDIRECT_URI: "https://localhost/app/auth",
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
          `https://single-sign-on.service/oauth2/authorize?clientId=1&redirectUri=https%3A%2F%2Flocalhost%2Fapp%2Fauth&responseType=Code&logout=true`
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
