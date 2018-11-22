import color from "color";

export default ({ palette, typography, spacing, shape }) => {
  const verticalPadding = spacing.small;
  const horizontalPadding = verticalPadding * 1.5;

  return {
    MuiInputBase: {
      root: {
        backgroundColor: palette.background.paper,
        borderRadius: shape.borderRadius,
      },

      input: {
        ...typography.body2,
      },

      inputType: {
        height: "auto",
      },
    },

    MuiTablePagination: {
      input: {
        border: "none",
      },
    },

    MuiOutlinedInput: {
      input: {
        padding: [[verticalPadding, horizontalPadding]],
      },

      multiline: {
        padding: [[verticalPadding, horizontalPadding]],
      },
    },

    MuiInputLabel: {
      outlined: {
        position: "relative",
        transform: `none`,
        marginBottom: spacing.small,

        ...typography.caption,
        color: palette.text.primary,
        fontWeight: 500,

        "&$shrink": {
          transform: `none`,
        },
      },

      shrink: {},
    },

    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
      },
    },

    MuiNotchedOutline: {
      root: {
        borderColor: color(palette.text.secondary)
          .alpha(0.5)
          .string(),
      },

      legend: {
        display: "none",
      },
    },

    MuiPrivateNotchedOutline: {
      root: {
        top: 0,
      },

      legend: {
        display: "none",
      },
    },
  };
};
