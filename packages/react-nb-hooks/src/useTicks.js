import React from 'react';

export function useTimeoutCallbacks() {
  const timeoutRef = React.useRef();

  const stopTimeout = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const startTimeout = React.useCallback((fn, timeoutMs) => {
    stopTimeout();
    timeoutRef.current = setTimeout(fn, timeoutMs);
  }, []);

  return [startTimeout, stopTimeout];
}

export function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return undefined;
  }, [delay]);
}

export function useTimeout(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function onTimeout() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setTimeout(onTimeout, delay);
      return () => clearTimeout(id);
    }

    return undefined;
  }, [delay]);
}
