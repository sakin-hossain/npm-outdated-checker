#!/usr/bin/env node

import { checkOutdated, showDependencySize, checkBreakingChanges, peerDependencyCheck } from '../src/checkOutdated.js';
import { printTable, printMarkdown, printJSON } from '../src/generateReport.js';
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('output', {
    alias: 'o',
    describe: 'Specify the output format (table, json, markdown)',
    choices: ['table', 'json', 'markdown'],
    default: 'table',
  })
  .option('auto-suggest', {
    alias: 'a',
    describe: 'Suggest the best upgrade versions (minor/patch)',
    type: 'boolean',
  })
  .option('show-sizes', {
    describe: 'Show the size impact of outdated dependencies',
    type: 'boolean',
  })
  .option('check-breaking', {
    describe: 'Warn about breaking changes',
    type: 'boolean',
  })
  .option('peer-check', {
    describe: 'Check for peer dependency conflicts',
    type: 'boolean',
  })
  .option('export', {
    describe: 'Export report in different formats (html, csv, markdown)',
    type: 'string',
  })
  .help()
  .argv;

async function generateSuggestedUpgrades(outdatedPackages) {
  let suggestedUpgrades = '';
  
  // Convert outdatedPackages to an array if it is an object
  const packagesArray = Array.isArray(outdatedPackages) ? outdatedPackages : Object.values(outdatedPackages);

  packagesArray.forEach(pkg => {
    const latestVersion = pkg.latest;
    const currentVersion = pkg.current;
    if (latestVersion !== currentVersion) {
      suggestedUpgrades += `- Package: ${pkg.name}, Current: ${currentVersion}, Latest: ${latestVersion}\n`;
    }
  });

  return suggestedUpgrades;
}

async function generateReport(outdatedPackages, format) {
  // Convert outdatedPackages to an array if it is an object
  const packagesArray = Array.isArray(outdatedPackages) ? outdatedPackages : Object.values(outdatedPackages);

  let report = '';
  switch (format) {
    case 'markdown':
      report = printMarkdown(packagesArray);
      break;
    case 'html':
      // Add a basic HTML format (you can customize as needed)
      report = `<h1>Outdated Packages Report</h1><ul>`;
      packagesArray.forEach(pkg => {
        report += `<li>${pkg.name}: Current: ${pkg.current}, Latest: ${pkg.latest}</li>`;
      });
      report += `</ul>`;
      break;
    case 'csv':
      // Add CSV export functionality
      report = 'Package,Current Version,Latest Version\n';
      packagesArray.forEach(pkg => {
        report += `${pkg.name},${pkg.current},${pkg.latest}\n`;
      });
      break;
    default:
      report = printTable(packagesArray);
  }

  // Export the report to a file
  const filePath = `outdated-packages-report.${format}`;
  fs.writeFileSync(filePath, report);
  console.log(`Report saved to ${filePath}`);
}

(async () => {
  const outdatedPackages = await checkOutdated();
  let report = '';

  // Show in Table format by default
  switch (argv.output) {
    case 'json':
      report = printJSON(outdatedPackages);
      break;
    case 'markdown':
      report = printMarkdown(outdatedPackages);
      break;
    default:
      report = printTable(outdatedPackages);
  }

  // Handle additional options
  if (argv.autoSuggest) {
    const suggestedUpgrades = await generateSuggestedUpgrades(outdatedPackages);
    report += '\n\nSuggested Upgrades:\n';
    report += suggestedUpgrades;
  }

  if (argv.showSizes) {
    const sizesReport = await showDependencySize(outdatedPackages);
    report += '\n\nDependency Sizes:\n';
    report += sizesReport;
  }

  if (argv.checkBreaking) {
    const breakingChangesReport = await checkBreakingChanges(outdatedPackages);
    report += '\n\nBreaking Changes:\n';
    report += breakingChangesReport;
  }

  if (argv.peerCheck) {
    const peerDependencyReport = await peerDependencyCheck(outdatedPackages);
    report += '\n\nPeer Dependency Compatibility:\n';
    report += peerDependencyReport;
  }

  if (argv.export) {
    await generateReport(outdatedPackages, argv.export);
  } else {
    console.log(report);
  }
})();
