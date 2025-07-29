import {
  TGlobalActions,
  TGlobalInitialState,
  useStore,
  vanillaStore,
} from "../store/store";

export function useSliceSetter<T, K extends keyof T>(actionName: keyof T) {
  const action = useStore(
    vanillaStore,
    (state) => state[actionName as keyof TGlobalActions]
  );
  return action as T[K];
}

export function useSliceState<T, K extends keyof T>(stateName: keyof T) {
  const sliceState = useStore(
    vanillaStore,
    (state) => state[stateName as keyof TGlobalInitialState]
  );
  return sliceState as T[K];
}
