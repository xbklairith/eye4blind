#!/usr/bin/env node
'use strict';
var cmder = require('commander');

const chalk = require('chalk');
// var group = require('../src/fbgroup-loader')
var conf = require('../config/config')
var db = require('../src/couchdb')

// console.log(chalk.blue('Hello world!'));

// cmder
//   .arguments('<file>')
//   .option('-u, --username <username>', 'The user to authenticate as')
//   .option('-p, --password <password>', 'The user\'s password')
//   .action(function(file) {
//     console.log('user: %s pass: %s file: %s',
//       cmder.username, cmder.password, file);
//   })
//   .parse(process.argv);
db.readDB()