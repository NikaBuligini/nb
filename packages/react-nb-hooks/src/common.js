import React from 'react';

export function useSetState(initialState, init) {
  return React.useReducer(
    (state, nextState) => ({ ...state, ...nextState }),
    initialState,
    init,
  );
}

export function useMount(callback) {
  React.useEffect(callback, []);
}

export function useUnmount(callback) {
  React.useEffect(() => callback, []);
}

export function useDidUpdate(callback, inputs = []) {
  const justMountedRef = React.useRef(true);

  React.useEffect(() => {
    if (!justMountedRef.current) {
      return callback();
    }

    justMountedRef.current = false;

    return undefined;
  }, inputs);
}

export function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useInstance(instance) {
  return React.useMemo(() => instance, []);
}

export const useToggle = initialState => {
  const [value, setValue] = React.useState(initialState);

  const toggle = React.useCallback(
    nextState => {
      if (typeof nextState !== 'undefined') {
        setValue(!!nextState);
        return;
      }

      setValue(prevState => !prevState);
    },
    [setValue],
  );

  return [value, toggle];
};

export function useSimpleForm(initialState, init) {
  const [state, setState] = useSetState(initialState, init);

  const handleInputChange = React.useCallback(
    event => {
      const { name, value } = event.target;
      setState({ [name]: value });
    },
    [setState],
  );

  return [state, handleInputChange];
}
