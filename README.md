# 團圓同行 · Our Family Journey

Live website: https://wondermaple.github.io/family-journey/

A Traditional Chinese / English family trip planner for 23 January–20 February 2027, with lunar dates, itinerary search, stays, travellers, wishes and guest meal invitations.

## Live updates

The website reads the current shared itinerary from https://family-journey-2027.secretbongo1.chatgpt.site on opening and refreshes every 30 seconds. It does not keep a separate copy of the itinerary in GitHub. Saved itinerary changes therefore appear without rebuilding this repository. Editing and meal submissions open the hosted app; viewing needs no password.

An hourly planning check is linked to the hosted app. It reads explicit decisions in the Malaysia Family Road Trip Plan chat and the app-planning chats, preserves manual edits and protected flights, and flags conflicting or unreadable information. A saved schedule does not guarantee every future chat message can be read. The app's Plans & updates page shows the latest recorded check.

## Website development

Use Node 22.13 or newer. Run `npm install`, then `npm run build`. Commit source changes together with the regenerated `docs/` folder. GitHub Pages serves `main` → `/docs`. No credentials or private database seed are included here.

Backend code and shared records remain in the existing hosted app. Do not replace the backend with browser-local storage: family edits must stay shared across devices.
