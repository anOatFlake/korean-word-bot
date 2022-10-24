import { CommandInteraction, Client } from "discord.js";
import { Command } from "../models/command";

export const randomKoreanFact: Command = {
    name: "random-korean-fact",
    description: "Returns a random korean fact",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "INSERT KOREAN FACT HERE";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}; 