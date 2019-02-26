import { List } from "immutable";
import Record from "immutable-nestable-record";

import { Email } from "./Email";
import { Roles } from "./Roles";

export const Profile = Record(
  {
    id: null,
    firstName: null,
    lastName: null,
    displayName: null,
    primaryEmail: null,
    jobTitle: null,
    department: null,
    status: null,
    emails: List(),
    userId: null,
    teamId: null,
    avatar: null,
    rolesAndSettings: new Roles(),
    createdAt: null,
    locale: "en",
  },
  {
    emails: [List, Email],
    rolesAndSettings: Roles,
  },
  "SessionProfile"
);

export default Profile;
