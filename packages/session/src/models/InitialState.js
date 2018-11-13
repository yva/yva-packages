import Record from "immutable-nestable-record";
import { models } from "@findo/ui-state";
import { Profile } from "./Profile";

const { UI } = models;

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
