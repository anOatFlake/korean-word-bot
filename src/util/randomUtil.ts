/**
 * generates an random integer between 0 and max-1
 * @param max number to mark the ceiling of the random number generator
 * @returns random number between 0 and max-1
 */
export function randNum(max: number): number {
  return Math.floor(Math.random() * Math.trunc(max));
}
