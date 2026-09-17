# Little Sprout

A self-contained preschool garden game for ages 3–5. Colors, shapes, and counting 1–5, with three-choice challenges, optional locally available speech, gentle hints, flower rewards, and randomized replay. No external assets, links, analytics, accounts, or ads inside the game.

## Run

`npm start` serves the game on http://localhost:3000. `npm test` checks the game engine using Node's built-in test runner. The static site is the `public` directory. No build or dependencies are required.

## Play

The large Play button starts six rounds. Activity cards start three rounds of one skill. Match the pictured flower or shape; in counting rounds, tap ladybugs to count them once each, then choose the matching number. Every successful round grows a flower. There is no time limit or penalty for mistakes. After two incorrect answers, the correct choice is gently highlighted. Play again starts a fresh randomized session.

Sound begins after interaction. Speech uses only a locally installed English browser voice, when one is available. All instructions also appear visually. The speaker button controls speech and the success chime. Reduced-motion preferences are respected. Controls support touch and keyboard.

## Privacy and deployment

Keep this repository private. Repository visibility alone is not proof that a hosted website is private. Do not enable public GitHub Pages or change site visibility without owner approval. Use an authenticated private host or a verified private Pages configuration. No deployment workflow is enabled by default.

The app does not collect names or save player data. Hosting providers may maintain their own authentication and operational logs. Play session state stays in memory and resets when the page reloads.
