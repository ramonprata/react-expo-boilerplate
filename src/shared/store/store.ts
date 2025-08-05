import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import homeSliceStore, {
  IHomeInitialState,
  THomeActions,
} from "@features/Home/store/homeSliceStore";

import exploreSlice, {
  IExploreInitialState,
  TExploreActions,
} from "@features/Explore/store/exploreSliceStore";

export type TGlobalInitialState = IHomeInitialState & IExploreInitialState;
// combine with other initial states as needed: & ExploreInitialState

export type TGlobalActions = THomeActions & TExploreActions;
// combine with other initial states as needed: & IExploreActions

export type StateCallback = (state: TGlobalInitialState) => TGlobalInitialState;
export type SetCallback<T> = (set: (state: T) => void) => void;

export const slices = {
  homeSliceStore: homeSliceStore.slice,
  exploreSliceStore: exploreSlice.slice,
  // added other slices here as needed: exploreSliceStore: exploreSliceStore.slice,
};

export type Store = ReturnType<(typeof slices)["homeSliceStore"]> & // combine with other slices as needed: & ReturnType<(typeof slices)["homeSliceStore"]>
  ReturnType<(typeof slices)["exploreSliceStore"]>;
//  combine with other slices as needed: &  ReturnType<(typeof slices)["exploreSliceStore"]>

export const useStore = create(
  immer<Store>((set) => ({
    ...homeSliceStore.slice(set as SetCallback<IHomeInitialState>),
    ...exploreSlice.slice(set as SetCallback<IExploreInitialState>),
    // add other slices here as needed: // ...exploreSliceStore.slice(set as SetCallback<IExploreInitialState>)
  }))
);
