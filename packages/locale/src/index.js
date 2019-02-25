import cookies from "js-cookie";

const localePath = "locale";

export const saveLocale = (locale = "en") => {
  cookies.set(localePath, locale);
};

export const getLocale = () => {
  return cookies.get(localePath);
};

export const cleanLocale = () => {
  cookies.remove(localePath);
};
