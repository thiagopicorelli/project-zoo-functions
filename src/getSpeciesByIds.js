const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((speciesList, id) => {
    const specieFound = data.species.find((specie) => specie.id === id);
    if (specieFound !== undefined) {
      speciesList.push(specieFound);
    }
    return speciesList;
  }, []);
}

module.exports = getSpeciesByIds;
