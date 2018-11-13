import { timer, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

export const minWait = (d = 2000) => {
  return obs$ => {
    return forkJoin(obs$, timer(d)).pipe(map(s => s[0]));
  };
};
