const assert = require("assert");
const Dinosaur = require("../dinosaur");

let triceratops;

describe("Dinosaur", function () {

  beforeEach(function () {
    triceratops = new Dinosaur ("Triceratops", 10) ;
  });

  it("should have a type", function () {
    const actual = triceratops.type;
    assert.strictEqual(actual, "Triceratops");
  });

});
