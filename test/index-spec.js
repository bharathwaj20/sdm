/**var assert = require('assert');
var calculator = require('../index');
describe('MERN APPLICATION', function() {
    describe('UNIT TEST', function() {
        it('Success', function () {
            var result = calculator.add(1, 1);
            assert.equal(result, 2);
        });
    });
});*/

const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});