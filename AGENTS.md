# Portfolio Website

## Project goal

This is a custom personal portfolio website.

The visual identity should feel intentionally designed rather than generated from a generic website template.

## Stack

- Vite
- Semantic HTML
- CSS
- Vanilla JavaScript

Do not introduce React or another frontend framework unless explicitly requested.

## Design principles

- Preserve the visual direction defined by the project.
- Do not introduce generic AI-style gradients, excessive glassmorphism or random decorative elements.
- Decorative elements should have a clear visual purpose.
- Keep hierarchy, spacing and typography intentional.
- Prioritize readability over visual effects.
- Do not copy complete layouts from reference websites.

## Responsiveness

Design and implement mobile-first where practical.

Important checkpoints:

- 375px
- 768px
- 1440px

Avoid:
- horizontal scrolling;
- clipped text;
- overlapping content;
- inaccessible navigation.

## Structure

Prefer a simple structure.

Create reusable JavaScript or CSS patterns only when repetition justifies them.

Do not overengineer the project.

## Dependencies

Prefer native HTML, CSS and JavaScript.

Before adding a dependency:
1. verify whether the same result can reasonably be achieved natively;
2. explain why the dependency is useful.

## Performance

- Optimize large images.
- Avoid unnecessary JavaScript.
- Avoid loading libraries only for trivial effects.
- Prefer CSS animations for simple visual interactions.

## Validation

During implementation:
- use lightweight checks first.

At meaningful UI checkpoints:
- use Playwright to check responsive layouts and navigation.

Before a release:
- run the production build.