import { WordPair } from '../models/wordPair';
import { isToday, stringToDate } from './dateUtil';
import { getAllLines } from './fileUtil';

/**
 * gets the wordPair for the current date
 * @param fileName name of the resource file
 * @returns wordPair with todays date
 */
export function getCurrentWordPair(fileName: string): WordPair | undefined {
  let fileLines = getAllLines(fileName);
  for (const line of fileLines) {
    const values = line.split(',');
    const wordPair: WordPair = {
      date: stringToDate(values[0]),
      korean: values[1],
      german: values[2],
    };
    if (isToday(wordPair.date)) {
      return wordPair;
    }
  }
  return undefined;
}
