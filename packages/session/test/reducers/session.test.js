import { states } from "@yva/ui-state";
import { success } from "redux-async-epic";
import { sessionReducer } from "../../src/reducers/session";

describe("sessionReducer", () => {
  it("should be a function", () => {
    expect(typeof sessionReducer).toEqual("function");
  });

  it("should return an InitialState w/ undefined state param", () => {
    const state = sessionReducer(undefined, { type: "TEST" });

    expect(state.toJS()).toEqual({
      profile: null,
      ui: {
        state: "idle",
        details: null,
      },
    });
  });

  it("should return populated model when success action is passed", () => {
    const action = {
      type: "@yva/session/fetch-profile/success",
      meta: {
        [success]: true,
      },
      payload: {
        response: {
          displayName: "Ivan Burnaev",
        },
      },
    };
    const state = sessionReducer(undefined, action);

    expect(state.profile.displayName).toEqual("Ivan Burnaev");
    expect(state.ui.state).toEqual(states.success);
  });

  it("should ignore actions without @yva/session type", () => {
    const action = {
      type: "@othercomp/session/fetch-profile/success",
      meta: {
        [success]: true,
      },
      payload: {
        response: {
          displayName: "Ivan Burnaev",
        },
      },
    };
    const state = sessionReducer(undefined, action);

    expect(state.profile).toBeNull();
    expect(state.ui.state).toEqual(states.idle);
  });
});
