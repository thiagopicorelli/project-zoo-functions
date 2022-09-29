const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieObj = data.species.find((specie) => specie.name === animal);
  const youngerAnimal = specieObj.residents.find((resident) => resident.age < age);

  if (youngerAnimal === undefined) {
    return true;
  }
  return false;
}

module.exports = getAnimalsOlderThan;
