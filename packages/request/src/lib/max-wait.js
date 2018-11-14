import { race, timer, throwError } from "rxjs";
import { flatMap } from "rxjs/operators";

export const maxWait = (delay = 3000) => obs$ => {
  return race(timer(delay).pipe(flatMap(() => throwError("timeout"))), obs$);
};
