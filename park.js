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

Park.prototype.getDinosaursByMinimumAnnualOffspringCount = function (minimumNumber) {
  let dinosaur_collection = [];
  for (dinosaur of this.enclosure) {
    if (dinosaur.annual_offspring >= minimumNumber) {
      dinosaur_collection.push(dinosaur);
    }
  }
  return dinosaur_collection;
};

Park.prototype.breedingResult = function (dinosaur) {
  return 1 + dinosaur.annual_offspring;
};

Park.prototype.calculateDinosaurs = function (numberOfYears) {
  let dinosaur_count = 0;
  for (dinosaur of this.enclosure) {
    dinosaur_count += Math.pow(this.breedingResult(dinosaur), numberOfYears);
    // for each year, the number of dinosaurs is increased by the number of dinosaurs * offspring, repeating
  }
  return dinosaur_count;
};



module.exports = Park;
