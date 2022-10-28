import {
  ApplicationCommandOption,
  ApplicationCommandOptionType,
  Client,
  CommandInteraction,
} from 'discord.js';
import { translate } from '@vitalets/google-translate-api';
import { Command } from '../models/command';
import { basicTranslateEmbed } from '../embeds/basic-translate';

const option: ApplicationCommandOption = {
  type: ApplicationCommandOptionType.String,
  name: 'german-word',
  description: 'the word that should gets translated',
  required: true,
};

export const translateCommand: Command = {
  name: 'translate',
  description: 'translates the following korean word',
  options: [option],
  run: async (client: Client, interaction: CommandInteraction) => {
    //@ts-ignore
    const input = interaction.options.getString('german-word');
    const translatedInput = await translate(input, { from: 'de', to: 'ko' });
    await interaction.followUp({
      embeds: [
        basicTranslateEmbed.spliceFields(0, 2).addFields(
          {
            name: 'Koreanisch:',
            value: translatedInput.text,
            inline: true,
          },
          {
            name: 'Deutsch:',
            value: input,
            inline: true,
          }
        ),
      ],
      ephemeral: true,
    });
  },
};
