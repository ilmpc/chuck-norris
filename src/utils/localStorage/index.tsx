import { createObserver, storageEventAction } from './Observer'

export { storageEventAction }

export class Storage<T> {
  public useObserver: ReturnType<typeof createObserver>;

  constructor(private storageKey: string, private defaultValue: T) {
    this.useObserver = createObserver(storageKey)
  }

  save(state: T) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(state))
    } catch (e) {
      console.error("Can't save data to localStorage.", e)
    }
  }

  get(): T {
    const data = localStorage.getItem(this.storageKey)
    return data != null ? JSON.parse(data) : this.defaultValue
  }

  clear(): void {
    localStorage.removeItem(this.storageKey)
  }
}
