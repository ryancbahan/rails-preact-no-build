import { html } from "htm/preact"

const styles = {
  nav: `
    background: white;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  list: `
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  link: `
    color: #6366f1;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  `
}

export function Navigation() {
  return html`
    <nav style=${styles.nav}>
      <ul style=${styles.list}>
        <li><a href="/" style=${styles.link} data-turbo="true">Home</a></li>
        <li><a href="/about" style=${styles.link} data-turbo="true">About</a></li>
        <li><a href="/dashboard" style=${styles.link} data-turbo="true">Dashboard</a></li>
      </ul>
    </nav>
  `
} 