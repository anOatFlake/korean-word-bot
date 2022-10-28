import { CommandInteraction, Client } from 'discord.js';
import { Command } from '../models/command';
import { getAllLines } from '../util/fileUtil';
import { randNum } from '../util/randomUtil';

const fileName = 'facts.txt';

export const randomKoreanFact: Command = {
  name: 'random-korean-fact',
  description: 'Returns a random korean fact',
  run: async (client: Client, interaction: CommandInteraction) => {
    const lines = getAllLines(fileName);
    const content = lines[randNum(lines.length)];

    await interaction.followUp({
      content: content,
      ephemeral: true,
    });
  },
};
