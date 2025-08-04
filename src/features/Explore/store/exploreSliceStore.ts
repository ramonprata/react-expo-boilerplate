import { SetCallback } from "@shared/store";

export interface IExploreInitialState {
  counterFromExplore: number;
}

export const initialState: IExploreInitialState = {
  counterFromExplore: 0,
};

const actions = (set: SetCallback<IExploreInitialState>) => ({
  incrementExploreCounter: () =>
    set((state: IExploreInitialState) => {
      state.counterFromExplore += 1;
    }),

  resetExploreSlice: () => set(() => initialState),
});

export const slice = (set: SetCallback<IExploreInitialState>) => ({
  ...initialState,
  ...actions(set),
});

export type TExploreActions = ReturnType<typeof actions>;

export default {
  slice,
  initialState,
};
