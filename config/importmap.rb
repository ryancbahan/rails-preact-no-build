# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "preact", to: "https://cdn.skypack.dev/preact@10.19.3"
pin "preact/hooks", to: "https://cdn.skypack.dev/preact@10.19.3/hooks"
pin "htm/preact", to: "https://cdn.skypack.dev/htm@3.1.1/preact"
pin "preact_setup", to: "preact_setup.js"
pin_all_from "app/javascript", under: "javascript"
