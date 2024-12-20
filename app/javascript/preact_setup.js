import { h, render } from "preact"
import { html } from "htm/preact"
import { useState } from "preact/hooks"

// Styles as template literals for simplicity
const styles = {
  container: `
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  `,
  header: `
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  `,
  title: `
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
  `,
  subtitle: `
    margin: 1rem 0 0;
    opacity: 0.9;
    font-size: 1.1rem;
  `,
  card: `
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  `,
  button: `
    background: #6366f1;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background: #4f46e5;
    }
  `,
  counter: `
    font-size: 1.5rem;
    font-weight: 600;
    color: #6366f1;
    margin: 1rem 0;
  `
}

function Card({ children }) {
  return html`
    <div style=${styles.card}>
      ${children}
    </div>
  `
}

function App() {
  const [count, setCount] = useState(0)

  return html`
    <div style=${styles.container}>
      <header style=${styles.header}>
        <h1 style=${styles.title}>Rails + Preact</h1>
        <p style=${styles.subtitle}>A modern web stack for building fast, interactive applications</p>
      </header>

      <${Card}>
        <h2>Interactive Counter Demo</h2>
        <p>This is a simple example of state management in Preact</p>
        <div style=${styles.counter}>Count: ${count}</div>
        <button 
          style=${styles.button}
          onClick=${() => setCount(count + 1)}
        >
          Increment
        </button>
      <//>

      <${Card}>
        <h2>Features</h2>
        <ul>
          <li>Rails 7 for robust backend</li>
          <li>Preact for lightweight UI</li>
          <li>No build tools required</li>
          <li>Modern CSS-in-JS styling</li>
        </ul>
      <//>
    </div>
  `
}

// Function to mount Preact app
export function mountPreactApp(element) {
  render(h(App), element)
} 