import React from 'react';

import { useToggle } from './common';
import { useDimensionType } from './useWindowSize';

export function useInteractionHandlers() {
  const [isActive, setVisibility] = useToggle(false);

  const dimensionType = useDimensionType();

  const hintHandlers =
    dimensionType === 'desktop'
      ? {
          onMouseEnter: () => setVisibility(true),
          onMouseLeave: () => setVisibility(false),
        }
      : {
          onClick: () => setVisibility(), // toggles value
        };

  return [isActive, hintHandlers];
}

export function useHover() {
  const [isHovered, setHovered] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    }),
    [setHovered],
  );

  return [isHovered, bind];
}

export function useFocus() {
  const [isFocused, setFocus] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
    }),
    [setFocus],
  );

  return [isFocused, bind];
}
