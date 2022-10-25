// https://github.com/kelektiv/node-cron#readme

import { Client, CommandInteraction } from 'discord.js'
import { Command } from '../models/command'

const messageString = 'Word of the day: '
const wordPair = ''

export const wordOfTheDay: Command = {
    name: 'word-of-the-day',
    description: 'Returns the korean word of the day',
    //type: "CHAT_INPUT",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = 'Hello there!'

        await interaction.followUp({
            ephemeral: true,
            content,
        })
    },
}
