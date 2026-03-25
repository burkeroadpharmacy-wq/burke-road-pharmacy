# Burke Road Compounding Pharmacy — TODO

## Phase 1: React/TypeScript Refactor
- [x] Extract and analyse original static HTML site
- [x] Upload all images to CDN
- [x] Scaffold React/TypeScript/Vite/TailwindCSS project
- [x] Global CSS design tokens (dark green palette, Playfair Display + Inter fonts)
- [x] Shared Layout component (sticky nav with dropdowns, announcement bar, footer)
- [x] Home page (hero, services grid, compounding highlight, PBS pricing, testimonials, location)
- [x] Compounding page (overview, dosage forms, why compound)
- [x] Conditions index page (searchable grid)
- [x] Condition detail dynamic page
- [x] Services page (PBS, vaccinations, DAA, Chemist Care Now, MedAdvisor, DVA, delivery)
- [x] Practitioners hub page
- [x] Prescribers portal page (prescription generator form)
- [x] Knowledge Centre page (article cards with category filter)
- [x] Contact page (form, trading hours, embedded map)
- [x] Push to GitHub

## Phase 2: Database Integration
- [x] Upgrade project to full-stack (Express + tRPC + PostgreSQL)
- [x] Design and migrate database schema (7 tables: conditions, services, articles, testimonials, contactSubmissions, prescriptionSubmissions, users)
- [x] Seed database with all existing site content (12 conditions, 8 services, 8 articles, 5 testimonials)
- [x] Build tRPC API routes (conditions, services, articles, testimonials, contact, prescriptions)
- [x] Update Home page to fetch live conditions and testimonials from DB
- [x] Update Conditions page to fetch live conditions from DB
- [x] Update Knowledge Centre to fetch live articles from DB with working category filter
- [x] Update Contact form to submit enquiries to DB via tRPC mutation
- [x] Update Prescribers form to submit prescriptions to DB via tRPC mutation
- [x] Wire all form inputs as controlled components
- [x] Write vitest tests for all new tRPC routers (8 tests passing)

## Pending / Future
- [ ] Admin dashboard to view contact submissions and prescription submissions
- [ ] Prescription file/image upload via S3
- [ ] Condition detail pages with full clinical content
- [ ] Knowledge Centre article detail pages
- [ ] Google Reviews API integration for live testimonials
- [ ] Email notification on new contact/prescription submissions

## Phase 3: Static Refactor for VentraIP Deployment
- [x] Remove server/ folder (Express, tRPC, Drizzle, JWT, OAuth, db helpers)
- [x] Remove drizzle/ schema and migrations folder
- [x] Remove backend-only npm packages (drizzle-orm, mysql2, @trpc/server, jose, cookie, express, etc.)
- [x] Create src/data/conditions.ts with all 12 conditions
- [x] Create src/data/services.ts with all 8 services
- [x] Create src/data/articles.ts with all 8 knowledge centre articles
- [x] Create src/data/testimonials.ts with all 5 testimonials
- [x] Create src/data/faqs.ts with pharmacy FAQs
- [x] Refactor Home.tsx to import from static data modules
- [x] Refactor Conditions.tsx to import from static data modules
- [x] Refactor KnowledgeCentre.tsx to import from static data modules
- [x] Refactor Contact.tsx to submit via Web3Forms
- [x] Refactor Prescribers.tsx to submit via Web3Forms with file upload
- [x] Simplify vite.config.ts to pure static Vite (remove server proxy)
- [x] Update package.json scripts (remove db:push, server build)
- [x] Generate .htaccess for React SPA routing on VentraIP
- [x] Generate deployment README for VentraIP cPanel
- [x] Verify pnpm build produces clean static dist/
- [x] Confirm no env vars required for core functionality (only VITE_WEB3FORMS_KEY for forms)

## Phase 4: Fix Manus Deployment
- [x] Add minimal Express static server (server/index.ts) to satisfy platform container requirement
- [x] Restore esbuild server bundling in build script (outputs dist/index.js)
- [x] Restore Vite build output to dist/public/ (server serves from there)
- [x] Verify pnpm build produces both dist/index.js and dist/public/index.html
- [x] Checkpoint and push to GitHub
