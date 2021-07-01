export const setValue = <T = unknown>(value: T, defaultValue: T): T => {
  return typeof value !== "undefined" ? value : defaultValue
}
