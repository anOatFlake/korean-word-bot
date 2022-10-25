// https://nodejsera.com/how-to-use-google-translator-with-nodejs.html

import { Client, CommandInteraction } from 'discord.js';
import { Command } from '../models/command';

export const translate: Command = {
  name: 'translate',
  description: 'translates the following korean word',
  //type: "CHAT_INPUT",
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'INSERT KOREAN TRANSLATION WORD HERE';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
