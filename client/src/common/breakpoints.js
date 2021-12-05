const size = {
  xs: "280px",
  sm: "540px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

const breakpoints = {
  device,
  size,
};

export default breakpoints;
