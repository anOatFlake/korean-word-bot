import { Client, Interaction, TextChannel } from 'discord.js';
import { Commands, handleSlashCommand } from './commands';
import { wordOfTheDay } from './embeds/word-of-the-day';
import { getCurrentWordPair } from './util/wordPairUtil';
import dotenv from 'dotenv';
import cron from 'cron';

dotenv.config();

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
  new cron.CronJob(
    process.env.CRON_EXPRESSION ?? '', //seconds, minutes, hours, day of month, months, day of week
    function () {
      const channel = client.channels.cache.get(
        process.env.CHANNEL_ID ?? ''
      ) as TextChannel;
      channel?.send({
        embeds: [
          wordOfTheDay.spliceFields(0, 2).addFields(
            {
              name: 'Koreanisch:',
              value:
                getCurrentWordPair(process.env.WORDPAIR_FILENAME ?? '')
                  ?.korean ?? 'value not defined',
              inline: true,
            },
            {
              name: 'Deutsch:',
              value:
                getCurrentWordPair(process.env.WORDPAIR_FILENAME ?? '')
                  ?.german ?? 'value not defined',
              inline: true,
            }
          ),
        ],
      });
    },
    null,
    true,
    process.env.TIMEZONE
  );
  console.log('Registered cron job!');
});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    await handleSlashCommand(client, interaction);
  }
});

client.login(process.env.TOKEN);
