---

```markdown
# npm-outdated-checker

[![npm version](https://badge.fury.io/js/npm-outdated-checker.svg)](https://badge.fury.io/js/npm-outdated-checker)
[![license](https://img.shields.io/npm/l/npm-outdated-checker)](https://opensource.org/licenses/MIT)
[![downloads](https://img.shields.io/npm/dt/npm-outdated-checker)](https://www.npmjs.com/package/npm-outdated-checker)

Easily check outdated dependencies in your Node.js project with a clean and user-friendly CLI. Generate output in table, JSON, or Markdown formats for streamlined dependency management.

## Features

- 🚀 **Quick Dependency Check**: Lists all outdated dependencies in your project.
- 📊 **Multiple Output Formats**: Table (default), JSON, and Markdown.
- 🔗 **Changelog Links**: Automatically fetches changelog links (if available).
- 🌟 **Simple CLI Interface**: No configuration needed, just run and get results.

---

## Installation

You can use `npm-outdated-checker` directly with `npx` or install it globally.

### Run with `npx` (Recommended)
```bash
npx npm-outdated-checker
```

### Install Globally
```bash
npm install -g npm-outdated-checker
```

---

## Usage

Navigate to your Node.js project folder and run the following command:

### Basic Command
```bash
npm-outdated-checker
```

### Output Formats
- **JSON**: Use `--output=json` to get JSON output.
  ```bash
  npm-outdated-checker --output=json
  ```
- **Markdown**: Use `--output=markdown` to generate Markdown tables.
  ```bash
  npm-outdated-checker --output=markdown
  ```

---

## Example Output

### Default Table Output
```plaintext
Outdated Dependencies:

┌────────────┬──────────┬─────────┬────────┬───────────┐
│ Package    │ Current  │ Wanted  │ Latest │ Changelog │
├────────────┼──────────┼─────────┼────────┼───────────┤
│ chalk      │ 4.0.0    │ 4.1.0   │ 5.0.0  │ N/A       │
│ ora        │ 5.0.0    │ 5.1.0   │ 6.0.0  │ N/A       │
└────────────┴──────────┴─────────┴────────┴───────────┘
```

### Markdown Output
```markdown
### Outdated Dependencies

| Package | Current | Wanted | Latest | Changelog |
|---------|---------|--------|--------|-----------|
| chalk   | 4.0.0   | 4.1.0  | 5.0.0  | N/A       |
| ora     | 5.0.0   | 5.1.0  | 6.0.0  | N/A       |
```

---

## How It Works

1. Runs `npm outdated` under the hood.
2. Fetches outdated dependencies and their details.
3. Optionally queries changelog or release links for each package.

---

## Contribution

Contributions are welcome! If you'd like to improve this package, feel free to submit an issue or a pull request on [GitHub](https://github.com/your-username/npm-outdated-checker).

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```

---

### Notes:
1. Replace `your-username` in the GitHub link with your actual GitHub username or repository link.
2. You can also include installation badges or add advanced usage if needed.
3. After adding this, you’re good to publish on npm!

Would you like help setting up your GitHub repository or automating the release process? 😊