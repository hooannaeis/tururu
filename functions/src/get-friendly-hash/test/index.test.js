const mocha = require('mocha');
const chai = require('chai');
const test = require('firebase-functions-test')();

// At the top of test/index.test.js
const myFunctions = require('../src/index.js'); // relative path to functions code;

describe('test friendly-hash function', () => {
  it('inputSeed gives status 200', () => {
    // A fake request object
    const req = { query: { inputSeed: 'values' } };
    // A fake response object, with stubbed set, json, and status functions
    res = {
      set: function() {},
      json: function() {},
      status: function(responseStatus) {
        chai.assert.equal(responseStatus, 200);
        // This next line makes it chainable
        return this;
      },
    };

    myFunctions.main(req, res);
  });
  it('inputSeed produces same hash each time', () => {
    // A fake request object
    const req = { query: { inputSeed: 'values' } };
    // A fake response object, with stubbed set, json, and status functions
    let previousHash;

    res = {
      set: function() {},
      json: function(outputJson) {
        if (!previousHash) {
          previousHash = outputJson.message;
        }
        chai.assert.equal(outputJson.message, previousHash);
      },
      status: function(responseStatus) {
        // This next line makes it chainable
        return this;
      },
    };

    myFunctions.main(req, res);
  });
});
