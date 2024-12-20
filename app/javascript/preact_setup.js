import { h, render } from "preact"
import { HomePage } from "pages/HomePage"

// Function to mount Preact app
export function mountPreactApp(element) {
  render(h(HomePage), element)
} 