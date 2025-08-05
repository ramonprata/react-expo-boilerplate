import { AsyncStorageEngine } from "./AsyncStorageEngine";
import { SecureStoreEngine } from "./SecureStoreEngine";
import { IStorageEngine, StorageKey } from "./types";
import { getDeserializedItem, setSetializedItem } from "./utils";

export class StorageFacade {
  private static instance: StorageFacade;

  private secureEngine: IStorageEngine;
  private commonEngine: IStorageEngine;

  constructor() {
    this.secureEngine = new SecureStoreEngine();
    this.commonEngine = new AsyncStorageEngine();
  }

  public static getInstance(): StorageFacade {
    if (!StorageFacade.instance) {
      StorageFacade.instance = new StorageFacade();
    }
    return StorageFacade.instance;
  }

  private getEngine(type: StorageKey["type"]): IStorageEngine {
    return type === "secure" ? this.secureEngine : this.commonEngine;
  }

  async get<T>(storageKeyDefinition: StorageKey): Promise<T | null> {
    return await getDeserializedItem<T>(
      storageKeyDefinition.key,
      this.getEngine(storageKeyDefinition.type).getItem
    );
  }

  async set<T>(storageKeyDefinition: StorageKey, value: T): Promise<void> {
    return await setSetializedItem<T>(
      storageKeyDefinition.key,
      value,
      this.getEngine(storageKeyDefinition.type).setItem
    );
  }

  async remove(storageKeyDefinition: StorageKey): Promise<void> {
    await this.getEngine(storageKeyDefinition.type).removeItem(
      storageKeyDefinition.key
    );
  }
}
