const Park = function() {
  this.enclosure = new Array;
};

Park.prototype.getDinosaurCount = function () {
  return this.enclosure.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};



module.exports = Park;
