import { useEffect } from 'react'

/**
 * Adds noindex meta tag for catalog page - prevents search engine indexing
 * as per client's privacy/security requirements.
 */
export function NoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])
  return null
}
