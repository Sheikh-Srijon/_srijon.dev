# _srijon.dev_ — Sheikh Srijon Portfolio

This repository powers the public site for Sheikh Srijon, an AI-first founder building through Applash AI, Komiko, and Glato AI.

## Highlights

- Personalized hero and skill narrative tailored to Sheikh Srijon’s background (Stanford CS ’23, EB1A Einstein visa, a16z Speedrun backing).  
- Work sections that spotlight study-abroad infrastructure, generative media ops, and AI-native monetization tools.  
- Categorized badge grid for technical vs. strategy competencies and archived contact form logic for later reuse.

## Tech Stack

- Next.js 15 (App Router)  
- Tailwind CSS + DaisyUI  
- React components powered by data in `src/data/data.js`

## Local development

1. Install dependencies with `npm install`.  
2. Run the dev server with `npm run dev` and open `http://localhost:3000`.  
3. Adjust the content inside `src/data/data.js` if you need to refresh copy, project links, or skills.

## Deployment

- Deploy on Vercel by running `npx vercel --prod` from the repo root (after authenticating with Vercel).  
- The site also respects the data-driven metadata objects under `src/data/data.js`, so refreshes there automatically update SEO tags and page titles.

## Notes

- The contact form is archived in `src/archived/contact/page.js`; no active route exists at `/contact`.  
- The repository remains under the MIT license found in `LICENSE`, which must stay in any redistributed copy.
