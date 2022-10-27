import { Client, Interaction, TextChannel } from 'discord.js';
import { Commands, handleSlashCommand } from './commands';
import { token, channelId, timezone } from '../config.json';
var CronJob = require('cron').CronJob;

console.log('Bot is starting...');

const client = new Client({
  intents: [],
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
  var job = new CronJob(
    '0 * * * * *', //seconds, minutes, hours, day of month, months, day of week
    function () {
      console.log('You will see this message ?');
      //TODO: channel undefined :(
      const channel = client.channels.cache.get(channelId) as TextChannel;
      console.log(channel);
      channel?.send('message');
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
