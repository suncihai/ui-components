/*
New Screens Breakpoints
xs: 743 or below
sm: 744 or above
md: 1133 or above
lg: 1194 or above
xl: 1440 or above
xxl: 1536 or above
Tailwind Default Breakpoints
sm:	640px or above
md:	768px or above
lg:	1024px or above
xl:	1280px or above
2xl: 1536px or above
*/

const xxs = 480;
const xs = 576;
// const xxl = 1920
// const md = 768
// const lg = 1160
// const xl = 1280

const ipadMiniPortrait = 744;
const ipadProPortrait = 834;
const ipadMiniLandscape = 1133;
const ipadProSmLandscape = 1194;
const ipadProLandscape = 1366;
const wqhd = 1440;
const qxga = 1536;
const maxScreen = 1650;

const tabletSm = ipadMiniPortrait;
const tabletMd = ipadMiniLandscape;
const tabletLg = ipadProPortrait;
const tabletXl = ipadProSmLandscape;
const tabletXxl = ipadProLandscape;
const desktop = wqhd;
const desktopXl = qxga;
const desktopXxl = maxScreen;

module.exports = {
  desktop,
  desktopXl,
  desktopXxl,
  ipadMiniLandscape,
  ipadMiniPortrait,
  ipadProLandscape,
  ipadProPortrait,
  qxga,
  tabletLg,
  tabletMd,
  tabletSm,
  tabletXl,
  tabletXxl,
  wqhd,
  xs,
  xxs,
};
