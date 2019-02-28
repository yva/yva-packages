import { of } from "rxjs";
import { error } from "redux-async-epic";
import { handle401 } from "../../src/epics/handle-401";

describe("handle401", () => {
  it("should call `replace` action when 401 error is come", done => {
    const action$ = of({
      type: "module/action/error",
      meta: {
        [error]: true,
      },
      payload: {
        status: 401,
      },
    });

    handle401(action$).subscribe({
      next: action => {
        expect(action).toHaveProperty("type");
        expect(action.type).toEqual("@@router/CALL_HISTORY_METHOD");
        expect(action).toHaveProperty("payload");
        expect(action.payload).toEqual({
          args: [{ pathname: "/auth/refresh", state: { pathname: "/" } }],
          method: "replace",
        });

        done();
      },
    });
  });
});
