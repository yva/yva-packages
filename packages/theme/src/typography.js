export const getTypographyConfig = palette => {
  return {
    useNextVariants: true,

    h3: {
      fontSize: 44,
      lineHeight: 1.21,
      fontWeight: 500,
      color: palette.text.heading,
    },

    h4: {
      fontSize: 24,
      lineHeight: 1.21,
      fontWeight: 500,
      color: palette.text.heading,
    },

    h5: {
      fontSize: 24,
      lineHeight: 1.21,
      fontWeight: 400,
      color: palette.text.secondary,
    },

    h6: {
      fontSize: 20,
      lineHeight: 1.2,
      fontWeight: 400,
      color: palette.text.heading,
    },

    subtitle1: {
      fontSize: 17,
      lineHeight: 1.18,
      fontWeight: 400,
      color: palette.text.primary,
    },

    caption: {
      fontSize: 13,
      lineHeight: 1.15,
      fontWeight: 400,
      color: palette.text.secondary,
    },

    body1: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 500,
      color: palette.text.primary,
    },

    body2: {
      fontSize: 15,
      lineHeight: 1.47,
      fontWeight: 400,
      color: palette.text.primary,
    },

    button: {
      fontSize: 15,
      fontWeight: 500,
    },

    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  };
};
