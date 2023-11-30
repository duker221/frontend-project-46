#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
    .argument('<filepath1>')
    .argument('<filepath2>')
    
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0');

program
    .option('-h, --help', 'output usage information');

program
    .option('-f --format <type>', 'output format')

program.parse(process.argv);

const options = program.opts();

if (options.version) {
    console.log(program.version());
} else if (options.help) {
    program.outputHelp();
}

