import { useMediaQuery } from 'react-responsive';
import * as breakpoints from '../breakpoints';

export function useIsXs() {
  return useMediaQuery({ maxWidth: breakpoints.xs - 1 });
}

export function useIsTabletSm() {
  return useMediaQuery({ maxWidth: breakpoints.tabletSm - 1 });
}

export function useIsTabletSmUp() {
  return useMediaQuery({ minWidth: breakpoints.tabletSm });
}

export function useIsTabletMd() {
  return useMediaQuery({ maxWidth: breakpoints.tabletMd - 1 });
}

export function useIsTabletMdUp() {
  return useMediaQuery({ minWidth: breakpoints.tabletMd });
}

export function useIsTabletLg() {
  return useMediaQuery({ maxWidth: breakpoints.tabletXxl - 1 });
}

export function useIsTabletLgUp() {
  return useMediaQuery({ minWidth: breakpoints.tabletLg });
}

export function useIsTabletRangeSm() {
  return useMediaQuery({
    maxWidth: breakpoints.tabletMd - 1,
    minWidth: breakpoints.tabletSm,
  });
}

export function useIsTabletRangeMd() {
  return useMediaQuery({
    maxWidth: breakpoints.tabletXl - 1,
    minWidth: breakpoints.tabletMd,
  });
}
export function useIsTabletRangeMdX() {
  return useMediaQuery({
    maxWidth: breakpoints.tabletXxl - 1,
    minWidth: breakpoints.tabletMd,
  });
}

export function useIsTabletXl() {
  return useMediaQuery({ maxWidth: breakpoints.tabletXl - 1 });
}

export function useIsTabletXxl() {
  return useMediaQuery({ maxWidth: breakpoints.desktop - 1 });
}

export function useIsTabletXxlUp() {
  return useMediaQuery({ minWidth: breakpoints.tabletXxl });
}

export function useIsDesktop() {
  return useMediaQuery({ maxWidth: breakpoints.desktopXl - 1 });
}

export function useIsDesktopUp() {
  return useMediaQuery({ minWidth: breakpoints.desktop });
}

export function useIsDesktopXlUp() {
  return useMediaQuery({ minWidth: breakpoints.desktopXl });
}

export default useMediaQuery;
