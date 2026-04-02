# Frontend Engineering Guidelines

This document defines the standards and practices to follow while building this project.
The goal is to ensure **consistency, scalability, and production-quality code**.

---

# 1. Core Principles

## 1.1 Feature-First Architecture

* Organize code by **feature**, not by type.
* Each feature owns:

  * UI components
  * hooks
  * schemas
  * services
  * types

## 1.2 Separation of Concerns

* UI ≠ Logic ≠ Data
* Never mix:

  * API calls inside components
  * validation inside JSX
  * business logic inside UI rendering

## 1.3 Reusability Over Duplication

* Extract reusable components early, but **avoid premature abstraction**.
* Prefer composition over inheritance.

---

# 2. Component Design

## 2.1 Rules

* One component = one responsibility
* Keep components **small and predictable**
* Avoid deeply nested JSX

## 2.2 Structure

* Container components → handle logic
* Presentational components → handle UI

## 2.3 Naming

* Use clear, descriptive names:

  * `RewardModal`
  * `RewardForm`
  * `ExpiryDatePicker`

---

# 3. State Management

## 3.1 Types of State

* **UI State** → modal open, loading, success
* **Form State** → handled by React Hook Form
* **Server State** → API data

## 3.2 Rules

* Do not overload one state for multiple concerns
* Use custom hooks for complex logic

## 3.3 Complex Flows

* Model flows explicitly (e.g., state machine or reducer)
* Avoid implicit UI behavior

---

# 4. Forms & Validation

## 4.1 Stack

* React Hook Form
* Zod (schema validation)

## 4.2 Rules

* Schema defines the source of truth
* No manual validation inside components
* Use resolver for integration

## 4.3 Validation Practices

* Validate:

  * required fields
  * data types
  * conditional logic
* Always handle edge cases

---

# 5. Styling (Tailwind + shadcn)

## 5.1 Guidelines

* Use Tailwind utility classes
* Follow consistent spacing scale
* Avoid inline styles

## 5.2 Component Styling

* Prefer reusable UI primitives
* Extend shadcn components instead of rewriting

## 5.3 Consistency

* Maintain:

  * spacing
  * typography
  * color usage

---

# 6. Accessibility (Non-Negotiable)

* All inputs must have labels
* Ensure keyboard navigation works
* Use semantic HTML
* Maintain focus states (especially in modals)

---

# 7. API & Data Layer

## 7.1 Rules

* No API calls inside components
* Use a dedicated `services/` layer

## 7.2 Structure

* Each feature has its own API module

## 7.3 Error Handling

* Always handle:

  * loading state
  * error state
  * success state

---

# 8. Folder Structure Rules

* Shared components → `/components`
* Feature-specific → `/features/<feature>`
* No cross-feature leakage
* Keep files co-located with usage

---

# 9. Code Quality

## 9.1 General

* Avoid large files (>300 lines)
* Remove dead code
* Keep functions pure where possible

## 9.2 Readability

* Prefer clarity over cleverness
* Use meaningful variable names
* Avoid magic numbers/strings

---

# 10. UX & Interaction

## 10.1 Required States

* Loading
* Success
* Error
* Empty

## 10.2 Micro-interactions

* Smooth transitions
* Disable buttons during submission
* Provide feedback on actions

---

# 11. Performance

* Avoid unnecessary re-renders
* Memoize when needed (not prematurely)
* Lazy load heavy components if required

---

# 12. Git & Ownership Mindset

* Write meaningful commits
* Keep changes scoped
* Think in terms of maintainability

---

# 13. What to Avoid

* Mixing concerns in a single file
* Over-engineering early
* Copy-pasting code
* Ignoring edge cases

---

# 14. Definition of Done

A feature is complete only if:

* UI matches design
* All states handled
* Validation implemented
* Code is clean and modular
* No obvious edge cases missed

---

# Final Note

Every piece of code should answer:

* Is it scalable?
* Is it maintainable?
* Is it predictable?

If not, refactor before moving forward.
