// https://github.com/kelektiv/node-cron#readme

import { Client, CommandInteraction } from 'discord.js';
import { WordPair } from 'src/models/wordPair';
import { Command } from '../models/command';
import fs from 'fs';
import path from 'path';
import moment from 'moment';

const fileName = path.join(
  process.cwd(),
  'src',
  'resources',
  'korean-words-with-dates.csv'
);

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

function getCurrentWordPair(): WordPair | undefined {
  let fileContent = fs.readFileSync(fileName, 'utf8');
  for (const line of fileContent.split(/[\r\n]+/)) {
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

function stringToDate(dateStr: string): Date {
  return moment(dateStr, 'DD.MM.YYYY').toDate();
}

function isToday(dateValue: Date): boolean {
  const today = new Date();
  return (
    dateValue.getDate() === today.getDate() &&
    dateValue.getMonth() === today.getMonth() &&
    dateValue.getFullYear() === today.getFullYear()
  );
}
