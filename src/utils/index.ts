export const boxShadow = (x, y, rad, color, opacity, elevation) => ({
  shadowColor: color,
  shadowRadius: rad,
  shadowOffset: {
    width: x,
    height: y,
  },
  shadowOpacity: opacity,
  elevation,
});
