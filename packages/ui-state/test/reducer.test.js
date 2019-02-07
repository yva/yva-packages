import { success, error, async } from "redux-async-epic";
import { uiReducer } from "../src/reducer";

describe("uiReducer", () => {
  it("should be a function", () => {
    expect(typeof uiReducer).toEqual("function");
  });

  it("should return an InitialState w/ undefined state param", () => {
    const state = uiReducer(undefined, { type: "TEST" });

    expect(state.toJS()).toEqual({
      state: "idle",
      details: null,
    });
  });

  it("should return pending state", () => {
    const action = {
      type: "module/action",
      meta: {
        [async]: true,
      },
      payload: {},
    };

    const state = uiReducer(undefined, action);

    expect(state.state).toEqual("pending");
    expect(state.details).toEqual(null);
  });

  it("should set passed details", () => {
    const action = {
      type: "module/action",
      meta: {
        [async]: true,
        details: {
          isFetching: true,
        },
      },
      payload: {},
    };

    const state = uiReducer(undefined, action);

    expect(state.state).toEqual("pending");
    expect(state.details).toEqual({ isFetching: true });
  });

  it("should return success state", () => {
    const action = {
      type: "module/action/success",
      meta: {
        [success]: true,
      },
      payload: {},
    };

    const state = uiReducer(undefined, action);

    expect(state.state).toEqual("success");
    expect(state.details).toEqual(null);
  });

  it("should return empty state", () => {
    const action = {
      type: "module/action/success",
      meta: {
        [success]: true,
      },
      payload: {
        status: 204,
        xhr: {
          getResponseHeader () {
            return "NotReady";
          },
        },
      },
    };

    const state = uiReducer(undefined, action);

    expect(state.state).toEqual("empty");
    expect(state.details).toEqual("NotReady");
  });

  it("should return error state", () => {
    const state = uiReducer(undefined, {
      type: "module/action/success",
      meta: {
        [error]: true,
      },
      payload: {
        errorDetails: true,
      },
    });

    expect(state.state).toEqual("error");
    expect(state.details).toEqual({ errorDetails: true });
  });
});
