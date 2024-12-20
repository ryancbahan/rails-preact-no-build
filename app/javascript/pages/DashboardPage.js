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
  `,
  grid: `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  `
}

export function DashboardPage() {
  return html`
    <div style=${styles.container}>
      <${Navigation} />
      
      <header style=${styles.header}>
        <h1 style=${styles.title}>Dashboard</h1>
      </header>

      <div style=${styles.grid}>
        <${Card}>
          <h2>Statistics</h2>
          <p>View your latest stats and metrics here.</p>
        <//>

        <${Card}>
          <h2>Activity</h2>
          <p>Recent activity and notifications.</p>
        <//>

        <${Card}>
          <h2>Settings</h2>
          <p>Manage your account preferences.</p>
        <//>
      </div>
    </div>
  `
} 