import { table } from 'table';

export const printTable = (outdatedPackages) => {
  const data = [['Package', 'Current', 'Wanted', 'Latest', 'Changelog']];
  for (const pkg in outdatedPackages) {
    const { current, wanted, latest, changelog } = outdatedPackages[pkg];
    data.push([pkg, current, wanted, latest, changelog || 'N/A']);
  }
  return table(data);
};

export const printMarkdown = (outdatedPackages) => {
  let markdown = '### Outdated Dependencies\n\n';
  markdown += '| Package | Current | Wanted | Latest | Changelog |\n';
  markdown += '|---------|---------|--------|--------|-----------|\n';
  for (const pkg in outdatedPackages) {
    const { current, wanted, latest, changelog } = outdatedPackages[pkg];
    markdown += `| ${pkg} | ${current} | ${wanted} | ${latest} | ${changelog || 'N/A'} |\n`;
  }
  return markdown;
};

export const printJSON = (outdatedPackages) => {
  return JSON.stringify(outdatedPackages, null, 2);
};

export const generateReport = (outdatedPackages, format) => {
  // Handle exporting the report to a file, e.g., HTML, CSV, etc.
  // Not implemented here but can be expanded with file-system operations.
};
