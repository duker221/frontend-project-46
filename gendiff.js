#!/usr/bin/env node
import { Command } from 'commander';
import { genDiff } from './index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f --format <type>', 'output format')
  .usage('[options] <filepath1> <filepath2>')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse(process.argv);

const options = program.opts();

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

if (options.version) {
  console.log(program.version());
}
if (options.help) {
  program.outputHelp();
}
