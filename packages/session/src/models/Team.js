import Record from "immutable-nestable-record";
import { Roles } from "./Roles";

export const Team = Record(
  {
    id: "",
    name: "",
    rolesAndSettings: null,
  },
  {
    rolesAndSettings: Roles,
  },
  "SessionTeam"
);
