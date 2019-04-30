import React from 'react';

import { useEventListener } from './useEvents';

function getDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function isChanged(prev, next) {
  return prev.width !== next.width || prev.height !== next.height;
}

export function useWindowSizeChange(onWindowSizeChange) {
  const prevDimensionRef = React.useRef(getDimension());

  const onResize = React.useCallback(() => {
    const nextDimension = getDimension();

    if (isChanged(prevDimensionRef.current, nextDimension)) {
      prevDimensionRef.current = nextDimension;
      onWindowSizeChange(nextDimension);
    }
  }, [onWindowSizeChange]);

  useEventListener('resize', onResize, window);
}

export function useDimension() {
  const [state, setState] = React.useState(getDimension());

  const updateDimensions = React.useCallback(nextDimension => {
    setState(nextDimension);
  }, []);

  useWindowSizeChange(updateDimensions);

  return state;
}

export const TYPES = {
  desktop: 'desktop',
  tablet: 'tablet',
  mobile: 'mobile',
};

function detectBrowserType({ width }) {
  if (width < 576) {
    return TYPES.mobile;
  }

  if (width < 992) {
    return TYPES.tablet;
  }

  return TYPES.desktop;
}

export function useDimensionType() {
  const [browserType, setBrowserType] = React.useState(() =>
    detectBrowserType(getDimension()),
  );

  const updateBrowserType = React.useCallback(dimension => {
    setBrowserType(detectBrowserType(dimension));
  }, []);

  useWindowSizeChange(updateBrowserType);

  return browserType;
}

export function isTabletOrMobile(type) {
  return [TYPES.tablet, TYPES.mobile].indexOf(type) !== -1;
}
