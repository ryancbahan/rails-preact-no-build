import { h, render } from "preact"
import { html } from "htm/preact"

// Create a simple component
function App() {
  return html`
    <div>
      <h1>Hello from Preact!</h1>
      <p>Your Rails + Preact app is running.</p>
    </div>
  `
}

// Function to mount Preact app
export function mountPreactApp(element) {
  render(h(App), element)
} 