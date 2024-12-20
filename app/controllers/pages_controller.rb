class PagesController < ApplicationController
  def home
  end

  def about
  end

  def dashboard
    @stats = {
      total_users: 1234,
      active_users: 789,
      total_revenue: "$50,000"
    }
    
    @recent_activities = [
      { id: 1, type: "signup", user: "John Doe", time: "2 hours ago" },
      { id: 2, type: "purchase", user: "Jane Smith", time: "4 hours ago" },
      { id: 3, type: "login", user: "Bob Wilson", time: "5 hours ago" }
    ]
  end
end 