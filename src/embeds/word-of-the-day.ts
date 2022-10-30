import { EmbedBuilder } from 'discord.js';

export const wordOfTheDay = new EmbedBuilder()
  .setColor(0x0099ff)
  .setThumbnail(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png'
  )
  .setTitle('Koreanisches Wort des Tages')
  .setDescription(
    'Lerne jeden Tag ein neues koreanisches Wort! [(Übersetzung via Google Translate)](https://translate.google.com/?sl=de&tl=ko&op=translate)'
  )
  .setTimestamp()
  .setFooter({
    text: 'Brougth to you by your local programmer',
    iconURL: 'https://avatars.githubusercontent.com/u/68395900?s=96&v=4',
  });
