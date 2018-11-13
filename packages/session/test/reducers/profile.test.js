import { List } from "immutable";
import { profileReducer } from "../../src/reducers/profile";

describe("profileReducer", () => {
  it("should be a function", () => {
    expect(typeof profileReducer).toEqual("function");
  });

  it("should return an InitialState w/ undefined state param", () => {
    const state = profileReducer(undefined, { type: "TEST" });

    expect(state.toJS()).toEqual({
      avatar: null,
      createdAt: null,
      department: null,
      displayName: null,
      emails: [],
      id: null,
      jobTitle: null,
      primaryEmail: null,
      status: null,
      team: null,
      userId: null,
    });
  });

  it("should return populated model when success action is passed", () => {
    const state = profileReducer(undefined, {
      type: "session/fetch-profile/success",
      payload: {
        response: {
          displayName: "Ivan Burnaev",
          emails: [
            {
              value: "iburnaev@findo.com",
            },
            {
              value: "iburnaev@yva.ai",
              isPrimary: true,
            },
          ],
        },
        xhr: {},
      },
    });

    expect(state.displayName).toEqual("Ivan Burnaev");
    expect(state.emails).toBeInstanceOf(List);
    expect(state.emails.get(1).isPrimary).toBeTruthy();
  });
});
