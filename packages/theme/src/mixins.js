export const getMixins = spacing => ({
  sidebar: {
    minWidth: spacing.unit * 9,
    maxWidth: spacing.unit * 30,
  },

  page: {
    padding: [[spacing.xLarge, spacing.xxLarge]],
    minHeight: "100vh",
  },
});
