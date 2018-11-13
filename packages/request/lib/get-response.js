import { pluck } from "rxjs/operators";

export const getResponse = (key = "response") => {
  return obs$ => obs$.pipe(pluck(key));
};
