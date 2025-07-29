import { useSliceSetter, useSliceState } from "@shared/hooks";
import { IHomeInitialState, THomeActions } from "../store/homeSliceStore";

export const useHomeActions = () => {
  const incrementCounter = useSliceSetter<THomeActions, "incrementCounter">(
    "incrementCounter"
  );

  const resetHomeSlice = useSliceSetter<THomeActions, "resetHomeSlice">(
    "resetHomeSlice"
  );

  return {
    incrementCounter,
    resetHomeSlice,
  };
};

export const useHomeState = () => {
  const counter = useSliceState<IHomeInitialState, "counter">("counter");
  return { counter };
};

export const useHomeSlice = () => {
  const { incrementCounter, resetHomeSlice } = useHomeActions();
  const { counter } = useHomeState();

  return {
    incrementCounter,
    resetHomeSlice,
    counter,
  };
};
