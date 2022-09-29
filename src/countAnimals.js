const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalCount = {};
    data.species.forEach((specie) => {
      animalCount[specie.name] = specie.residents.length;
    });
    return animalCount;
  }
  if (Object.prototype.hasOwnProperty.call(animal, 'specie')) {
    const { residents } = data.species.find((specie) => specie.name === animal.specie);
    if (Object.prototype.hasOwnProperty.call(animal, 'sex')) {
      const residentSexFilter = (resident) => resident.sex === animal.sex;
      return residents.filter(residentSexFilter).length;
    }
    return residents.length;
  }
}

module.exports = countAnimals;
