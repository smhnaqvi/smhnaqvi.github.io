---
id: 2
title: "Building a Community-Driven Lahore Software Houses Directory"
description: "How I turned a simple README table into a public directory website, made it community-friendly with contribution rules, and kept the table as the single source of truth."
thumbnail: "/images/blog/lahore-software-houses-directory.webp"
author: "Syed Muhammad Hussain Naqvi"
publishedAt: "2026-02-20"
tags: ["Next.js", "GitHub Pages", "Open Source", "Community", "Pakistan", "Lahore"]
category: "Open Source"
readingTime: "9 min"
---

# Building a Community-Driven Lahore Software Houses Directory

Finding reliable, up-to-date information about software houses in Lahore is harder than it should be, especially when you're actively job hunting. So I built a curated directory that's easy to browse, easy to contribute to, and transparent about where the data comes from: a single Markdown table in the repo.

The goal is simple: help developers, designers, and tech folks discover companies, understand what they do, and navigate Lahore's job market with less guesswork.

## TL;DR

If you just want the gist:

- **Single Source of Truth:** The `README.md` table is the canonical dataset, no hidden database.
- **Website Generated From README:** A Next.js site builds the directory directly from that table during build time.
- **Community-Driven Updates:** Anyone can contribute via PRs, or just open an issue if they're not comfortable with Git.
- **Clear Contribution Rules:** Strict table format + `https://` links + controlled row order keep the site consistent.
- **Focused Mapping:** The current focus is collecting software houses in Johar Town.

## Prerequisites

You don't need anything advanced to follow this article. A basic understanding of GitHub repos, Markdown tables, and how PRs/issues work is enough. If you've used Next.js before, you'll instantly recognize the "build a static site from data" approach.

## Project Structure

Here's the concept-level structure (the important part is the separation between data and website):

```text
lahore-software-houses/
├─ README.md                 # Source of truth (companies table lives here)
├─ CONTRIBUTING.md           # Contribution rules & workflow
├─ web/                      # Next.js website (builds directory from README)
└─ LICENSE                   # MIT
```

## Why a README Table as the Database?

A lot of directories die because data maintenance becomes complex: spreadsheets, forms, admin panels, or a backend nobody wants to touch.

A README table wins because:

- It's visible (anyone can review changes in diffs).
- It's versioned (history and accountability are built in).
- It's easy to contribute (one row = one contribution).
- It's community-friendly (PRs + issues = low friction).

And the best part: it's hard to silently break the dataset when you enforce strict formatting rules.

## The "Top Software Houses" Table Rules

The core dataset follows one exact schema:

| Company Name | Website | LinkedIn | Focus Area |
| --- | --- | --- | --- |

There are a few strict rules that keep the website stable and predictable:

### 1) Format is non-negotiable

Every row must match the same columns and style.

### 2) Order matters

Rows higher in the table appear first on the website, so the table also acts like a manual ranking/priority list.

### 3) Links must be clean

- All URLs must start with `https://`
- Use link labels like `Visit` and `LinkedIn` (consistent UI + consistent parsing)

### 4) The table is the single source of truth

No duplicate data file. No separate JSON. The site is generated from the README during build time.

## How Contributions Work

I wanted this repo to feel welcoming, even for people who don't work with Git daily. So the repo supports two contribution paths:

### 1) PR-based contributions (for Git users)

This is the typical open-source workflow:

1. **Fork the repo**  
   Create your own copy of the repository.
2. **Create a branch**

```bash
git checkout -b add-new-company
```

3. **Add a new row to the README table**  
   Make sure the company:
   - Has a major office in Lahore
   - Is not already listed
   - Uses the correct format
4. **Commit + push**

```bash
git commit -m "Add [Company Name] to the list"
git push origin add-new-company
```

5. **Open a pull request**  
   Explain what you added or fixed.

### 2) Issue-based contributions (for non-Git users)

Not comfortable with Git? No problem.

Just open an issue and include:

- Company name
- Website
- LinkedIn
- Focus area
- (Optional) Location area in Lahore (super useful)

This keeps contribution friction low and helps the list grow faster.

## Current Focus: Mapping Johar Town

To avoid trying to map the whole city forever, the directory uses a focused approach.

Right now, the priority is Johar Town: collect companies in that area first, then expand systematically. This is also a good community hook because contributors know exactly what to add next.

## Job Search Tips (Real Lahore Context)

The repo includes job search tips because the directory is built for job seekers, not just as a list.

Here are the most practical ones:

- **LinkedIn is key:** Recruiters in Lahore are active there, and a strong profile often matters more than your CV format.
- **Network first:** Meetups around Arfa Software Technology Park, Plan9, and local tech communities can lead to referrals.
- **Referrals matter a lot:** If you can connect with employees at your target companies before applying, your chances jump.

## Making It Easy to Maintain Long-Term

A directory only stays useful if it stays maintained. Here's what makes this repo sustainable:

- A strict schema prevents messy entries.
- One dataset prevents sync issues.
- PRs keep review lightweight.
- Issues allow contributions from anyone.
- MIT license keeps it open and reusable.

It's not about building the fanciest system; it's about building something the community will actually keep alive.

## Conclusion

- The directory is intentionally simple: a README table as the database.
- The Next.js website is generated from the README, so updates propagate automatically.
- Contributions are designed to be low friction (PRs or issues).
- Strict formatting rules keep the data clean and the website stable.
- The project is currently expanding via a focused mapping strategy (starting with Johar Town).