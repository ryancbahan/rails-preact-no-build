# Rails + Preact (No Build Tools)

This project demonstrates a modern approach to building Rails applications with Preact components, without requiring any build tools. It uses Rails' importmap feature to manage JavaScript dependencies and implements a clean architecture for component mounting and data flow.

## Architecture Overview

### 1. Component Structure
```
app/javascript/
├── components/           # Reusable UI components
│   ├── Card.js          # Layout components
│   ├── Counter.js       # Interactive components
│   ├── Navigation.js    # Navigation components
│   └── Form.js          # Form handling components
├── pages/               # Page-level components
│   ├── index.js         # Exports all pages
│   ├── HomePage.js      # Individual page components
│   ├── AboutPage.js
│   └── DashboardPage.js
├── mount_page.js        # Page mounting system
└── application.js       # Main JavaScript entry
```

### 2. Key Architectural Patterns

#### Rails-Preact Integration
- Uses Rails importmap for JavaScript module management
- No build tools or bundlers required
- Maintains Rails conventions while adding modern UI capabilities

#### Page Mounting System
```ruby
# In views (ERB):
<%= mount_preact_page("HomePage", local_props) %>
```
- Centralized mounting system for all Preact pages
- Handles component lifecycle and cleanup
- Supports data flow from Rails to Preact

#### Data Flow
1. Rails Controller → View Props → Preact Components
2. Preact Components → Rails API Endpoints → JSON Response

### 3. Key Features

#### Component System
- Reusable, atomic components
- Proper component lifecycle management
- Clean separation of concerns

#### Form Handling
Example implementation in the Dashboard settings:
```javascript
// Form Component Usage (DashboardPage.js)
<Form action="/api/settings" onSuccess=${handleSettingsSuccess}>
  <Field
    label="Email"
    name="email"
    type="email"
    required=${true}
  />
  <select name="notification_preference" required>
    <option value="all">All Notifications</option>
    <option value="important">Important Only</option>
    <option value="none">None</option>
  </select>
</Form>

// Rails Controller (pages_controller.rb)
def update_settings
  if params[:email].present? && params[:notification_preference].present?
    render json: { 
      message: "Settings updated successfully!",
      settings: {
        email: params[:email],
        notification_preference: params[:notification_preference]
      }
    }
  else
    render json: { error: "Please fill in all fields" }, 
           status: :unprocessable_entity
  end
end
```

Features:
- CSRF protection built-in
- Async form submissions with FormData
- Loading states during submission
- Success/Error message handling
- Form reset on success
- Success callback support

#### Navigation
- Turbo Drive integration
- Proper component cleanup
- State preservation between navigations

### 4. Implementation Details

#### Rails Side
```ruby
# Controller
def dashboard
  @stats = {
    total_users: 1234,
    active_users: 789,
    total_revenue: "$50,000"
  }
end

# View
<%= mount_preact_page("DashboardPage", { stats: @stats }) %>
```

#### Preact Side
```javascript
// Page Component
export function DashboardPage({ stats }) {
  return html\`
    <div>
      <div>Total Users: ${stats.total_users}</div>
      <div>Active Users: ${stats.active_users}</div>
      <div>Revenue: ${stats.total_revenue}</div>
    </div>
  \`
}
```

### 5. Development Workflow

1. Create a Rails route and controller action
2. Create a Preact page component
3. Add the component to pages/index.js
4. Use mount_preact_page helper in the view

### 7. Getting Started

1. Clone the repository
2. Bundle install
3. Start the Rails server
4. Visit localhost:3000

### 8. Best Practices

1. Keep components small and focused
2. Use the Form component for all form submissions
3. Handle component cleanup in navigation
4. Pass data through props from Rails
5. Use proper error handling
6. Follow Rails conventions for API endpoints

## License

MIT
