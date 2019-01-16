import { of } from "rxjs";
import { storeProfile as epic } from "../../src/epics/storeProfile";

jest.mock("@yva/config", () => ({
  getConfig: () => ({
    SSO: "https://single-sign-on.sevice",
    CLIENT_ID: "1",
    REDIRECT_URI: "https://localhost/app/auth",
    VERSION: "1.0.1",
  }),
}));

describe("storeProfile", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("should store given profile to the sessionStorage", done => {
    const action$ = of({
      type: "@yva/session/fetch-profile/success",
      payload: {
        response: {
          displayName: "Ivan Burnaev",
        },
      },
    });
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: () => {
        expect(sessionStorage.getItem("profile")).toEqual(
          JSON.stringify({
            displayName: "Ivan Burnaev",
          })
        );

        done();
      },
    });
  });

  it("should should ignore fetching profile if there are no correct payload", done => {
    const action$ = of({
      type: "@yva/session/fetch-profile/success",
      payload: false,
    });
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: () => {
        expect(sessionStorage.getItem("profile")).toBeNull();
        done();
      },
    });
  });
});
