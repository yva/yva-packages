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
    employmentType: null,
    location: null,
    gender: null,
    birthDate: null,
    hireDate: null,
    terminationDate: null,
    remoteWork: null,
    manager: null,
    managementLevel: null,
    potentialEvaluation: null,
    performanceLevel: null,
  },
  {
    emails: List,
    excludedEmails: List,
  }
);
