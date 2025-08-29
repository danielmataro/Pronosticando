declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

export function initGA(): void {
  const gaId = import.meta.env.VITE_GA_ID
  if (!gaId) return

  // Load the Google Analytics script dynamically
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]): void {
    window.dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', gaId)
}
