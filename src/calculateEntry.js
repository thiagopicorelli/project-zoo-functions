const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      countObj.child += 1;
    } else if (entrant.age >= 50) {
      countObj.senior += 1;
    } else {
      countObj.adult += 1;
    }
  });
  return countObj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const entrantsCount = countEntrants(entrants);

  let val = 0;
  for (const age in entrantsCount) {
    val += data.prices[age] * entrantsCount[age];
  }
  return val;

}

module.exports = { calculateEntry, countEntrants };
