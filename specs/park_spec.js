const Park = require("../park");
const assert = require("assert");

let park;

describe("Park", function () {

  beforeEach(function () {
    park = new Park ();
  });

  it("should start with an empty enclosure", function () {
    actual = park.getDinosaurCount();
    assert.strictEqual(actual, 0);
  });

});
