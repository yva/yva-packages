import { List } from "immutable";
import { profileReducer } from "../../src/reducers/profile";

describe("profileReducer", () => {
  it("should be a function", () => {
    expect(typeof profileReducer).toEqual("function");
  });

  it("should return an InitialState w/ undefined state param", () => {
    const state = profileReducer(undefined, { type: "TEST" });

    expect(state).toEqual(null);
  });

  it("should return populated model when success action is passed", () => {
    const state = profileReducer(undefined, {
      type: "@yva/session/fetch-profile/success",
      payload: {
        response: {
          info: {
            displayName: "Ivan Burnaev",
            emails: [
              {
                value: "iburnaev@yva.com",
              },
              {
                value: "iburnaev@yva.ai",
                isPrimary: true,
              },
            ],
          },
        },
        xhr: {},
      },
    });

    expect(state.info.displayName).toEqual("Ivan Burnaev");
    expect(state.info.emails).toBeInstanceOf(List);
    expect(state.info.emails.get(1).isPrimary).toBeTruthy();
  });

  it("should return default state if action is success but no `response` prop", () => {
    const state = profileReducer(undefined, {
      type: "@yva/session/fetch-profile/success",
      payload: {
        mailFormedReponse: true,
        xhr: {},
      },
    });

    expect(state).toBeNull();
  });
});
