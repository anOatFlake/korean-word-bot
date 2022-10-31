import { CommandInteraction, Client } from 'discord.js';
import { Command } from '../models/command';

export const infoAboutBot: Command = {
  name: 'info',
  description: 'Returns a explanation of all the commands',
  run: async (client: Client, interaction: CommandInteraction) => {
    let content =
      'Der Bot hat folgende Befehle: \n\n**random-korean-fact**: Gibt dir einen zufälligen Fact über Korea aus. \n**translate**: Übersetzt dir ein deutsches Wort ins Koreanische. \n**word-of-the-day**: Gibt dir einen zufälligen Fact über Korea aus.\n';

    await interaction.followUp({
      content: content,
      ephemeral: true,
    });
  },
};
