import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

import getButton from "./overrides/Button";
import getTooltip from "./overrides/Tooltip";
import getInput from "./overrides/TextField";
import getCell from "./overrides/TableCell";
import getAvatar from "./overrides/Avatar";
import getTypography from "./overrides/Typography";
import getTabs from "./overrides/Tabs";
import getSnackbar from "./overrides/Snackbar";
import getSelect from "./overrides/Select";
import getList from "./overrides/List";
import getSwitch from "./overrides/Switch";

import { getPaletteConfig } from "./palette";
import { getTypographyConfig } from "./typography";
import { getShadows } from "./shadows";
import { getMixins } from "./mixins";
import { getMedia } from "./media";

const unit = 8;
const spacing = {
  unit,
  small: unit,
  medium: unit * 2,
  large: unit * 3,
  xLarge: unit * 4,
  xxLarge: unit * 6,
};

const palette = createPalette(getPaletteConfig());
const typography = getTypographyConfig(palette);
const shadows = getShadows(palette);
const mixins = getMixins(spacing);
const media = getMedia();

export const getTheme = (options = {}) => {
  const muiTheme = createMuiTheme(
    Object.assign(
      {
        shape: {
          borderRadius: 3,
        },

        spacing,
        shadows,
        typography,
        palette,
        mixins,
        media,
      },
      options
    )
  );

  return {
    ...muiTheme,

    overrides: {
      ...getButton(muiTheme),
      ...getTooltip(muiTheme),
      ...getInput(muiTheme),
      ...getCell(muiTheme),
      ...getAvatar(muiTheme),
      ...getTypography(muiTheme),
      ...getTabs(muiTheme),
      ...getSnackbar(muiTheme),
      ...getSelect(muiTheme),
      ...getList(muiTheme),
      ...getSwitch(muiTheme),
    },
  };
};
