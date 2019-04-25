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

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [isHovered, bind];
}

export function useFocus() {
  const [isFocused, setFocus] = React.useState(false);

  const bind = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  };

  return [isFocused, bind];
}
