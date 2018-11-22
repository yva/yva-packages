export default ({ palette, spacing }) => ({
  MuiSelect: {
    select: {
      "&:focus": {
        background: "inherit",
      },
    },
  },

  MuiTablePagination: {
    select: {
      paddingRight: spacing.large,
    },

    selectIcon: {
      top: 6,
    },
  },
});
