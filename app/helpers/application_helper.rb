module ApplicationHelper
  def mount_preact_page(page_name, props = {})
    content_tag :div, id: "preact-#{page_name.underscore}-page", data: { props: props.to_json } do
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
              const props = JSON.parse(mountPoint.dataset.props || '{}')
              mountPage("#{page_name}", mountPoint, props)
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
