import { useSliceSetter, useSliceState } from "@shared/hooks";
import { IHomeInitialState, THomeActions } from "../store/homeSliceStore";

export const useHomeSlice = () => {
  const incrementCounter = useSliceSetter<THomeActions, "incrementCounter">(
    "incrementCounter"
  );

  const resetHomeSlice = useSliceSetter<THomeActions, "resetHomeSlice">(
    "resetHomeSlice"
  );

  const counter = useSliceState<IHomeInitialState, "counter">("counter");

  return {
    incrementCounter,
    resetHomeSlice,
    counter,
  };
};
