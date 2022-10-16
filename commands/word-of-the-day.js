// https://github.com/kelektiv/node-cron#readme

const { SlashCommandBuilder } = require('discord.js');

const messageString = "Word of the day: "
const wordPair = ""

module.exports = {
	data: new SlashCommandBuilder()
		.setName('word')
		.setDescription(''),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};