/**
 * Formats a price value into a string with appropriate formatting and optional placeholder.
 *
 * @param {number | undefined} price - The price value to format.
 * @param {Object} [options] - Optional configuration object.
 * @param {string} [options.noValuePlaceholder] - Placeholder text to show when price is undefined.
 * @param {boolean} [options.showNumber] - Flag to show 0 if price is undefined.
 * @returns {string | number} The formatted price string or a fallback value.
 */
export function formatPrice(
  price: number | undefined,
  options?: { noValuePlaceholder?: string; showNumber?: boolean }
): string | number {
  if (!price)
    return options?.showNumber ? 0 + " t" : options?.noValuePlaceholder || "--";

  return price.toLocaleString("en-US") + " t";
}

/**
 * Calculates the cashback for a given price based on a specific rate.
 *
 * @param {number} price - The price value for which to calculate cashback.
 * @returns {number} The calculated cashback amount.
 */
export function cashBackCalculator(price: number): number {
  if (!price) return 0;

  // For every 100,000 Tomans, returns 10,000 Tomans
  const x = Math.floor(price / 100_000);
  return x < 0 ? 0 : x * 10_000;
}

/**
 * Calculates the sum of numeric values for a given key in an array of objects.
 *
 * @param {Array<Record<string, number>>} values - An array of objects containing numeric properties.
 * @param {string} key - The key corresponding to the numeric property to sum up.
 * @returns {number} The total sum of the specified numeric property from all objects.
 */
export function calculateSum(
  values: Array<Record<string, number | string>>,
  key: string
): number {
  return values.reduce((acc, curr) => acc + +curr[key], 0);
}
