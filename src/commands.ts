import { Command } from "./models/command";
import { wordOfTheDay } from "./commands/word-of-the-day";
import { translate } from "./commands/translate";
import { Client, CommandInteraction } from "discord.js";
import { randomKoreanFact } from "./commands/random-korean-fact";

export const Commands: Command[] = [
    wordOfTheDay,
    translate,
    randomKoreanFact
]; 

export const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
}; 