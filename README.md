# 📱 Inventory Tracker Comparator

A specialized React + TypeScript dashboard designed to synchronize and compare third-party Excel inventory data against the records stored in Inventory Tracker.

---

## 🛠 Environment Requirements

- **Node.js**: `v24.13.1` (Managed via NVM)
- **Vite**: `v7.3.1`
- **Code Quality**: ESLint 9 + Prettier

---

## 🚀 Development Workflow

This repository uses **Husky**, **lint-staged**, and **Prettier** to ensure that all code is standardized and formatted automatically.

### 🛡️ Git Hooks & Safety Gates

We have implemented three distinct layers of automation:

1. **Pre-commit (`.husky/pre-commit`)**:

- Triggers `lint-staged`.
- **Auto-Formatting**: Runs `prettier --write` on staged files.
- **Linting**: Runs `eslint --fix` to resolve logical issues automatically.
- **Goal**: Ensure all committed code meets the style guide without manual intervention.

2. **Commit Message (`.husky/commit-msg`)**:

- Triggers `commitlint`.
- **Goal**: Maintain a clean, searchable history for your Calgary asset updates.

3. **Pre-push (`.husky/pre-push`)**:

- Runs `npm run lint -- --fix` to catch and resolve any missed formatting.
- Runs `npm run build` to verify the production bundle.
- **Goal**: Final verification that the app is production-ready before pushing to `main`.

---

## 📝 Commit Convention

We follow the **Conventional Commits** specification: `type: description`

| Type         | Purpose                                                | Example                                   |
| ------------ | ------------------------------------------------------ | ----------------------------------------- |
| **feat**     | A new feature for the comparator (e.g., Excel upload). | `feat: add xlsx parsing utility`          |
| **fix**      | A bug fix (e.g., repairing a broken hook).             | `fix: resolve node version mismatch`      |
| **docs**     | Documentation changes only.                            | `docs: update readme with husky guide`    |
| **style**    | Changes that do not affect code meaning (formatting).  | `style: fix semicolons in main.tsx`       |
| **refactor** | Code changes that neither fix a bug nor add a feature. | `refactor: optimize imei comparison loop` |

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

3. **Automatic Formatting**:
   Simply write your code; the git hooks will handle semicolons, quotes, and indentation on commit.

---

Your repository is now a fortress of code quality.

**Would you like me to create the `src/types/inventory.ts` file now?** We can define the interfaces for your **SIM List** and **Cell Phone** data so you can begin the actual comparison logic.
