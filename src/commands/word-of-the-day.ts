// https://github.com/kelektiv/node-cron#readme

import { Interaction, Message, SlashCommandBuilder } from 'discord.js';

const messageString = "Word of the day: "
const wordPair = ""

module.exports = {
	data: new SlashCommandBuilder()
		.setName('word')
		.setDescription(''),
	async execute(message: Message) {
		return message.reply("TESTETSTWT");
	},
};