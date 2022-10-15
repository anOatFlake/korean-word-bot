// https://github.com/kelektiv/node-cron#readme

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('word')
        .setDescription('test'),
	async excecute(interaction) {
        await interaction.reply('NEW WORD');
    }
}