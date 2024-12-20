import { html } from "htm/preact"
import { useState } from "preact/hooks"

const styles = {
  button: `
    background: #6366f1;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background: #4f46e5;
    }
  `,
  counter: `
    font-size: 1.5rem;
    font-weight: 600;
    color: #6366f1;
    margin: 1rem 0;
  `
}

export function Counter() {
  const [count, setCount] = useState(0)

  return html`
    <div>
      <h2>Interactive Counter Demo</h2>
      <p>This is a simple example of state management in Preact</p>
      <div style=${styles.counter}>Count: ${count}</div>
      <button 
        style=${styles.button}
        onClick=${() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  `
} 