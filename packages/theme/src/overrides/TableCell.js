export default ({ palette }) => ({
  MuiTableRow: {
    root: {
      "&$hover:hover": {
        backgroundColor: palette.action.hover,
      },
    },
    hover: {},
  },

  MuiTableCell: {
    root: {
      padding: [[4, 8]],
      boxShadow: `inset 0 -1px 0 0 ${palette.divider}`,
      borderBottom: "none",
    },

    paddingDense: {
      paddingRight: 8,
    },

    footer: {
      boxShadow: "none",
    },
  },
});
