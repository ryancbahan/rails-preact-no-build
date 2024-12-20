import { html } from "htm/preact"
import { Card } from "components/Card"
import { Navigation } from "components/Navigation"

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
  `
}

export function AboutPage() {
  return html`
    <div style=${styles.container}>
      <${Navigation} />
      
      <header style=${styles.header}>
        <h1 style=${styles.title}>About Us</h1>
      </header>

      <${Card}>
        <h2>Our Story</h2>
        <p>This is an example of a Rails application using Preact for the frontend, without any build tools.</p>
        <p>We're showcasing how to use modern JavaScript features while keeping things simple and fast.</p>
      <//>
    </div>
  `
} 