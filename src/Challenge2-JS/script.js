
const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
 
const taxAsDecimal = parseFloat(tax ) / parseFloat ('100')
const startingAfterTax = salary * ('1' - taxAsDecimal);
const balance = startingAfterTax - transport - food - rent;

if (hourOfDay && minuteOfDay !== undefined && hourOfDay === 00 && minuteOfDay === 00) {
	
}
	
console.log( 'R' , balance.toFixed(2));
/**
 * In the if statement 'hourOfDay' and 'minuteOfDay' should be checked for undefined instead of null
 * starting is not defined,should be replaced with 'startingAfterTax'
 * balance is missplled
 * changed balance.toFixed(3) to balance.toFixed(2) for 2 decimal places
 * Removed variables(taxAsDecimal , startingAfterTax , & balance inside the if statement)
 * used parseFloat function to converttax string to decimal value
 * Prefix 'R' is added
 */