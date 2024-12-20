// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { mountPreactApp } from "preact_setup"

document.addEventListener("turbo:load", () => {
  const preactRoot = document.getElementById("preact-root")
  if (preactRoot) {
    mountPreactApp(preactRoot)
  }
})
