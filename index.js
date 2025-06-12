// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  // Declare a variable in global scope
  bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
  // Overwrite the global variable
  bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'alice';
function changeLeastFavoriteCustomer() {
  // Attempt to change the constant
  leastFavoriteCustomer = 'charlie'; 
}