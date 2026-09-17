# Put Little Sprout on GitHub and play privately

The game code is already written. These steps save it in a private GitHub repository and run it through an authenticated GitHub Codespaces preview. No public deployment is configured.

## 1. Extract the game files

Download `Little_Sprout_GitHub.zip`. On Windows, right-click it and choose **Extract All**. Open the extracted `little-sprout` folder.

You should see `public`, `tests`, `package.json`, `README.md`, and this guide. The `public` folder contains the game, styling, and illustrations. Keep the files together.

## 2. Create a private repository

Open https://github.com/new. Name the repository `little-sprout-game`. Set visibility to **Private**. Enable **Add a README file**, then choose **Create repository**. Keep this separate from an existing portfolio repository.

## 3. Upload the extracted files

In the repository, choose **Add file → Upload files**. Drag the contents of the extracted `little-sprout` folder into the upload area, preserving the `public` and `tests` folders. Upload the contents, not the outer enclosing folder or the ZIP itself. Commit with the message `Add preschool garden learning game`.

At the top level of the repository, confirm that you can see `public`, `tests`, and `package.json`. Open `public` and confirm that `index.html` is inside it.

## 4. Open a Codespace

Choose the green **Code** button, select **Codespaces**, and choose **Create codespace on main**. Wait for the browser editor to load. Open **Terminal → New Terminal** if the terminal is hidden. Codespaces availability and included usage depend on your account; check the displayed usage allowance before accepting paid usage.

## 5. Run the logic checks

In the terminal, run:

```bash
npm test
```

The supplied suite has five tests. It checks valid randomized choices, retries, protection against repeat answer taps, counting each bug once, six-round completion, and clean replay. These five tests passed during preparation; they are logic tests, not a substitute for playing through the interface.

## 6. Start the game

In the same terminal, run:

```bash
npm start
```

Leave that terminal running. This serves the `public` directory on port 3000. No dependency installation or build step is needed.

## 7. Verify private access and open the game

Open the **PORTS** panel beside the terminal. If port `3000` is missing, choose **Add Port** and enter `3000`. Confirm its **Visibility** is **Private**. If necessary, right-click port 3000 and choose **Port Visibility → Private**. Keep it private.

Choose the globe / **Open in Browser** icon for port 3000. The browser opens the game through a GitHub-authenticated URL. Copy the forwarded address from the PORTS panel and bookmark it. Use the actual generated address; no live URL has been generated in advance.

Open the URL yourself, signed into your GitHub account, before handing the device to the child. An unauthenticated private/incognito window should require authentication instead of showing the game.

## 8. Play through the checks

- Tap **Let's play**. Check that the first flower prompt and three large choices appear.
- Tap an incorrect answer. Check that gentle encouragement appears and the round does not advance.
- Tap the matching answer. Check that a flower is awarded and the Next button appears.
- In a counting round, tap the same ladybug twice. It should count only once.
- Complete all six rounds, then tap **Play again**. A fresh garden should begin.
- Try each activity card from the home screen; each starts three rounds of that skill.
- Check the sound toggle, home button, and a narrow mobile-sized window. Spoken prompts require a locally available English browser voice; the game also provides visual instructions.

## Private preview versus permanent hosting

Codespaces provides a private development preview while the Codespace and server are running. It is not permanent, always-on hosting. If it stops, reopen the Codespace and run `npm start` again.

Do not enable ordinary GitHub Pages assuming the private repository makes the website private. GitHub's private Pages feature requires an organization using GitHub Enterprise Cloud. For permanent private hosting without that setup, keep the code on GitHub and use a host with verified sign-in access.

Official documentation:

- https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace
- https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site

## What is and is not complete

The source code is complete and five automated logic tests passed. The repository upload, browser interaction checks, and private URL creation are the steps you perform above. No public site or permanent hosted game has been created.
