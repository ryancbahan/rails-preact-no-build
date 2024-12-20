Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "pages#home"
  
  # Pages routes
  get "about", to: "pages#about"
  get "dashboard", to: "pages#dashboard"
end
