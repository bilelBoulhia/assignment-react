# Project Setup and Approach

This file covers how to get the project running and the key  choices I made.

## Setup

```
git clone <your-repository-url>

cd <name>

Install dependencies:

npm install

npm run dev

# for running tests

npm run test
```

## UI/UX Approach

### Tech Stack Choices

React + Vite: I chose this for a Faster spin-up of the development server and Improved build performance

React Query: It handles server data automatically (fetching, caching), which makes the app feel quicker and more reliable.

Tailwind CSS: I used Tailwind to rapidly build and style reusable components directly in the markup.

Hooks & Context: I used hooks to organize logic within components and context to manage shared state, i used context for the dark/light mode theme.

## UI & UX Improvements

Drawer for Selections: I used a slide-in drawer so user selections are always clear.

Clearer Navigation: The "previous step" button is now more intuitive and easier to find.

Cancel Button: The cancel button's design is more distinct to prevent accidentally going back to previous step.

Cards: The cards are now fully responsive especially for small screens and show more info at a glance.

Theme Options: I added a theme switcher (light/dark) for user preference and better accessibility.

Custom Stepper: I replaced the default browser scrollbar in the stepper with a cleaner, custom design.

## Code Quality

Constants File: I kept text labels in a central file for easy maintenance.

TypeScript: I used TypeScript for type safety
