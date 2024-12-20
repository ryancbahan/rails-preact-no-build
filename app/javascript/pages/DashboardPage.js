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
  `,
  stat: `
    font-size: 2rem;
    font-weight: 600;
    color: #6366f1;
    margin: 0.5rem 0;
  `,
  label: `
    color: #4b5563;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  `,
  activity: `
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;
    &:last-child {
      border-bottom: none;
    }
  `,
  activityTitle: `
    font-weight: 500;
    color: #111827;
  `,
  activityTime: `
    color: #6b7280;
    font-size: 0.875rem;
  `
}

export function DashboardPage({ stats = {}, recentActivities = [] }) {
  return html`
    <div style=${styles.container}>
      <${Navigation} />
      
      <header style=${styles.header}>
        <h1 style=${styles.title}>Dashboard</h1>
      </header>

      <div style=${styles.grid}>
        <${Card}>
          <h2>Statistics</h2>
          <div>
            <div style=${styles.label}>Total Users</div>
            <div style=${styles.stat}>${stats.total_users || 0}</div>
          </div>
          <div>
            <div style=${styles.label}>Active Users</div>
            <div style=${styles.stat}>${stats.active_users || 0}</div>
          </div>
          <div>
            <div style=${styles.label}>Total Revenue</div>
            <div style=${styles.stat}>${stats.total_revenue || '$0'}</div>
          </div>
        <//>

        <${Card}>
          <h2>Recent Activity</h2>
          ${recentActivities.map(activity => html`
            <div key=${activity.id} style=${styles.activity}>
              <div style=${styles.activityTitle}>
                ${activity.user} - ${activity.type}
              </div>
              <div style=${styles.activityTime}>${activity.time}</div>
            </div>
          `)}
        <//>

        <${Card}>
          <h2>Settings</h2>
          <p>Manage your account preferences.</p>
        <//>
      </div>
    </div>
  `
} 