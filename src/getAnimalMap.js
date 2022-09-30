const data = require('../data/zoo_data');

function getResidents(residents, sex) {
  if (sex !== undefined) {
    return residents.filter((res) => res.sex === sex);
  }
  return residents;
}

function getResidentNames(specie, residents, includeNames, sorted) {
  if (includeNames) {
    let mapList = residents.map((res) => res.name);
    if (sorted) {
      mapList = mapList.sort();
    }
    return { [specie.name]: mapList };
  }
  return specie.name;
}

function getAnimalMap(options) {
  const mapObj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  const { includeNames, sorted, sex } = options !== undefined ? options : [false, false, undefined];
  data.species.forEach((specie) => {
    const residents = getResidents(specie.residents, sex);
    mapObj[specie.location].push(getResidentNames(specie, residents, includeNames, sorted));
  });
  return mapObj;
}

module.exports = getAnimalMap;
