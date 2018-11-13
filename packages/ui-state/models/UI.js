import Record from "immutable-nestable-record";
import { states } from "../states";

export const UI = Record(
  {
    state: states.idle,
    details: null,
  },
  {},
  "UI"
);
