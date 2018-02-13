const Park = require("../park");
const assert = require("assert");
const Dinosaur = require("../dinosaur");

let park;
let triceratops;

describe("Park", function () {

  beforeEach(function () {
    park = new Park ();
    triceratops = new Dinosaur ( "Triceratops", 10 ) ;
  });

  it("should start with an empty enclosure", function () {
    actual = park.getDinosaurCount();
    assert.strictEqual(actual, 0);
  });

  it("should be able to add a dinosaur", function () {
    park.addDinosaur(triceratops);
    actual = park.getDinosaurCount;
    assert.strictEqual(actual, 1);
  });

});
