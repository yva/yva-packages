export const getPaletteConfig = () => {
  return {
    text: {
      heading: "#172842",
      primary: "#32435d",
      secondary: "#6a798f",
    },
    background: {
      default: "#f0f2f5",
      paper: "#ffffff",
      panel: "#32435d",
    },
    common: {
      white: "#ffffff",
    },
    primary: {
      main: "#005bd1",
    },
    graph: {
      blue: "#4f95ff",
      green: "#39b0bf",
      yellow: "#f5cc6c",
      red: "#ff577b",
    },
    paleSkyBlue: "#cae0ff",
    secondary: { main: "#00a2b8" },
    error: { main: "#ff5252" },
    success: { main: "#8bc34a" },

    contrastThreshold: 3,
    tonalOffset: 0.1,
    divider: "rgba(49, 65, 94, 0.2)",
    action: {
      active: "rgba(0, 91, 209, 0.32)",
      disabled: "rgba(50, 67, 93, 0.5)",
      selected: "rgba(0, 91, 209, 0.16)",
      disabledBackground: "rgba(50, 67, 93, 0.12)",
      hover: "rgba(0, 91, 209, 0.08)",
      hoverOpacity: 0.08,
    },
  };
};
