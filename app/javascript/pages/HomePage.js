import { html } from "htm/preact"
import { Card } from "components/Card"
import { Counter } from "components/Counter"

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
  `
}

export function HomePage() {
  return html`
    <div style=${styles.container}>
      <header style=${styles.header}>
        <h1 style=${styles.title}>Rails + Preact</h1>
        <p style=${styles.subtitle}>A modern web stack for building fast, interactive applications</p>
      </header>

      <${Card}>
        <${Counter} />
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