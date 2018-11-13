import { states } from "./states";

export const isIdle = state => {
  return state === states.idle;
};

export const isPending = state => {
  return state === states.pending;
};

export const isSuccess = state => {
  return state === states.success;
};

export const isError = state => {
  return state === states.error;
};

export const isEmpty = state => {
  return state === states.empty;
};
