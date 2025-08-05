import { StorageKey, StorageTypeEnum } from "./types";

const STORAGE_PREFIX = "@myapp";

export const STORAGE_KEYS = {
  accessToken: {
    key: `${STORAGE_PREFIX}/access_token`,
    type: StorageTypeEnum.SECURE,
  } satisfies StorageKey,

  theme: {
    key: `${STORAGE_PREFIX}/theme`,
    type: StorageTypeEnum.COMMON,
  } satisfies StorageKey,
};
