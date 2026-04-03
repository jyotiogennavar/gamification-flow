# Frontend Architecture & Code Rules

## Tech Stack
- React (TypeScript)
- Tailwind CSS
- shadcn/ui (Radix-based)
- React Hook Form
- Zod

---

## Priority

If any generated code violates these rules:
→ REJECT and regenerate

---

## 1. Architecture: Feature-First

All feature logic must live inside:

features/<feature-name>/

Example:
features/gamification/

Do NOT place feature-specific code in global `/components`.

---

## 2. Folder Structure

Each feature must follow:

features/<feature>/
  components/
  hooks/
  schemas/
  services/
  types/
  constants/
  pages/

---

## 3. Separation of Concerns

Strict boundaries:

- components/ → UI only
- hooks/ → state + logic
- schemas/ → validation (Zod)
- services/ → API calls
- types/ → TypeScript types

Do NOT mix concerns.

---

## 4. Modal Pattern

Every modal must be isolated:

components/<ModalName>/
  <ModalName>.tsx
  <ModalName>Form.tsx
  <ModalName>Success.tsx
  fields/

---

## 5. Form Handling

All forms MUST:

- Use react-hook-form
- Use zodResolver
- Use schema from `/schemas`
- Use shadcn Form components

Never use uncontrolled inputs.

---

## 6. Zod Schema Rules

Schemas must:

- Live in `/schemas`
- Use `z.object`
- Use `z.coerce` for inputs
- Use `superRefine` for conditional validation
- Handle edge cases (dates, limits, required fields)

Schemas are the single source of truth.

---

## 7. State Management

Do NOT mix state types.

Use:

- useXForm → form state
- useXFlow → UI/flow state

Example:
useRewardForm
useRewardFlow

---

## 8. Component Design

Components must:

- Be small and focused
- Be reusable
- Avoid business logic
- Avoid large JSX blocks

---

## 9. Field Components

Complex inputs must be extracted:

fields/
  RewardTypeSelect.tsx
  PointsInput.tsx
  TimeBoundToggle.tsx
  ExpiryDatePicker.tsx

Each field:
- Accepts `control`
- Uses `FormField`

---

## 10. Layout System

Layout must be centralized:

AppLayout
  ├── Sidebar
  ├── Navbar
  └── Outlet

Pages must NOT include layout logic.

---

## 11. Routing

Use React Router:

- App.tsx defines routes
- Layout wraps pages
- Pages render via `<Outlet />`

---

## 12. API Layer

All API calls must:

- Live in `/services`
- Be separated from UI

Example:
services/gamification.api.ts

---

## 13. Naming Conventions

- Components → PascalCase
- Hooks → useX
- Files → match component name
- Schema → *.schema.ts

---

## 14. Imports

Use absolute imports:

@/features/...
@/components/...

Avoid deep relative paths.

---

## 15. UX States

Every form/modal must handle:

- Loading
- Success
- Error

Never leave incomplete flows.

---

## 16. Accessibility

All inputs must:

- Have labels
- Be keyboard accessible
- Support focus management (modals)

---

## 17. Styling Rules

- Use Tailwind only
- Follow spacing scale (p-4, p-6, p-8)
- Avoid inline styles
- Prefer composition over overrides

---

## 18. Anti-Patterns (Forbidden)

- Mixing schema + UI logic
- Using useState for forms
- Large monolithic components
- Duplicated logic
- Skipping validation
- Hardcoded values instead of constants

---

## 19. Expected Flow

1. User clicks CTA
2. Modal opens
3. Form initialized via useRewardForm
4. User inputs data
5. Zod validates
6. Submit triggers API (services/)
7. Flow updates via useRewardFlow
8. Success UI displayed

---

## Goal

Code must demonstrate:

- Strong separation of concerns
- Predictable data flow
- Reusability
- Production-level structure