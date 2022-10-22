// https://nodejsera.com/how-to-use-google-translator-with-nodejs.html

import { SlashCommandBuilder, Message} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('Übersetze ein koreanischen Wort nach Deutsch'),
	async excecute(interaction: Message) { //TODO: add translation function here
        await interaction.reply("Insert Translation here");
    }
}