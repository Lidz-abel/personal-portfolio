# Repository Guidelines

## Project Structure & Module Organization

This repository currently has no application source, tests, assets, or build configuration checked in. Keep future additions organized by responsibility:

- `src/` for application code and reusable modules.
- `tests/` for automated tests that mirror `src/` paths.
- `public/` or `assets/` for static images, icons, fonts, and other browser-served files.
- `docs/` for design notes, architecture decisions, or contributor-facing references.

Avoid placing generated artifacts, dependency folders, or local environment files in the repository.

## Build, Test, and Development Commands

No project commands are currently defined. When a package manager or build system is added, document the exact commands here and keep them aligned with the project manifest. Prefer standard names such as:

- `npm install` to install JavaScript dependencies.
- `npm run dev` to start a local development server.
- `npm test` to run the test suite.
- `npm run build` to produce a production build.

Do not add tool-specific instructions until the corresponding configuration files exist.

## Coding Style & Naming Conventions

Follow the conventions of the framework or language introduced in the repository. Use consistent indentation across each language, descriptive file names, and small modules with focused exports. Suggested defaults:

- `camelCase` for JavaScript or TypeScript variables and functions.
- `PascalCase` for React components and class-like constructs.
- `kebab-case` for static asset names, for example `profile-photo.webp`.

Add formatter and linter configuration before enforcing style in reviews.

## Testing Guidelines

Place tests under `tests/` or next to source files using a clear suffix such as `.test.ts`, `.spec.ts`, or the framework-preferred pattern. New features should include tests for expected behavior and important edge cases. If no test framework exists yet, add one with the first meaningful implementation and document the run command above.

## Commit & Pull Request Guidelines

Git history is not available in this workspace, so no existing commit convention can be inferred. Use short, imperative commit subjects such as `Add portfolio layout` or `Fix contact form validation`.

The target remote repository is `https://github.com/Lidz-abel/personal-portfolio`. Before pushing, confirm the local Git remote points to that URL. After completing a meaningful section of work, create a timely commit with `git commit -m "..."`; the message should clearly describe what was added, changed, or fixed, for example `git commit -m "Add portfolio header layout"`.

Pull requests should include a concise summary, the reason for the change, verification steps, and screenshots for visual updates. Link related issues when applicable and call out any follow-up work or known limitations.

## Agent-Specific Instructions

Before editing, inspect the current tree and avoid assuming missing project files exist. Keep changes narrowly scoped, update this guide when structure or commands are introduced, and do not overwrite user-created files without explicit direction. Write only inside this workspace: `/home/ldz/personal-portfolio`; do not create or modify files elsewhere.
