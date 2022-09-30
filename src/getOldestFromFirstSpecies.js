const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employ) => employ.id === id).responsibleFor[0];
  const specieObj = data.species.find((specie) => specie.id === specieId);
  const oldest = specieObj.residents.sort((a, b) => b.age - a.age)[0];

  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
