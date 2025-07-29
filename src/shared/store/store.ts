import { useStore as zustandUseStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createStore } from "zustand/vanilla";

import homeSliceStore, {
  IHomeInitialState,
  THomeActions,
} from "@features/Home/store/homeSliceStore";

export type TGlobalInitialState = IHomeInitialState;
// combine with other initial states as needed: & ExploreInitialState

export type TGlobalActions = THomeActions;
// combine with other initial states as needed: & IExploreActions

export type Store = ReturnType<(typeof slices)["homeSliceStore"]>;
//  combine with other slices as needed: &  ReturnType<(typeof slices)["exploreSliceStore"]>

export type StateCallback = (state: TGlobalInitialState) => TGlobalInitialState;
export type SetCallback<T> = (set: (state: T) => void) => void;

export const slices = {
  homeSliceStore: homeSliceStore.slice,
  // added other slices here as needed: exploreSliceStore: exploreSliceStore.slice,
};

export const vanillaStore = createStore(
  immer<Store>((set) => ({
    ...homeSliceStore.slice(set as SetCallback<IHomeInitialState>),
    // add other slices here as needed: // ...exploreSliceStore.slice(set as SetCallback<IExploreInitialState>)
  }))
);

export const useStore = zustandUseStore;
