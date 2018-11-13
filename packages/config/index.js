export const getConfig = () => {
  return !!window && !!window.config ? window.config : {};
};
