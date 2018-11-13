import { ajax } from "rxjs/ajax";
import { withContentType } from "./lib/with-content-type";
import { withAuth } from "./lib/with-auth";

export * from "./lib/get-response";
export * from "./lib/with-auth";
export * from "./lib/with-content-type";
export * from "./lib/min-wait";
export * from "./lib/max-wait";

export const pipe = (...functions) => val => {
  return functions.reduce((currentVal, f) => f(currentVal), val);
};

export const getRequest = (...enhancers) => {
  return pipe(
    ...enhancers,
    ajax
  );
};

export const request = getRequest(
  withContentType("application/json"),
  withAuth()
);
