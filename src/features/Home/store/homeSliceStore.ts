import { SetCallback } from "@shared/store";

export interface IHomeInitialState {
  counter: number;
  otherProperty?: string; // Add other properties as needed
}

export const initialState: IHomeInitialState = {
  counter: 0,
  otherProperty: "Initial value",
};

const actions = (set: SetCallback<IHomeInitialState>) => ({
  incrementCounter: () =>
    set((state) => {
      state.counter += 1;
    }),

  resetHomeSlice: () => set(() => initialState),
});

export const slice = (set: SetCallback<IHomeInitialState>) => ({
  ...initialState,
  ...actions(set),
});

export type THomeActions = ReturnType<typeof actions>;

export default {
  slice,
  initialState,
};
