// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
*/
let workHours = 8;
export function dayRate(ratePerHour) {
  return ratePerHour * workHours;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
*/
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let billableDays = 22;
  const monthlyRate = dayRate(ratePerHour) * billableDays;
  const numMonths = Math.floor(numDays / billableDays);
  const discountedRate = monthlyRate * (1-discount);
  const remainder = numDays % billableDays;

  return Math.ceil((discountedRate * numMonths) + (dayRate(ratePerHour) * remainder));
}
