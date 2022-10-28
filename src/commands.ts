import { Command } from './models/command';
import { infoAboutBot } from './commands/info';
import { translateCommand } from './commands/translate';
import { Client, CommandInteraction } from 'discord.js';
import { randomKoreanFact } from './commands/random-korean-fact';

export const Commands: Command[] = [
  infoAboutBot,
  translateCommand,
  randomKoreanFact,
];

export const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const slashCommand = Commands.find((c) => c.name === interaction.commandName);
  if (!slashCommand) {
    interaction.followUp({ content: 'An error has occurred' });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(client, interaction);
};
