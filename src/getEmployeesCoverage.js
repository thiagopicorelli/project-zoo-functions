const data = require('../data/zoo_data');

function getEmployeeInformation(employeeObj) {
  const residents = employeeObj.responsibleFor.map((res) =>
    data.species.find((specie) => specie.id === res));

  return {
    id: employeeObj.id,
    fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
    species: residents.map((res) => res.name),
    locations: residents.map((res) => res.location) };
}

function getEmployeesCoverage(employee) {
  if (employee === undefined) {
    return data.employees.map((emp) => getEmployeeInformation(emp));
  }

  let employeeObj;
  if (Object.prototype.hasOwnProperty.call(employee, 'name')) {
    employeeObj = data.employees.find((emp) => emp.firstName === employee.name
                                            || emp.lastName === employee.name);
  } else {
    employeeObj = data.employees.find((emp) => emp.id === employee.id);
  }

  if (employeeObj === undefined) {
    throw new Error('Informações inválidas');
  }
  return getEmployeeInformation(employeeObj);
}

module.exports = getEmployeesCoverage;
