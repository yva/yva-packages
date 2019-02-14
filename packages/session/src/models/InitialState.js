import Record from "immutable-nestable-record";
import { models } from "@yva/ui-state";
import { Profile } from "./Profile";
import { restoreProfile } from "../lib";

const { UI } = models;

const loadProfile = () => {
  const storedProfile = restoreProfile();

  /* istanbul ignore next line */
  return storedProfile ? new Profile(storedProfile) : null;
};

export const InitialState = Record(
  {
    profile: loadProfile(),
    ui: new UI(),
  },
  {
    profile: Profile,
    ui: UI,
  },
  "SessionState"
);
