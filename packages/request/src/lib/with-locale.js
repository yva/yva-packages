import { getLocale } from "@yva/locale";

export const withLocale = locale => requestData => {
  if (typeof requestData !== "object" || requestData === null) {
    return requestData;
  }

  let url = new URL(requestData.url);
  let params = new URLSearchParams(url.search);

  params.append("locale", locale || getLocale());
  url.search = params.toString();

  requestData.url = url.toString();
  return requestData;
};
