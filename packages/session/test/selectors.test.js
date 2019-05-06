import { success as successState } from "@yva/ui-state";
import { success } from "redux-async-epic";
import { sessionReducer } from "../src/reducers/session";
import * as selectors from "../src/selectors";

describe("selectors", () => {
  const action = {
    type: "@yva/session/fetch-profile/success",
    meta: {
      [success]: true,
    },
    payload: {
      response: {
        teamId: 1,
        settings: {
          isAdministrator: true,
        },
        info: {
          displayName: "Ivan Burnaev",
          emails: [{ value: "iburnaev@yva.com" }],
        },
      },
    },
  };
  const state = sessionReducer(undefined, action);

  it("should return a default UI state", () => {
    const ui = selectors.getUI(state);

    expect(ui.state).toEqual(successState);
    expect(ui.details).toEqual(null);
  });

  it("should check if user is authenticated", () => {
    expect(selectors.isUserAuthenticated(state)).toBeTruthy();
  });

  it("should return the profile", () => {
    const profile = selectors.getProfile(state);

    expect(profile.info).toHaveProperty("displayName");
    expect(profile.info.displayName).toEqual("Ivan Burnaev");
  });

  it("should check the team", () => {
    expect(selectors.hasUserATeam(state)).toBeTruthy();
  });

  it("should return user settings", () => {
    expect(selectors.getSettings(state).isAdministrator).toBeTruthy();
  });
});
