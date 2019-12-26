import React from 'react';

export function useKeyPress(targetKey, callback) {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const keys = targetKey.split('+').map(k => k.trim().toLowerCase());

    function downHandler(event) {
      const match = keys.every(key => {
        switch (key) {
          case 'ctrl': {
            return event.ctrlKey;
          }
          case 'shift': {
            return event.shiftKey;
          }
          default: {
            // eslint-disable-next-line
            if (isNaN(key)) {
              return event.key === key;
            }

            return event.keyCode === Number(key);
          }
        }
      });

      if (match) {
        callbackRef.current();
      }
    }

    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [targetKey]);
}

function isTyping() {
  const inputs = ['input', 'textarea'];
  const isInput =
    document.activeElement &&
    inputs.indexOf(document.activeElement.tagName.toLowerCase()) !== -1;

  return isInput;
}

export function useSafeKeyPress(targetKey, onKey) {
  const callback = React.useCallback(() => {
    // no action if active element is input
    if (!isTyping()) {
      onKey();
    }
  }, [onKey]);

  useKeyPress(targetKey, callback);
}
