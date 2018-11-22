const isDarkMode = () => {
  return `@media (prefers-dark-interface)`;
};

export const getMedia = () => {
  return {
    isDarkMode,
  };
};
