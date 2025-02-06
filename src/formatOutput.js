import chalk from 'chalk';

export function formatResults(outdated, changelogs, args) {
  const outputFormat = args.includes('--output=json')
    ? 'json'
    : args.includes('--output=markdown')
    ? 'markdown'
    : 'table';

  if (outputFormat === 'json') {
    console.log(JSON.stringify(outdated, null, 2));
  } else if (outputFormat === 'markdown') {
    console.log('### Outdated Dependencies\n');
    console.log('| Package | Current | Wanted | Latest | Changelog |');
    console.log('|---------|---------|--------|--------|-----------|');
    Object.entries(outdated).forEach(([pkg, details]) => {
      const changelog = changelogs[pkg] || 'N/A';
      console.log(`| ${pkg} | ${details.current} | ${details.wanted} | ${details.latest} | ${changelog} |`);
    });
  } else {
    console.log(chalk.yellow('\nOutdated Dependencies:\n'));
    console.table(
      Object.entries(outdated).map(([pkg, details]) => ({
        Package: pkg,
        Current: details.current,
        Wanted: details.wanted,
        Latest: details.latest,
        Changelog: changelogs[pkg] || 'N/A',
      }))
    );
  }
}
