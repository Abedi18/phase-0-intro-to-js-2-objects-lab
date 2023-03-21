let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log(employee);
  
  // updateEmployeeWithKeyAndValue
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Main St");
  console.log(updatedEmployee); 
  console.log(employee); 
  
  // destructivelyUpdateEmployeeWithKeyAndValue
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Main St");
  console.log(destructivelyUpdatedEmployee); 
  console.log(employee); 
  
  // deleteFromEmployeeByKey
  const deletedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(deletedEmployee);
  console.log(employee); 
  
  // destructivelyDeleteFromEmployeeByKey
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructivelyDeletedEmployee); 
  console.log(employee); 
  
  
  
  