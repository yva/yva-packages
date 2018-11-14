import { getCreds } from "@yva/credits";

export const withAuth = token => requestData => {
  if (typeof requestData !== "object" || requestData === null) {
    return requestData;
  }

  const accessToken = token || getCreds().accessToken;

  const patch = {
    Authorization: `Bearer ${accessToken}`,
  };

  requestData.headers = requestData.headers
    ? { ...requestData.headers, ...patch }
    : patch;

  return requestData;
};
