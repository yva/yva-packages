import { of } from "rxjs";
import { fakeSchedulers } from "rxjs-marbles/jest";
import { minWait } from "../src/lib/min-wait";

jest.useFakeTimers();

describe("minWait", () => {
  it(
    "should wait 3 sec before pass new value",
    fakeSchedulers(advance => {
      let res = null;

      minWait(3000)(of(1)).subscribe(val => (res = val));
      advance(3000);

      expect(res).toEqual(1);
    })
  );

  it(
    "should use default delay if no params have been passed",
    fakeSchedulers(advance => {
      let res = null;

      minWait()(of(1)).subscribe(val => (res = val));
      advance(2000);

      expect(res).toEqual(1);
    })
  );
});
