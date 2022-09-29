const data = require('../data/zoo_data');

function getDaySchedule(day) {
  const obj = {};
  obj[day] = {};
  const hours = data.hours[day];
  if (day === 'Monday') {
    obj[day].officeHour = 'CLOSED';
  } else {
    obj[day].officeHour = `Open from ${hours.open}am until ${hours.close}pm`;
  }
  obj[day].exhibition = [];
  const speciesInDay = data.species.filter((specie) => specie.availability.includes(day));
  if (speciesInDay.length === 0) {
    obj[day].exhibition = 'The zoo will be closed!';
  } else {
    obj[day].exhibition = speciesInDay.map((specie) => specie.name);
  }
  return obj;
}

function getSchedule(scheduleTarget) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (daysOfWeek.includes(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }

  const specieObj = data.species.find((speci) => speci.name === scheduleTarget);

  if (specieObj === undefined) {
    const days = {};
    daysOfWeek.forEach((day) => {
      Object.assign(days, getDaySchedule(day));
    });
    return days;
  }

  return specieObj.availability;
}

module.exports = getSchedule;
