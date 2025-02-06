import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function fetchOutdatedPackages() {
  try {
    const { stdout } = await execPromise('npm outdated --json');
    return JSON.parse(stdout || '{}');
  } catch (error) {
    console.error('Error fetching outdated packages:', error.message);
    return {};
  }
}
