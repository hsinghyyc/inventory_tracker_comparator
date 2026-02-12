# 📱 Inventory Tracker Comparator

A specialized React + TypeScript dashboard designed to synchronize and compare third-party Excel inventory data against the records stored in your Inventory Tracker.

---

## 🛠 Environment Requirements

This project requires a specific Node.js environment to maintain compatibility with Vite 7 and our linting suite.

## 🚀 Development Workflow

This repository uses **Husky** and **lint-staged** to ensure that no "broken" or poorly formatted code reaches GitHub.

### 🛡️ Git Hooks & Safety Gates

We have implemented three distinct layers of automation:

1. **Pre-commit (`.husky/pre-commit`)**:

- Triggers `lint-staged`.
- Runs `eslint --fix` on only the files you have modified.
- **Goal**: Instant feedback and auto-formatting before the code is even saved to your history.

2. **Commit Message (`.husky/commit-msg`)**:

- Triggers `commitlint`.
- Validates your message against **Conventional Commit** standards.
- **Goal**: Maintain a clean, searchable history for your Calgary asset updates.

3. **Pre-push (`.husky/pre-push`)**:

- Runs `npm run lint` (Whole project scan).
- Runs `npm run build` (Production bundle test).
- **Goal**: Final verification that the app is production-ready before pushing to `main`.

---

## 📝 Commit Convention

We follow the **Conventional Commits** specification. Messages must follow this format:

`type: description`

| Type         | Purpose                                                | Example                                   |
| ------------ | ------------------------------------------------------ | ----------------------------------------- |
| **feat**     | A new feature for the comparator (e.g., Excel upload). | `feat: add xlsx parsing utility`          |
| **fix**      | A bug fix (e.g., repairing a broken hook).             | `fix: resolve node version mismatch`      |
| **docs**     | Documentation changes only.                            | `docs: update readme with husky guide`    |
| **style**    | Changes that do not affect the meaning of the code.    | `style: update layout for sim list table` |
| **refactor** | Code changes that neither fix a bug nor add a feature. | `refactor: optimize imei comparison loop` |

---

---

## 🏁 Getting Started

1. **Install Dependencies**:

```bash
npm install

```

2. **Run Dev Environment**:

```bash
npm run dev

```

3. **Verify Hooks**:
   Make a small change and try `git commit -m "update"`. It should fail, proving the **commitlint** gate is working.

---
