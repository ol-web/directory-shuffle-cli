#! /usr/bin/env node

const program = require("commander");
const shuffleDir = require("./shuffleDir");

program
    .version('1.0.0')
    .option('-d, --dir <path>', 'Shuffle this directory')
    .option('-p, --preview <path>', 'Show an array of files in this directory without shuffling')
    .parse(process.argv);

if (program.preview) {
    shuffleDir(program.preview, true).then(console.dir);
}
else if (program.dir) {
    shuffleDir(program.dir);
}
else {
    console.log("You need to specify the directory you want to shuffle, like \"directory-shuffle --dir dist/img\"");
}