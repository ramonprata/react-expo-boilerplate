import { useSliceAction, useSliceState } from "@shared/hooks";
import {
  IExploreInitialState,
  TExploreActions,
} from "../store/exploreSliceStore";

export const useExploreActions = () => {
  const incrementExploreCounter = useSliceAction<
    TExploreActions,
    "incrementExploreCounter"
  >("incrementExploreCounter");

  const resetExploreSlice = useSliceAction<
    TExploreActions,
    "resetExploreSlice"
  >("resetExploreSlice");

  return {
    incrementExploreCounter,
    resetExploreSlice,
  };
};

export const useExploreState = () => {
  const counterFromExplore = useSliceState<
    IExploreInitialState,
    "counterFromExplore"
  >("counterFromExplore");
  return { counterFromExplore };
};

export const useExploreSlice = () => {
  const { incrementExploreCounter, resetExploreSlice } = useExploreActions();
  const { counterFromExplore } = useExploreState();

  return {
    incrementExploreCounter,
    resetExploreSlice,
    counterFromExplore,
  };
};
