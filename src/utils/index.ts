/**
 * Module define utility formulas.
 */

/**
 * Function perform APR to APY convertion.
 * @param {number} apr - Normalized(divided by 100) annual percentage rate per year.
 * @param {number} days - Total days amount.
 * @param {number} dailyCompoundRate - Daily reinvest rate.
 * @returns {number} Normalized APY(annual percentage yield).
 */
const aprToApy = (
  apr: number,
  days: number,
  dailyCompoundRate: number
): number => {
  if (dailyCompoundRate <= 0) {
    return apr;
  }

  const compounds = days * dailyCompoundRate;

  return (1 + apr / compounds) ** compounds - 1;
};

/**
 * Function perform APY to APR convertion.
 * @param {number} apy - Normalized(divided by 100) annual percentage yield per year.
 * @param {number} days - Total days amount.
 * @param {number} dailyCompoundRate - Daily reinvest rate.
 * @returns {number} Normalized APR(annual percentage rate).
 */
const apyToApr = (
  apy: number,
  days: number,
  dailyCompoundRate: number
): number => {
  if (dailyCompoundRate <= 0) {
    return apy;
  }

  const compounds = days * dailyCompoundRate;

  return ((1 + apy) ** (1 / compounds) - 1) * compounds;
};

export { aprToApy, apyToApr };
