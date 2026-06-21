# Security Policy

ZeroKey AI is a local-first static web app. It has no backend, no server-side storage and no telemetry.

## Current hardening

- API keys are stored in a local encrypted vault, not as new clear-text `localStorage` records.
- Vault encryption uses WebCrypto AES-GCM with PBKDF2-SHA256.
- The vault password is never stored. Decrypted keys live only in memory while the vault is unlocked.
- Legacy clear-text keys from older versions are detected and migrated when the user saves the vault with a password.
- User and provider text is escaped before rendering to reduce XSS risk.
- A restrictive Content Security Policy is included.
- External links use `noopener noreferrer` and the page sets `referrer=no-referrer`.

## Important notes

- Prompts are sent directly from the browser to the selected AI provider.
- Do not enter sensitive secrets, passwords, private keys, medical data or confidential business data as prompts.
- Use GitHub Pages or another HTTPS host when publishing. WebCrypto availability is best on HTTPS or localhost.
- Provider quotas, models, APIs and CORS behavior can change outside this project.

## Reporting issues

Open a GitHub issue with:

- Browser and device.
- Steps to reproduce.
- Expected result.
- Actual result.
- Console error, if any.

Do not include real API keys in reports.
