// https://nodejsera.com/how-to-use-google-translator-with-nodejs.html

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('Übersetze ein koreanischen Wort nach Deutsch'),
	async excecute(interaction) { //TODO: add translation function here
        await interaction.reply("Insert Translation here");
    }
}