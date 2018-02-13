const Park = function() {
  this.enclosure = new Array;
};

Park.prototype.getDinosaurCount = function () {
  return this.enclosure.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeAllOfType = function (type) {
  for (dinosaur of this.enclosure) {
    if (dinosaur.type.toLowerCase() == type.toLowerCase()) {
      const index_to_remove = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index_to_remove, 1);
    }
  }
};



module.exports = Park;
