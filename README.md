# Ledger Lite

A client-side financial balance tracker built for zero-friction ledger logging. Everything runs directly in the browser using standard web APIs, keeping your financial inputs stored strictly on your local device.

---

## Overview

Managing daily micro-expenses often gets bogged down by heavy apps, mandatory logins, and database sync lags. `ledger-lite` removes those layers. 

You open the interface, log a value, and get back to your day. Positives act as income, negatives act as expenses, and the ledger recalibrates every calculation on the fly.

---

## How It Works

1. **State Initialization:** On load, the browser queries `localStorage` for any existing transaction payloads stored under the key `transactions`.
2. **DOM Injection:** Saved data gets parsed from JSON string arrays back into structured objects, generating dynamic `<li>` elements inside the transaction list.
3. **Calculation Loop:** Array methods (`map`, `filter`, `reduce`) iterate over entry amounts to derive net totals, positive aggregates, and absolute negative sums.
4. **Persistence:** Form submissions construct a new entry object (`id`, `text`, `amount`), append it to memory, commit the updated array to `localStorage`, and re-render the view.

---

## Key Features

* **Instant Balance Derived Logic:** Net total, income, and expense breakdown update dynamically upon every submission or deletion.
* **Persistent Local Storage:** Retains transaction logs across browser refreshes and session restarts without remote backend reliance.
* **Color-Coded Visual Indicators:** Border accents and text highlights distinguish cash inflows (green) from outflows (red).
* **Single-Click Deletion:** Remove erroneous entries using explicit transaction IDs with immediate view recalibration.
* **Input Normalization:** Built-in floating-point parsing ensures numeric inputs remain accurate to two decimal places.

---

## Tech Stack Breakdown

* **HTML5:** Basic semantic structure powering the balance card display and entry forms.
* **CSS3:** Custom property variables (`:root`), flexbox layouts, and dynamic state-based borders.
* **JavaScript (ES6+):** Pure DOM manipulation, array transformations (`reduce`, `filter`, `map`), and local persistence API (`localStorage`).

---

## Prerequisites & Quick Start

### Running via GitHub Codespaces (Browser Only)

1. Click the **Code** button at the top right of this repository.
2. Select the **Codespaces** tab and click **Create codespace on main**.
3. Once the environment initializes, launch the built-in simple browser preview or use the live server extension to open `index.html`.

### Local Execution

1. Download or clone this repository.
2. Open `index.html` directly in any web browser (Chrome, Firefox, Safari, Edge). No package installations or local server configuration necessary.

---

## Project Structure

```text
ledger-lite/
├── .github/
│   └── workflows/
│       └── code-health.yml     # Lints HTML/JS files on push or pull request
├── .gitignore                  # Excludes editor files and OS metadata
├── index.html                  # Main markup file containing form & summary card
├── style.css                   # Custom styles and color variable definitions
├── script.js                   # Application state management & DOM logic
└── README.md                   # Repository documentation
```

## Roadmap

[ ] Add category tagging for granular expense filtering (e.g., Food, Utilities).

[ ] Export transaction records to CSV format.

[ ] Include monthly visual spending charts using lightweight canvas rendering.

```text"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra```
