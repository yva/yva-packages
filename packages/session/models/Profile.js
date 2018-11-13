import { List } from "immutable";
import Record from "immutable-nestable-record";

import { Team } from "./Team";
import { Email } from "./Email";

export const Profile = Record(
  {
    id: null,
    userId: null,
    createdAt: null,
    displayName: null,
    primaryEmail: null,
    jobTitle: null,
    department: null,
    status: null,
    emails: List(),
    team: null,
    avatar: null,
  },
  {
    emails: [List, Email],
    team: Team,
  },
  "SessionProfile"
);

export default Profile;
