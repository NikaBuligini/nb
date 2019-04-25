import React from 'react';

export default function useScrollTop(value = null) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);
}
