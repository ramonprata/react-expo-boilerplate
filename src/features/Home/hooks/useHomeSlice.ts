import { useStore } from "@/src/shared/store";
import { IHomeInitialState, THomeActions } from "../store/homeSliceStore";

export const useHomeAction = <K extends keyof THomeActions>(actionName: K) => {
  const action = useStore((state) => state[actionName]);
  return action;
};

export const useHomeState = <K extends keyof IHomeInitialState>(
  stateName: K
) => {
  const state = useStore((state) => state[stateName]);
  return state;
};
