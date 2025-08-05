import { StateCreator } from "zustand";
import { StorageFacade } from "../base/storage/Storage";

const PERSISTED_KEYS = [
  { key: "auth.token", path: ["auth", "token"], secure: true },
  { key: "ui.theme", path: ["ui", "theme"], secure: false },
  // ...
] as const;

function getValueFromPath(obj: any, path: string[]): any {
  return path.reduce((acc, key) => acc?.[key], obj);
}

export function selectivePersist<T extends object>(
  config: StateCreator<T, [], []>
): StateCreator<T, [], []> {
  return (set, get, api) => {
    const facade = StorageFacade.getInstance();

    const wrappedSet: typeof set = (updater, replace) => {
      const prevState = get();
      const nextState =
        typeof updater === "function" ? updater(prevState) : updater;

      set(nextState, replace);

      // Persistir apenas propriedades registradas
      PERSISTED_KEYS.forEach(({ key, path, secure }) => {
        const newValue = getValueFromPath(nextState, path);
        if (newValue !== undefined) {
          facade.set({ key, type: secure ? "secure" : "common" }, newValue);
        }
      });
    };

    return config(wrappedSet, get, api);
  };
}

export async function hydrateStore(set: (partial: any) => void) {
  const facade = StorageFacade.getInstance();

  for (const { key, path, secure } of PERSISTED_KEYS) {
    const value = await facade.get({ key, type: secure ? "secure" : "common" });
    if (value !== null) {
      set((prev: any) => {
        const newState = { ...prev };
        let target = newState;

        for (let i = 0; i < path.length - 1; i++) {
          const p = path[i];
          target[p] = { ...target[p] };
          target = target[p];
        }

        target[path[path.length - 1]] = value;
        return newState;
      });
    }
  }
}
