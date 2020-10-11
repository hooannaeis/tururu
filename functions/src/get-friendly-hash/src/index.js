const random = require('random');
const seedrandom = require('seedrandom');
const { adjectives, animals } = require('./words');

/**
 * @Method: Returns a random animal from the words list.
 * @returns {string}
 */
function animal() {
  return animals[random.int(0, animals.length)];
}

/**
 * @Method: Returns a random adjective from the words list.
 * @returns {string}
 */
function adjective() {
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
  return `${adjective()}-${animal()}`.toLowerCase();
}

const main = async (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '60');
    res.status(204).send('');
  }

  const { inputSeed } = req.query || '';
  const friendlyHash = getFriendlyHash(inputSeed);
  return res.status(200).json({
    success: true,
    message: friendlyHash,
    cachebuster: new Date(),
  });
};

module.exports = {
  getFriendlyHash,
  main,
};
