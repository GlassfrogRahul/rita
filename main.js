const rita = require('rita');

const markov = rita.RiTa.markov(3);
markov.addText("I went to the car. The car went to the grocery store. Saif went bowling behind the store.");

let sents = rm.generate(1);

console.log(sents);