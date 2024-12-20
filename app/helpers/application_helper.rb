module ApplicationHelper
  def mount_preact_page(page_name)
    content_tag :div, id: "preact-#{page_name.underscore}-page" do
      content_tag :script, type: "module" do
        <<~JAVASCRIPT.html_safe
          import { mountPage } from "mount_page"
          
          // Clean up function to unmount Preact
          function unmountPreact(element) {
            if (element) {
              element.innerHTML = ''
            }
          }

          // Handle mounting
          function initializePage() {
            const mountPoint = document.getElementById("preact-#{page_name.underscore}-page")
            if (mountPoint) {
              mountPage("#{page_name}", mountPoint)
            }
          }

          // Handle cleanup and mounting for Turbo navigation
          document.addEventListener("turbo:load", initializePage)
          document.addEventListener("turbo:before-render", () => {
            const mountPoint = document.getElementById("preact-#{page_name.underscore}-page")
            unmountPreact(mountPoint)
          })

          // Initial mount
          initializePage()
        JAVASCRIPT
      end
    end
  end
end
