import { of } from "rxjs";
import * as creds from "@findo/credits";
import { signIn as epic } from "../../epics/signIn";
import { signIn } from "../../actions";

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

describe("signIn", () => {
  it("should redirect to the sso auth", done => {
    window.location.assign = jest.fn();

    const action$ = of(signIn());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(window.location.assign).toHaveBeenCalledWith(
          `https://localhost/sso/oauth2/authorize?clientId=5a9602da0f2ce70fd438bc43&redirectUri=https%3A%2F%2Flocalhost%2Fdashboard%2Fauth&responseType=Code`
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
        expect(action.type).toEqual("session/fetch-profile");
        creds.getCreds.mockRestore();
        done();
      },
    });
  });
});
