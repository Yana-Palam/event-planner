const size = {
  mobile: "320px",
  mobileOnly: "479px",
  phablet: "480px",
  phabletOnly: "767px",
  tablet: "768px",
  noDesktop: "1279px",
  desktop: "1280px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  phablet: `(min-width: ${size.phablet})`,
  phabletOnly: `(min-width:${size.phablet}) and (max-width:${size.phabletOnly})`,
  phabletAndMobileOnly: `(max-width:${size.phabletOnly})`,

  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width:${size.tablet}) and (max-width:${size.noDesktop})`,

  noDesktop: `(max-width: ${size.noDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
