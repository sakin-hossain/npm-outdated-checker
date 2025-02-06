#!/usr/bin/env node
import { checkOutdated } from '../src/index.js';

const args = process.argv.slice(2); // CLI args
checkOutdated(args);
