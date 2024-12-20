import { h, render } from "preact"
import { HomePage } from "pages/HomePage"
import { AboutPage } from "pages/AboutPage"
import { DashboardPage } from "pages/DashboardPage"

const pages = {
  HomePage,
  AboutPage,
  DashboardPage
}

export function mountPage(pageName, element) {
  const PageComponent = pages[pageName]
  
  if (!PageComponent) {
    console.error(`Page component ${pageName} not found`)
    return
  }

  // Clean up any existing Preact instance
  if (element._preactRoot) {
    render(null, element)
  }

  // Mount new component
  element._preactRoot = render(h(PageComponent), element)
} 