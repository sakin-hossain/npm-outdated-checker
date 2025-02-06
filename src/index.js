import { fetchChangelogLinks } from './changeLogLinks.js';
import { fetchOutdatedPackages } from './fetchData.js';
import { formatResults } from './formatOutput.js';

export async function checkOutdated(args) {
  console.log('Checking outdated dependencies...');
  const outdated = await fetchOutdatedPackages();

  if (!Object.keys(outdated).length) {
    console.log('✅ All dependencies are up-to-date!');
    return;
  }

  const changelogs = await fetchChangelogLinks(outdated);
  formatResults(outdated, changelogs, args);
}
