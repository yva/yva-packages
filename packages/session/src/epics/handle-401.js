import { filter, map } from "rxjs/operators";
import { isErrorAction } from "redux-async-epic";
import { replace } from "react-router-redux";
import { getEnv } from "@yva/config";

const is401 = ({ payload }) => {
  return payload && payload.status === 401;
};

export const handle401 = action$ =>
  action$.pipe(
    filter(action => isErrorAction(action) && is401(action)),
    map(() => {
      const basename = getEnv("ROOT");

      return replace({
        pathname: "/auth/refresh",
        state: {
          pathname: window.location.pathname.replace(basename, ""),
        },
      });
    })
  );
