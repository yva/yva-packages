import { filter, map } from "rxjs/operators";
import { isErrorAction } from "redux-async-epic";
import { replace } from "react-router-redux";
import { getConfig } from "@findo/config";

const is401 = ({ payload }) => {
  return payload && payload.status === 401;
};

export const handle401 = action$ =>
  action$.pipe(
    filter(action => isErrorAction(action) && is401(action)),
    map(() => {
      return replace({
        pathname: "/auth/refresh",
        state: {
          pathname: window.location.pathname.replace(getConfig().BASE_NAME, ""),
        },
      });
    })
  );
