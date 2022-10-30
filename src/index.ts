import { Client, Interaction, TextChannel } from 'discord.js';
import { Commands, handleSlashCommand } from './commands';
import {
  token,
  channelId,
  timezone,
  cronExpression,
  wordPairFileName,
} from '../config.json';
import { wordOfTheDay } from './embeds/word-of-the-day';
import { getCurrentWordPair } from './util/wordPairUtil';
var CronJob = require('cron').CronJob;

console.log('Bot is starting...');

const client = new Client({
  intents: ['Guilds'],
});

client.on('ready', async () => {
  if (!client.user || !client.application) {
    return;
  }
  await client.application.commands.set(Commands);

  console.log(`${client.user.username} is online`);
});

client.once('ready', async () => {
  console.log('Try to register cron job...');
  new CronJob(
    cronExpression, //seconds, minutes, hours, day of month, months, day of week
    function () {
      const channel = client.channels.cache.get(channelId) as TextChannel;
      channel?.send({
        embeds: [
          wordOfTheDay.spliceFields(0, 2).addFields(
            {
              name: 'Koreanisch:',
              value:
                getCurrentWordPair(wordPairFileName)?.korean ??
                'value not defined',
              inline: true,
            },
            {
              name: 'Deutsch:',
              value:
                getCurrentWordPair(wordPairFileName)?.german ??
                'value not defined',
              inline: true,
            }
          ),
        ],
      });
    },
    null,
    true,
    timezone
  );
  console.log('Registered cron job!');
});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    await handleSlashCommand(client, interaction);
  }
});

client.login(token);
