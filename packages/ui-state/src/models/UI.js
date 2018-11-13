import Record from "immutable-nestable-record";
import { states } from "../index";

export const UI = Record(
  {
    state: states.idle,
    details: null,
  },
  {},
  "UI"
);
