import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { fakeSchedulers } from "rxjs-marbles/jest";
import { maxWait } from "../lib/max-wait";

jest.useFakeTimers();

describe("maxWait", () => {
  it(
    "should throw an observable error",
    fakeSchedulers(advance => {
      let res = null;
      let err = null;

      maxWait(1000)(of(1).pipe(delay(2000))).subscribe({
        next: val => (res = val),
        error: val => (err = val),
      });

      advance(2000);

      expect(res).toBeNull();
      expect(err).not.toBeNull();
    })
  );
});
