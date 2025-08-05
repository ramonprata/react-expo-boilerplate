export enum StorageTypeEnum {
  SECURE = "secure",
  COMMON = "common",
}

export interface IStorageEngine {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export interface StorageKey {
  key: string;
  type: StorageTypeEnum;
}
