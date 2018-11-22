export default ({ palette }) => {
  return {
    MuiListItem: {
      button: {
        transition: "none",

        "&:hover": {
          color: palette.primary.main,
        },
      },
    },

    MuiListItemText: {
      primary: {
        color: "inherit",
      },
    },
  };
};
