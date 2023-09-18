export function FunctionalComponentMounted(mountedCallback?: () => void): any {
  const mountedLock = new Set()
  return function (target: unknown, propertyKey: string, descriptor: any) {
    if (typeof descriptor?.initializer !== "function") {
      const originalMethod = descriptor.value
      descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args)
        if (!mountedLock.has(propertyKey)) {
          setTimeout(() => {
            mountedLock.add(propertyKey)
            mountedCallback?.()
          }, 0)
        }
        return result
      }
    } else {
      const originalMethod = descriptor.initializer
      descriptor.initializer = function (...args: any[]) {
        const result = originalMethod.apply(this, args)
        if (!mountedLock.has(propertyKey)) {
          setTimeout(() => {
            mountedLock.add(propertyKey)
            mountedCallback?.()
          }, 0)
        }
        return result
      }
    }
  }
}
