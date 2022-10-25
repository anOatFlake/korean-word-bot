import fs from 'fs';
import path from 'path';

/**
 * gets all lines from the file
 * @param fileName name of the resource file
 * @returns string Arr with all lines in the file
 */
export function getAllLines(fileName: string): string[] {
  let fileContent = fs.readFileSync(getResourceFilePath(fileName), 'utf8');
  let lines: string[] = [];
  for (const line of fileContent.split(/[\r\n]+/)) {
    lines.push(line);
  }
  return lines;
}

/**
 * compines the name of the resource file with the resource directory
 * @param fileName name of the resource file
 * @returns path to the resource file
 */
export function getResourceFilePath(fileName: string): string {
  return path.join(process.cwd(), 'src', 'resources', fileName);
}
