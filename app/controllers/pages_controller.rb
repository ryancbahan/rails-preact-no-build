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

  def update_settings
    # Simulate processing and validation
    if params[:email].present? && params[:notification_preference].present?
      render json: { 
        message: "Settings updated successfully!",
        settings: {
          email: params[:email],
          notification_preference: params[:notification_preference]
        }
      }
    else
      render json: { error: "Please fill in all required fields" }, status: :unprocessable_entity
    end
  end
end 