import fetch from 'node-fetch';
import { exec } from 'child_process';
import semver from 'semver';

export const checkOutdated = () => {
  return new Promise((resolve, reject) => {
    exec('npm outdated --json', (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      }
      resolve(JSON.parse(stdout));
    });
  });
};

export const showDependencySize = async (outdatedPackages) => {
  let sizeReport = '';
  for (const pkg in outdatedPackages) {
    const size = await getPackageSize(pkg);
    sizeReport += `${pkg}: ${size} KB\n`;
  }
  return sizeReport;
};

const getPackageSize = async (pkg) => {
  const res = await fetch(`https://bundlephobia.com/api/size?package=${pkg}`);
  const data = await res.json();
  return (data.size / 1024).toFixed(2); // Convert bytes to KB
};

export const checkBreakingChanges = async (outdatedPackages) => {
  let breakingChangesReport = '';
  for (const pkg in outdatedPackages) {
    const latestVersion = outdatedPackages[pkg].latest;
    const isBreaking = semver.diff(outdatedPackages[pkg].current, latestVersion) === 'major';
    if (isBreaking) {
      breakingChangesReport += `${pkg}: Major breaking changes detected in version ${latestVersion}\n`;
    }
  }
  return breakingChangesReport;
};

export const peerDependencyCheck = async (outdatedPackages) => {
  let peerReport = '';
  for (const pkg in outdatedPackages) {
    // In this case, we would use a service or API to check peer dependencies.
    // Placeholder for real logic, possibly using an API or npm registry data.
    peerReport += `${pkg}: Peer dependency check (not implemented yet)\n`;
  }
  return peerReport;
};
