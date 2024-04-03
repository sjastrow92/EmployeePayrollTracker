// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employees = [];

  while (true) {
    let employee = {};
    employee.firstName = prompt("Please enter the employee's first name");
    employee.lastName = prompt("Please enter the employee's last name");
    // Ensure salary is entered as a number, default to 0 if not
    let salary = Number(prompt("Please enter the employee's salary"));
    if (isNaN(salary)) {
      salary = 0;
    }
    employee.salary = salary;

    employees.push(employee);

    const userContinue = prompt(
      "Do you want to continue? Type 'yes' to continue, or press 'cancel' to finish."
    );

    if (userContinue === null || userContinue.toLowerCase() !== "yes") {
      break;
    }
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const numOfEmployees = employeesArray.length;
  console.log(`number of employees ${numOfEmployees}`);

  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average salary: ${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const employeesArrayLength = employeesArray.length;
  // TODO: Select and display a random employee
  const getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
  };

  const randomIndex = getRandomInt(employeesArrayLength);

  console.log(
    `random employee ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
