import Record from "immutable-nestable-record";
import { List } from "immutable";

export const Info = Record(
  {
    displayName: null,
    firstName: null,
    lastName: null,
    department: null,
    jobTitle: null,
    primaryEmail: null,
    emails: new List(),
    excludedEmails: new List(),
    loginEmail: null,
  },
  {
    emails: List,
    excludedEmails: List,
  }
);
