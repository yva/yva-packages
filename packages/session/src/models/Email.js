import Record from "immutable-nestable-record";

export const Email = Record(
  {
    value: "",
    isPrimary: false,
    isConfirmed: false,
    isHeuristic: false,
  },
  {},
  "SessionEmail"
);
