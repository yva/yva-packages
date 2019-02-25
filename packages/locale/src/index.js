import cookies from "js-cookie";

const localePath = "locale";
const defaultLocale = "en";

export const saveLocale = (locale = defaultLocale) => {
  cookies.set(localePath, locale);
};

export const getLocale = () => {
  return cookies.get(localePath) || defaultLocale;
};

export const clearLocale = () => {
  cookies.remove(localePath);
};
