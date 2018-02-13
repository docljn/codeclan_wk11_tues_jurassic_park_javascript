const Park = function() {
  this.enclosure = new Array;
};

Park.prototype.getDinosaurCount = function () {
  return this.enclosure.length;
};



module.exports = Park;
