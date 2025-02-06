import fetch from 'node-fetch';

export async function fetchChangelogLinks(outdated) {
  const changelogs = {};

  for (const pkg of Object.keys(outdated)) {
    try {
      const response = await fetch(`https://registry.npmjs.org/${pkg}`);
      const data = await response.json();

      if (data.repository && data.repository.url) {
        const repoUrl = data.repository.url.replace('git+', '').replace('.git', '');
        changelogs[pkg] = `${repoUrl}/releases`;
      }
    } catch {
      changelogs[pkg] = 'N/A';
    }
  }

  return changelogs;
}
