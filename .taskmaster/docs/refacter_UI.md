Here is the implementation-ready PRD for your portfolio refactor, structured using the **RPG (Repository Planning Graph)** method specifically for `.taskmaster` execution.

---

<overview>
## Problem Statement
The current portfolio (`gabrieluwaila.com`) suffers from "template fatigue"—a generic, dark-mode, neon-heavy design that obscures the candidate's actual value proposition. It fails to distinguish a serious engineering candidate (Fujifilm experience, complex backend projects) from a standard bootcamp graduate. The "wall of cards" layout makes it difficult for hiring managers to identify standout work or understanding of system architecture.

## Target Users
1.  **Technical Recruiters**: Need to validate specific tech stacks (Spring Boot, React, .NET) and years of experience in < 30 seconds.
2.  **Engineering Managers/Leads**: Need to see "engineering maturity"—how the candidate solves problems, handles constraints, and structures code, beyond just copying tutorials.
3.  **Peer Engineers**: Looking for code quality, architectural decisions, and genuine passion for technology.

## Success Metrics
-   **Scannability**: A user can identify the primary role (Full-Stack/Backend Focus) and top 3 technologies within 5 seconds.
-   **Differentiation**: Visual identity shifts from "Generic SaaS Dark Mode" to "Clean, Precise Engineering Journal."
-   **Performance**: Lighthouse scores >90 on all metrics (Performance, Accessibility, SEO).
-   **Asset Utilization**: 100% of project images and profile photos are sourced correctly from the existing `assets/img` directory.

</overview>

---

<functional-decomposition>
## Capability Tree

### Capability: Brand & Visual Identity
*Defines the look, feel, and standard interactions of the system.*

#### Feature: Design System (Light Mode First)
-   **Description**: A clean, minimalistic aesthetic inspired by technical documentation and IDE light themes.
-   **Inputs**: Logo assets, color palette (Teal #00D4AA, Gold #FFD700, Charcoal #1A1A1A, Off-white #F8F9FA).
-   **Outputs**: CSS Variables / Tailwind Config.
-   **Behavior**: High contrast text, subtle borders instead of heavy shadows, clean 4/8px spacing grid.

#### Feature: Typography & Layout
-   **Description**: Responsive typography scale using a pairing of Inter (UI) and JetBrains Mono (Technical/Code).
-   **Inputs**: Viewport size.
-   **Outputs**: Fluid font sizes, consistent vertical rhythm.
-   **Behavior**: Text scales readable on mobile; max-width containers for readability on desktop (65ch measure).

### Capability: Narrative Engine
*The core content flow that tells Gabriel's story.*

#### Feature: Hero Section
-   **Description**: Immediate introduction stating role and current context.
-   **Inputs**: Profile image (`assets/img/profile.jpg`), Bio copy.
-   **Outputs**: Rendered Hero component.
-   **Behavior**: Displays profile photo (circle or soft rounded rect), headline, subhead, and primary CTA (Resume/Contact).

#### Feature: Experience Timeline
-   **Description**: A structured view of professional history (Fujifilm) vs. Education.
-   **Inputs**: Job data (Role, Company, Dates, Impact bullets).
-   **Outputs**: Vertical list or timeline component.
-   **Behavior**: Highlights "Fujifilm" prominence; distinct visual separation between professional work and university studies.

#### Feature: Skill Contextualization
-   **Description**: Grouped skills with context, avoiding "logo soup."
-   **Inputs**: Skill list categorized (Backend, Frontend, DevOps, Game AI).
-   **Outputs**: Grid of Skill Clusters.
-   **Behavior**: Each cluster includes 1 sentence explaining *how* the stack is used (e.g., "Building scalable microservices and REST APIs").

### Capability: Project Showcase
*Displaying work with depth hierarchy.*

#### Feature: Featured Case Study (The "Deep Dive")
-   **Description**: A detailed layout for the #1 project (Asset Management System).
-   **Inputs**: Project metadata, screenshots (`assets/img/ams.png`), Architecture diagram (optional).
-   **Outputs**: Expanded card or dedicated section.
-   **Behavior**: Problem → Constraints → Stack → Architecture → Result flow.

#### Feature: Project Archive (The "Breadth")
-   **Description**: Grid of secondary projects (EvalBike, KDG, etc.).
-   **Inputs**: Project list.
-   **Outputs**: Compact cards.
-   **Behavior**: Hover effects reveal links to Repo/Demo; distinct tags for "Completed" vs "In Progress."

### Capability: Personality Hooks
*Small features that add human texture.*

#### Feature: Now & Next Status
-   **Description**: A small widget showing current focus.
-   **Inputs**: "Learning" (e.g., Rust), "Building" (e.g., Game Engine), "Reading".
-   **Outputs**: Sidebar or Footer widget.
-   **Behavior**: Static text rendering.

</functional-decomposition>

---

<structural-decomposition>
## Repository Structure

```
project-root/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/
│   │   ├── ui/              # Primitive atoms (Button, Card, Badge)
│   │   ├── layout/          # Navbar, Footer, Container
│   │   └── sections/        # Hero, Experience, Projects, Skills
│   ├── lib/
│   │   └── utils.ts         # CN/Clsx helpers
│   ├── data/
│   │   ├── projects.ts      # Structured content for projects
│   │   ├── experience.ts    # Work history data
│   │   └── skills.ts        # Skills and context copy
│   └── styles/
│       └── globals.css      # Tailwind directives & CSS vars
├── public/
│   └── assets/
│       └── img/             # EXISTING IMAGES MUST REMAIN HERE
└── tailwind.config.ts
```

## Module Definitions

### Module: Design System
-   **Maps to capability**: Brand & Visual Identity
-   **Files**: `tailwind.config.ts`, `globals.css`, `components/ui/`
-   **Responsibility**: Enforce consistency in color, type, and spacing.
-   **Exports**: Tailwind utility classes, reusable UI atoms.

### Module: Data Layer
-   **Maps to capability**: Content Source
-   **Files**: `data/*.ts`
-   **Responsibility**: Decouple content from presentation.
-   **Exports**: `projects` array, `experience` array, `profile` object.

### Module: Sections
-   **Maps to capability**: Narrative Engine & Project Showcase
-   **Files**: `components/sections/Hero.tsx`, `components/sections/Experience.tsx`, `components/sections/FeaturedProject.tsx`
-   **Responsibility**: Composition of UI atoms into logical page sections.
-   **Exports**: React Components.

</structural-decomposition>

---

<dependency-graph>
## Dependency Chain

### Phase 0: Foundation
No dependencies.
-   **Design System Config**: Tailwind setup, font loading (Inter/JetBrains), color palette definition.
-   **Data Layer**: Creation of TypeScript interfaces and data files (`projects.ts`, `experience.ts`) using existing content.
-   **Asset Audit**: Verification of file paths in `assets/img` to match Data Layer IDs.

### Phase 1: Core Components
-   **UI Atoms**: Depends on [Design System Config]. (Buttons, Cards, Badges, Typography components).
-   **Layout Shell**: Depends on [UI Atoms]. (Navbar, Footer, Main Container).

### Phase 2: Feature Sections
-   **Hero Section**: Depends on [UI Atoms, Data Layer].
-   **Experience Section**: Depends on [UI Atoms, Data Layer].
-   **Skills Section**: Depends on [UI Atoms, Data Layer].
-   **Project Components**: Depends on [UI Atoms, Data Layer]. (Includes `ProjectCard` and `CaseStudyLayout`).

### Phase 3: Assembly
-   **Home Page**: Depends on [Hero, Experience, Skills, Project Components, Layout Shell].

</dependency-graph>

---

<implementation-roadmap>
## Development Phases

### Phase 0: Infrastructure & Data
**Goal**: Establish the visual language and content source of truth.
**Entry Criteria**: Clean branch, existing `assets/img` folder intact.
**Tasks**:
- [ ] **Configure Tailwind & Fonts**: Set up colors (Teal/Gold/Charcoal) and Inter/JetBrains fonts.
- [ ] **Refactor Data**: Create `src/data/` files. Migrate hardcoded text from old site into these files.
- [ ] **Asset Mapping**: Update data files to point to correct images in `assets/img`.

### Phase 1: Component Library
**Goal**: Build the "Lego blocks" for the new design.
**Entry Criteria**: Phase 0 complete.
**Tasks**:
- [ ] **Create UI Atoms**: Build `Button` (primary/secondary), `Badge` (tech tags), `Card` (base container with subtle border/hover).
- [ ] **Implement Typography**: Create heading/text components that enforce the scale.
- [ ] **Create Layout Shell**: Responsive Navbar (glass effect, sticky) and Footer (social links).

### Phase 2: Sections Implementation
**Goal**: Build the narrative blocks.
**Entry Criteria**: Phase 1 complete.
**Tasks**:
- [ ] **Hero Section**: Implement split layout (Text Left, Profile Image Right).
- [ ] **Experience Timeline**: Create vertical list for Fujifilm/University. Use visual distinctors (icons/lines).
- [ ] **Skills Grid**: Implement grouped grid layout. Text description per group.
- [ ] **Project Showcase**:
    -   Implement "Featured Case Study" for *Asset Management System*.
    -   Implement "Project Grid" for remaining items.

### Phase 3: Polish & Assembly
**Goal**: Final page composition and "feel."
**Entry Criteria**: Phase 2 complete.
**Tasks**:
- [ ] **Page Assembly**: Compose sections into `page.tsx`.
- [ ] **Micro-interactions**: Add hover states to cards (lift + border color change). Add smooth scroll for anchor links.
- [ ] **Personality Hooks**: Add "Now / Next" widget in the Footer or Sidebar.
- [ ] **Accessibility Check**: Verify contrast ratios and keyboard tab order.

**Exit Criteria**: Site is fully responsive, distinct from the old version, and scores 90+ on Lighthouse.

</implementation-roadmap>

---

<architecture>
## Technology Stack
-   **Framework**: Next.js (App Router)
-   **Styling**: Tailwind CSS
-   **Motion**: Framer Motion (for very subtle entrance animations only)
-   **Icons**: Lucide React (clean, consistent stroke icons)
-   **Deployment**: Vercel (assumed based on Next.js)

## Key Design Decisions
1.  **Light Mode First**: To differentiate from the "Dark Mode Gamer" stereotype.
2.  **No "Glassmorphism"**: Replacing heavy blur/gradients with clean lines, whitespace, and subtle "tech" accents (e.g., node connectors or 1px borders).
3.  **Data-Driven UI**: All content lives in `src/data`. This makes it easy to update the portfolio without touching TSX.
4.  **Semantic HTML**: Heavy use of `<section>`, `<article>`, and `<header>` for accessibility.

## Visual Motif
-   **Monoline Geometric**: Use 1px wide lines in the background or as section dividers to hint at "circuits" or "node graphs" without being illustrative.
-   **Accent Colors**:
    -   Primary (Teal): Used for Links, Primary Buttons, "Active" states.
    -   Secondary (Gold): Used for "Featured" badges, "Winner" awards.
    -   Neutral (Charcoal): Used for Heading text.
</architecture>

---

<test-strategy>
## Critical Test Scenarios

### Visual Regression
**Happy Path**:
-   Verify "Light Mode" text contrast is legible (WCAG AA).
-   Verify mobile layout stacks correctly (no horizontal overflow).

### Data Integrity
**Integration**:
-   Verify `projects.ts` maps to valid image paths in `assets/img`.
-   Verify clicking "GitHub" or "Live Demo" buttons opens correct URLs.

### Accessibility
**Compliance**:
-   Tab navigation must flow logically through the page.
-   All images must have alt text (sourced from data).
</test-strategy>