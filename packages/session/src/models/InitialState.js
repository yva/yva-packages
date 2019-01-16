import Record from "immutable-nestable-record";
import { models } from "@yva/ui-state";
import { Profile } from "./Profile";
import { getProfile } from "../lib";

const { UI } = models;

const restoreProfile = () => {
  const storedProfile = getProfile();

  /* istanbul ignore next line */
  return storedProfile ? new Profile(storedProfile) : null;
};

export const InitialState = Record(
  {
    profile: restoreProfile(),
    ui: new UI(),
  },
  {
    profile: Profile,
    ui: UI,
  },
  "SessionState"
);
