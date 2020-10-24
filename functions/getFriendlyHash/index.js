const random = require('../../node_modules/random');
const seedrandom = require('seedrandom');
const { adjectives, animals } = require('./words');


/**
 * @Method: Returns a random animal from the words list.
 * @returns {string}
 */
function getAnimal() {
  return animals[random.int(0, animals.length)];
}

/**
 * @Method: Returns a random adjective from the words list.
 * @returns {string}
 */
function getAdjective() {
  return adjectives[random.int(0, adjectives.length)];
}

/**
 * returns a random adjective + animal
 * if you input the same inputSeed, the
 * returned string will be the same each time
 *
 * @export
 * @param {Number} inputSeed random seed to fix the result ot
 * @returns string adjective-animal
 */
function getFriendlyHash(inputSeed) {
  if (inputSeed) {
    random.use(seedrandom(inputSeed));
  }
  return `${getAdjective()}-${getAnimal()}`.toLowerCase();
}

exports.handler = async function (event, context) {
  const { inputSeed } = event.queryStringParameters || '';
  const friendlyHash = getFriendlyHash(inputSeed);
  const date = new Date();
  const transactionId = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${friendlyHash}`
  return {
    statusCode: 200,
    body: {
      success: true,
      message: transactionId,
      cachebuster: date,
    }
  };
}

console.log(getFriendlyHash(123));