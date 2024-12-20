import { html } from "htm/preact"
import { useState } from "preact/hooks"

const styles = {
  form: `
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  field: `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  label: `
    font-weight: 500;
    color: #374151;
  `,
  input: `
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-color: #6366f1;
      ring: 2px solid #6366f1;
    }
  `,
  button: `
    background: #6366f1;
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background: #4f46e5;
    }
    &:disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
  `,
  error: `
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  `,
  success: `
    color: #059669;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  `
}

export function Form({ action, method = "POST", onSuccess, children }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    const formData = new FormData(e.target)
    
    // Get CSRF token from meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content

    try {
      const response = await fetch(action, {
        method,
        body: formData,
        headers: {
          'X-CSRF-Token': csrfToken
        },
        credentials: 'same-origin'
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }

      const data = await response.json()
      setSuccess(data.message || 'Success!')
      if (onSuccess) onSuccess(data)
      e.target.reset()
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return html`
    <form onSubmit=${handleSubmit} style=${styles.form}>
      ${children}
      ${error && html`<div style=${styles.error}>${error}</div>`}
      ${success && html`<div style=${styles.success}>${success}</div>`}
      <button 
        type="submit" 
        style=${styles.button}
        disabled=${isSubmitting}
      >
        ${isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  `
}

export function Field({ label, name, type = "text", required = false }) {
  return html`
    <div style=${styles.field}>
      <label style=${styles.label} for=${name}>${label}</label>
      <input
        style=${styles.input}
        type=${type}
        name=${name}
        id=${name}
        required=${required}
      />
    </div>
  `
} 