import { of } from "rxjs";
import { error } from "redux-async-epic";
import { handle403 } from "../../epics/handle-403";

describe("handle403", () => {
  it("should call `replace` action when 403 error is come", done => {
    const action$ = of({
      type: "module/action/error",
      meta: {
        [error]: true,
      },
      payload: {
        status: 403,
      },
    });

    handle403(action$).subscribe({
      next: action => {
        expect(action).toHaveProperty("type");
        expect(action.type).toEqual("@@router/CALL_HISTORY_METHOD");
        expect(action).toHaveProperty("payload");
        expect(action.payload).toEqual({
          args: [{ pathname: "/error", state: { errorCode: "403" } }],
          method: "replace",
        });

        done();
      },
    });
  });
});
