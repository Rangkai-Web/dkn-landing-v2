export const isSafeHttpUrl = (url?: string | null): boolean => {
  if (!url) return false
  return /^https?:\/\//i.test(url)
}
