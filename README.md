# ELOIntelliSense

TypeScript type declarations for easening writing scripts for ELO Digital Office programs.

## Table of Contents

- [ELOIntelliSense](#elointellisense)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps to Install](#steps-to-install)
  - [Usage](#usage)
    - [Features](#features)
    - [Example](#example)
  - [Contributing](#contributing)
  - [Workflow](#workflow)
  - [License](#license)
  - [Contact](#contact)

## Description

ELO is a software that utilizes a custom JavaScript engine with its own set of functions. This VSCode extension adds **IntelliSense** to enhance the development experience for users working with ELO. By providing function autocompletion, documentation tooltips, and signature help, this extension speeds up development and reduces errors when interacting with ELO's APIs.

## Installation

### Prerequisites

- **Node.js** (for building and running the extension locally)
- **yarn** (for managing dependencies)

### Steps to Install

1. Clone the repository:
   `git clone https://github.com/yourusername/elo-intellisense-vscode.git`
2. Navigate into the project directory:
   `cd elo-intellisense-vscode`
3. Install dependencies with Yarn:
   `yarn install`
4. Open the project in Visual Studio Code:
   `code .`

## Usage

After installing the extension, you can start using it right away in any .js or .ts file that interacts with the ELO software.

### Features

- Autocompletion: Suggests functions, methods, and variables related to ELO's JavaScript API.

- Documentation on Hover: Hover over a function to see its documentation, including parameters, return types, and examples.

- Function Signatures: Displays function signatures to help you write code correctly.

### Example

When typing in a JavaScript file that uses ELO, you'll see autocomplete suggestions for custom ELO functions. For example:

```
elo.someCustomFunction() // IntelliSense will provide the function signature, description, and parameter hints.
```

## Contributing

We welcome contributions to improve this extension. If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add a new feature or fix bug`
4. Push your changes: `git push origin feature/your-feature`
5. Open a pull request and describe what you've changed or added.

## Workflow

Here’s how we manage the development and release cycle for the ELO IntelliSense VSCode Extension:

1. **Development**:

   - We use **Git Flow** as our branching model. New features and fixes are first developed in the `dev` branch.
   - All new code starts in a feature branch (`feature/*`), created off of `dev`.

2. **Creating a Release**:

   - When the `dev` branch is stable and ready for release, we create a **release branch** (`release/*`).
   - The release branch will undergo final testing and adjustments. Once it is stable, the release branch is merged into both `main` (for production) and `dev` (to keep the branches in sync).

3. **Hotfixes**:

   - If there’s a critical bug found in production, we create a **hotfix branch** (`hotfix/*`) directly from `main`.
   - After fixing the issue, the hotfix branch is merged back into both `main` (to apply the fix in production) and `dev` (to ensure the fix is included in the next release).

4. **Publishing to NPM**:

   - When a new version is ready and merged into `main`, the package is automatically published to **npm** using a GitHub Actions workflow.
   - Versioning is automated based on commit messages (e.g., major, minor, or patch updates).

5. **Pull Requests**:

   - All changes to `main` must be made via a pull request, and only **release** or **hotfix** branches are allowed to merge into `main`.
   - All pull requests are reviewed by at least one of the maintainers before merging.

6. **Versioning**:
   - Versioning follows Semantic Versioning (SemVer). If the change is a:
     - **Major release** (breaking changes): Increment the first number (e.g., 1.0.0 to 2.0.0).
     - **Minor release** (new features, no breaking changes): Increment the second number (e.g., 0.1.0 to 0.2.0).
     - **Patch release** (bug fixes): Increment the third number (e.g., 0.0.1 to 0.0.2).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, issues, or suggestions, feel free to contact us:

- **Manuel Thalmann** (Maintainer)

  - GitHub: [neurolag](https://github.com/orgs/ELODOIntelliSense/people/neurolag)
  - Email: your-email@example.com

- **Jiro Kaya** (Maintainer)
  - GitHub: [JiroKaya](https://github.com/JiroKaya)
  - Email: jiro.kaya.ch@gmail.com
