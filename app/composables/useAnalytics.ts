declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const useAnalytics = () => {
  const pushEvent = (event: string, data: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined' || !window.gtag) return

    window.gtag('event', event, data)
  }

  return {
    pushEvent,
  }
}
