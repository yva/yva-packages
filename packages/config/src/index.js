export const getConfig = () => {
  return !!window && !!window.config ? window.config : {};
};

export const getEnv = key => {
  if (key) {
    return window.env
      ? window.env[key.includes("REACT_APP_") ? key : `REACT_APP_${key}`]
      : undefined;
  }

  return window.env || {};
};
