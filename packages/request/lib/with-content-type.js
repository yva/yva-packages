export const withContentType = (type = "application/json") => requestData => {
  if (typeof requestData !== "object" || requestData === null) {
    return requestData;
  }

  const patch = {
    Accept: type,
    "Content-Type": type,
  };

  requestData.headers = requestData.headers
    ? { ...requestData.headers, ...patch }
    : patch;

  return requestData;
};
