import { EmbedBuilder } from 'discord.js';
import { WordPair } from '../models/wordPair';
import { getAllLines } from '../util/fileUtil';
import { isToday, stringToDate } from '../util/dateUtil';

const fileName = 'korean-words-with-dates.csv';

export const wordOfTheDay = new EmbedBuilder()
  .setColor(0x0099ff)
  .setThumbnail(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png'
  )
  .setTitle('Koreanisches Wort des Tages')
  .setDescription(
    'Lerne jeden Tag ein neues koreanisches Wort! [(Übersetzung via Google Translate)](https://translate.google.com/?sl=de&tl=ko&op=translate)'
  )
  .addFields(
    {
      name: 'Koreanisch:',
      value: getCurrentWordPair(fileName)!.korean,
      inline: true,
    },
    {
      name: 'Deutsch:',
      value: getCurrentWordPair(fileName)!.german,
      inline: true,
    }
  )
  .setTimestamp()
  .setFooter({
    text: 'Brougth to you by your local programmer',
    iconURL: 'https://avatars.githubusercontent.com/u/68395900?s=96&v=4',
  });

/**
 * gets the wordPair for the current date
 * @param fileName name of the resource file
 * @returns wordPair with todays date
 */
function getCurrentWordPair(fileName: string): WordPair | undefined {
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
