import color from "color";

export default ({ palette }) => {
  return {
    MuiSwitch: {
      disabled: {
        "&$checked$switchBase": {
          color: color(palette.secondary.main)
            .lighten(1.7)
            .string(),

          "& + $bar": {
            color: palette.secondary.main,
            backgroundColor: palette.secondary.main,
          },
        },
      },

      checked: {
        color: palette.secondary.main,
      },

      switchBase: {},

      bar: {},

      icon: {},
    },
  };
};
