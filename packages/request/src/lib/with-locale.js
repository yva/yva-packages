import { getLocale } from "@yva/locale";

export const withLocale = locale => requestData => {
  if (typeof requestData !== "object" || requestData === null) {
    return requestData;
  }

  try {
    let url = new URL(requestData.url, window.location.origin);
    let params = new URLSearchParams(url.search);

    params.append("locale", locale || getLocale());
    url.search = params.toString();

    requestData.url = url.toString();
  } catch (e) {}

  return requestData;
};
