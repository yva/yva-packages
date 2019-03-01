export const getConfig = () => {
  return !!window && !!window.config ? window.config : {};
};

export const getEnv = key => {
  const env = process.env.NODE_ENV === "development" ? process.env : window.env;

  if (key) {
    return env[key.includes("REACT_APP_") ? key : `REACT_APP_${key}`];
  }

  return env || {};
};
