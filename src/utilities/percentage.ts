// Converts a unit less $number (usually a decimal between 0 and 1) to a percentage.
const percentage = ($number: number): string => {
  return `${($number * 100).toFixed(4)}%`;
};

export default percentage;
