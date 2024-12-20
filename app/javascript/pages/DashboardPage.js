import { html } from "htm/preact"
import { Card } from "components/Card"
import { Navigation } from "components/Navigation"
import { Form, Field } from "components/Form"
import { useState } from "preact/hooks"

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
  `,
  select: `
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: white;
    &:focus {
      outline: none;
      border-color: #6366f1;
    }
  `
}

export function DashboardPage({ stats = {}, recentActivities = [] }) {
  const [updatedSettings, setUpdatedSettings] = useState(null)

  const handleSettingsSuccess = (data) => {
    setUpdatedSettings(data.settings)
  }

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
          ${updatedSettings && html`
            <p style=${styles.success}>
              Settings updated for ${updatedSettings.email} with ${updatedSettings.notification_preference} notifications
            </p>
          `}
          <${Form} 
            action="/api/settings"
            onSuccess=${handleSettingsSuccess}
          >
            <${Field}
              label="Email"
              name="email"
              type="email"
              required=${true}
            />
            <div style=${styles.field}>
              <label style=${styles.label} for="notification_preference">
                Notification Preference
              </label>
              <select
                name="notification_preference"
                id="notification_preference"
                style=${styles.select}
                required
              >
                <option value="">Select a preference</option>
                <option value="all">All Notifications</option>
                <option value="important">Important Only</option>
                <option value="none">None</option>
              </select>
            </div>
          <//>
        <//>
      </div>
    </div>
  `
} 