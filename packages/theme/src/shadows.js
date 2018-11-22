import color from "color";

const umbraOpacity = 0.2;

export const getShadows = palette => {
  const shadowColor = color(palette.text.heading);
  const collectionSize = 25;

  return Array.from({ length: collectionSize }, (_, i) => {
    const offset = Math.max(1, Math.round(i / 3));
    const blur = Math.max(2, Math.round(i / 2));
    const spread = Math.max(1, Math.round(i / 8));

    return i === 0
      ? "none"
      : [
          `0 ${offset}px ${blur}px ${spread}px ${shadowColor
            .alpha(umbraOpacity)
            .string()}`,
        ].join(", ");
  });
};
