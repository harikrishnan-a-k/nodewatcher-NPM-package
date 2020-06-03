#!/usr/bin/env node



//console.log('haknodemon executed');
const program = require('caporal');
const chokidar=require('chokidar');
const debounce=require('lodash.debounce');
const fs=require('fs');
const {spawn}=require('child_process');
const chalk=require('chalk');


program
    .version('1.0.0')
    .argument('[filename]','Name of file to be executed.')
    .action(async ({filename})=>{

        const name=filename||'index.js';

        try{
            await fs.promises.access(name);
        }catch(err){
            throw new Error(`Could not find file ${name}`);
        }
        let proc;
        const start=debounce(()=>{
            if(proc){
                proc.kill();
            }
            console.log(chalk.red('>>>> Starting process...'));
           proc= spawn('node',[name],{stdio:'inherit'});
        },300)
        chokidar.watch('.')
        .on('add',()=>start())
        .on('change',start)
        .on('unlink',start);
        
    });

program.parse(process.argv);







