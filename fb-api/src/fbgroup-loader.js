'use strict';
var FB = require('fb')
var logger = require('./log')
var conf = require('../config/config')
var chalk = require('chalk')

var request = require('request');


var hget = require('hget');
var marked = require('marked');
var Term = require('marked-terminal');

// function getRandomPonyFooArticle() {
//   return new Promise((resolve, reject) => {
//     request('https://ponyfoo.com/articles/random', (err, res, body) => {
//       if (err) {
//         reject(err); return;
//       }
//       resolve(body);
//     });
//   });
// }


// read();

// async function read () {
//   var html = await getRandomPonyFooArticle();
//   var md = hget(html, {
//     markdown: true,
//     root: 'main',
//     ignore: '.at-subscribe,.mm-comments,.de-sidebar'
//   });
//   var txt = marked(md, {
//     renderer: new Term()
//   });
//   console.log(txt);
// }

// function printRandomArticle() {
//   getRandomPonyFooArticle()
//     .then(html => hget(html, {
//       markdown: true,
//       root: 'main',
//       ignore: '.at-subscribe,.mm-comments,.de-sidebar'
//     }))
//     .then(md => marked(md, {
//       renderer: new Term()
//     }))
//     .then(txt => console.log(txt))
//     .catch(reason => console.error(reason));
// }


logger.info(chalk.green('log to file'));

function getFeed(){

  return new Promise((resolve, reject) => {
    FB.api('/312223862261295/feed', function(res) {
      if (res && res.error) {
        if (res.error.code === 'ETIMEDOUT') {
          console.log('request timeout');
          reject(res.error); return;
        } else {
          console.log('error', res.error);
           reject(res.error); return;
        }
      } else {
        resolve(res);
      }
    });
  });
  
} 
FB.setAccessToken(conf.fb_token);
FB.options({
  version: 'v2.7'
});


getFeed()
.then(txt => console.log(txt))
.catch(reason => {
  logger.info(chalk.red('there is an error'));
  console.error(reason)
});

// FB.api('/312223862261295/feed', function(res) {
//   if (res && res.error) {
//     if (res.error.code === 'ETIMEDOUT') {
//       console.log('request timeout');
//     } else {
//       console.log('error', res.error);
//     }
//   } else {
//     debugger;
//     console.log(res);

//   }
// });


