const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // lazy
