// https://github.com/kelektiv/node-cron#readme

import { Client, CommandInteraction } from 'discord.js';
import { WordPair } from 'src/models/wordPair';
import { Command } from '../models/command';
import { getAllLines } from 'src/util/fileUtil';
import { isToday, stringToDate } from 'src/util/dateUtil';

const fileName = 'korean-words-with-dates.csv';

export const wordOfTheDay: Command = {
  name: 'word-of-the-day',
  description: 'Returns the korean word of the day',
  //type: "CHAT_INPUT",
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Hello there!';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

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
