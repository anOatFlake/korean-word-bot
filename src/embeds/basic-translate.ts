import { EmbedBuilder } from '@discordjs/builders';

export let basicTranslateEmbed = new EmbedBuilder()
  .setThumbnail(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/240px-Google_Translate_logo.svg.png'
  )
  .setTitle('Übersetzung via GoogleTranslate')
  .setURL('https://translate.google.com/?sl=de&tl=ko&op=translate')
  .setDescription('keine Grarantie für die Übersetzung (blame google)')
  .setTimestamp()
  .setFooter({
    text: 'Brougth to you by your local programmer',
    iconURL: 'https://avatars.githubusercontent.com/u/68395900?s=96&v=4',
  });
