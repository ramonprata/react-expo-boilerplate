export const setSetializedItem = <T>(
  key: string,
  value: T,
  setItem: (key: string, value: string) => Promise<void>
) => {
  const serialized = typeof value === "string" ? value : JSON.stringify(value);
  return setItem(key, serialized);
};

export const getDeserializedItem = async <T>(
  key: string,
  getItem: (key: string) => Promise<string | null>
): Promise<T | null> => {
  const raw = await getItem(key);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return raw as unknown as T;
  }
};
