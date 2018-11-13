import Record from "immutable-nestable-record";
import { Roles } from "./Roles";

export const Team = Record(
  {
    id: "",
    name: "",
    roles: null,
  },
  {
    roles: Roles,
  },
  "SessionTeam"
);
