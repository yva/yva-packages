import Record from "immutable-nestable-record";

import { Info } from "./Info";
import { Settings } from "./Settings";

export const Profile = Record(
  {
    id: null,
    teamId: null,
    createdAt: null,
    settings: new Settings(),
    info: new Info(),
  },
  {
    settings: Settings,
    info: Info,
  },
  "SessionProfile"
);

export default Profile;
