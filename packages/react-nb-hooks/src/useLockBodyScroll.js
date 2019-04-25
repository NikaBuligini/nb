import React from 'react';

function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

export default useLockBodyScroll;
