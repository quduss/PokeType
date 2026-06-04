type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();


  add<T>(key: string, value: T) {
    const entry: CacheEntry<T> = {
        createdAt: Date.now(),
        val: value,
    };
    this.#cache.set(key, entry);
  }

  get<T>(key: string) {
    const entry = this.#cache.get(key);
    if (entry !== undefined) {
      return entry.val as T;
    }
    return undefined;
  }

}