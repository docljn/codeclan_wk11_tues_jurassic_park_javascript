const Park = require("../park");
const assert = require("assert");
const Dinosaur = require("../dinosaur");

let park;
let park_full;
let triceratops;
let velociraptor;
let velociraptor_2;
let tRex;
let tRex_2;


describe("Park", function () {

  beforeEach(function () {
    park = new Park ();
    triceratops = new Dinosaur ("Triceratops", 10) ;
    velociraptor = new Dinosaur ("Velociraptor", 20) ;
    tRex = new Dinosaur ("TRex", 1) ;
    velociraptor_2 = new Dinosaur ("Velociraptor", 20) ;
    tRex_2 = new Dinosaur ("TRex", 1) ;
    park_full = new Park ();
    park_full.addDinosaur(triceratops);
    park_full.addDinosaur(velociraptor);
    park_full.addDinosaur(tRex);
    park_full.addDinosaur(velociraptor_2);
    park_full.addDinosaur(tRex_2);
  });

  it("should start with an empty enclosure", function () {
    actual = park.getDinosaurCount();
    assert.strictEqual(actual, 0);
  });

  it("should be able to add a dinosaur", function () {
    park.addDinosaur(triceratops);
    actual = park.getDinosaurCount();
    assert.strictEqual(actual, 1);
  });

  it("should be able to remove all dinosaurs of a particular type", function () {
    park_full.removeAllOfType("tRex");
    actual = park_full.getDinosaurCount();
    assert.strictEqual(actual, 3);
  });

  it("should be able to return a list of all the dinosaurs with an offspring count of more than 2", function () {
    expected = [triceratops, velociraptor, velociraptor_2];
    actual = park_full.getDinosaursByMinimumAnnualOffspringCount(3);
    assert.deepStrictEqual(actual, expected);
  });

});
