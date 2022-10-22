import fs from 'node:fs';
import path from 'node:path';
import { Client, Collection, GatewayIntentBits, Interaction } from "discord.js";
import Discord from "discord.js";
import { token } from '../config.json';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async (interaction: Interaction) => {
	if (!interaction.isChatInputCommand()) return;

});

client.login(token);