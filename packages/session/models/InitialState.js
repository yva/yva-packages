import Record from "immutable-nestable-record";
import { UI } from "@findo/ui-state";
import { Profile } from "./Profile";

export const InitialState = Record(
  {
    profile: new Profile(),
    ui: new UI(),
  },
  {
    profile: Profile,
    ui: UI,
  },
  "SessionState"
);
