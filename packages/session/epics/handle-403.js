import { filter, map } from "rxjs/operators";
import { isErrorAction } from "redux-async-epic";
import { replace } from "react-router-redux";

const is403 = ({ payload }) => {
  return payload && payload.status === 403;
};

export const handle403 = action$ =>
  action$.pipe(
    filter(action => isErrorAction(action) && is403(action)),
    map(() => {
      return replace({ pathname: "/error", state: { errorCode: "403" } });
    })
  );
