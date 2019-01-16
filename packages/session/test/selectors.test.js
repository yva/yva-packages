import { states } from "@yva/ui-state";
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
        displayName: "Ivan Burnaev",
        team: {
          id: 1,
          rolesAndSettings: {
            isAdministrator: true,
          },
        },
        emails: [{ value: "iburnaev@yva.com" }],
      },
    },
  };
  const state = sessionReducer(undefined, action);

  it("should return a default UI state", () => {
    const ui = selectors.getUI(state);

    expect(ui.state).toEqual(states.success);
    expect(ui.details).toEqual(null);
  });

  it("should check if user is authenticated", () => {
    expect(selectors.isUserAuthenticated(state)).toBeTruthy();
  });

  it("should return the profile", () => {
    const profile = selectors.getProfile(state);

    expect(profile).toHaveProperty("displayName");
    expect(profile.displayName).toEqual("Ivan Burnaev");
  });

  it("should check the team", () => {
    expect(selectors.hasUserATeam(state)).toBeTruthy();
  });

  it("should return the team", () => {
    expect(selectors.getTeam(state).id).toEqual(1);
  });

  it("should return user roles", () => {
    expect(selectors.getRoles(state).isAdministrator).toBeTruthy();
  });
});
