import { useEffect } from "react"
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "../config/site"

/**
 * Reinforces document metadata after React hydration (SPA).
 * Primary SEO tags live in index.html for first crawl.
 */
export default function Seo() {
  useEffect(() => {
    document.title = SITE_TITLE

    const setMeta = (selector, attr, key, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute("content", value)
    }

    setMeta('meta[name="description"]', "name", "description", SITE_DESCRIPTION)
    setMeta('meta[property="og:title"]', "property", "og:title", SITE_TITLE)
    setMeta('meta[property="og:description"]', "property", "og:description", SITE_DESCRIPTION)
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", SITE_TITLE)
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", SITE_DESCRIPTION)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", `${SITE_URL}/`)
  }, [])

  return null
}
