import { html } from "htm/preact"

const styles = {
  card: `
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  `
}

export function Card({ children }) {
  return html`
    <div style=${styles.card}>
      ${children}
    </div>
  `
} 