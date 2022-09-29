const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesList = [];
  for (let i = 0; i < ids.length; i += 1) {
    const specieFound = data.species.find((specie) => specie.id === ids[i]);
    if (specieFound !== undefined) {
      speciesList.push(specieFound);
    }
  }
  return speciesList;
}

module.exports = getSpeciesByIds;
