```markdown
# npm-outdated-checker

`npm-outdated-checker` is a CLI tool that helps you check outdated packages in your Node.js project. It provides useful features like auto-suggesting updates, showing package sizes, checking for breaking changes, and exporting reports in various formats like table, markdown, HTML, and CSV.

## Features

- **Check Outdated Packages**: Quickly list outdated packages in your project.
- **Auto Suggest Upgrades**: Automatically suggest the best minor/patch upgrades.
- **Show Sizes**: Display the size of outdated dependencies.
- **Check Breaking Changes**: Warn about breaking changes for outdated packages.
- **Export Reports**: Export outdated package reports in various formats (table, markdown, HTML, CSV).
- **Peer Dependency Check**: Check for peer dependency conflicts.

## Installation

### Local Installation

You can install `npm-outdated-checker` globally or locally to use it in your project.

To install globally:

```bash
npm install -g npm-outdated-checker
```

To install locally:

```bash
npm install npm-outdated-checker
```

### Using `npx`

If you prefer not to install the package globally, you can use `npx` to run it directly without installing:

```bash
npx npm-outdated-checker
```

## Usage

### Basic Command

Run the following command to check for outdated packages in your Node.js project:

```bash
npx npm-outdated-checker
```

### Available Options

- `--output`, `-o`: Specify the output format. Available formats:
  - `table` (default)
  - `json`
  - `markdown`
  - `csv`
  - `html`
- `--auto-suggest`, `-a`: Suggest the best upgrade versions (minor/patch) for outdated packages.
- `--show-sizes`: Display the size impact of outdated dependencies.
- `--check-breaking`: Warn about breaking changes in outdated packages.
- `--peer-check`: Check for peer dependency conflicts.
- `--export`: Export the report in different formats (markdown, html, csv).

### Example Commands

- **Check outdated packages in table format**:
  ```bash
  npx npm-outdated-checker --output table
  ```

- **Check outdated packages and show suggested upgrades**:
  ```bash
  npx npm-outdated-checker --auto-suggest
  ```

- **Check outdated packages and display their sizes**:
  ```bash
  npx npm-outdated-checker --show-sizes
  ```

- **Check outdated packages and warn about breaking changes**:
  ```bash
  npx npm-outdated-checker --check-breaking
  ```

- **Export the outdated packages report as markdown**:
  ```bash
  npx npm-outdated-checker --export markdown
  ```

- **Export the outdated packages report as CSV**:
  ```bash
  npx npm-outdated-checker --export csv
  ```

- **Export the outdated packages report as HTML**:
  ```bash
  npx npm-outdated-checker --export html
  ```

### Example Output (Table Format)

```bash
Package  Current Version  Latest Version  Wanted Version
------------------------------------------------------
express  4.16.0          4.18.0          4.18.0
react    17.0.0          18.0.0          18.0.0
```

### Example Output (Markdown Format)

```markdown
# Outdated Packages Report

## express
- **Current Version**: 4.16.0
- **Latest Version**: 4.18.0
- **Wanted Version**: 4.18.0

## react
- **Current Version**: 17.0.0
- **Latest Version**: 18.0.0
- **Wanted Version**: 18.0.0
```

## Development

If you want to contribute or modify the project, you can run it locally by cloning the repository:

```bash
git clone https://github.com/yourusername/npm-outdated-checker.git
cd npm-outdated-checker
npm install
npm run dev
```

### Running Tests

To run the tests, use:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Explanation:
- **Installation** section covers both global and local installation methods, as well as usage via `npx`.
- **Usage** section provides commands for checking outdated packages, as well as using features like suggested upgrades, sizes, breaking changes, and exporting reports.
- **Example Output** is included for different formats (table, markdown) to give users a preview of the output.
- **Development** section explains how to contribute or run the project locally.
