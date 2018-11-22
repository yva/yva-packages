import color from "color";

export default ({ palette, transitions, shadows }) => ({
  MuiButtonBase: {
    disabled: {
      // opacity: 0.5,
    },
  },

  MuiIconButton: {
    root: {
      color: "inherit",
    },
  },

  MuiButton: {
    root: {
      minWidth: 0,
      minHeight: 0,
      lineHeight: "20px",

      textTransform: "none",
      transition: transitions.create(
        ["background-color", "box-shadow", "border", "color"],
        {
          duration: transitions.duration.short,
        }
      ),
    },

    contained: {
      color: palette.text.primary,
      backgroundColor: palette.background.paper,

      "&:hover": {
        color: palette.primary.main,
        backgroundColor: palette.action.hover,
      },

      "&:active": {
        boxShadow: shadows[0],
        backgroundColor: color(palette.text.heading)
          .alpha(0.1)
          .string(),
      },
    },

    containedPrimary: {
      "&:hover": {
        color: palette.primary.contrastText,
      },

      "&:active": {
        backgroundColor: palette.primary.dark,
      },
    },

    containedSecondary: {
      "&:hover": {
        color: palette.secondary.contrastText,
      },

      "&:active": {
        backgroundColor: palette.secondary.dark,
      },
    },
  },
});
