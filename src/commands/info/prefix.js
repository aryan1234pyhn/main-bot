const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class PrefixCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'prefix',
      aliases: ['pre'],
      usage: 'prefix',
      description: 'Fetches Bot\'s current prefix.',
      type: client.types.INFO
    });
  }
  run(message) {
    const prefix = message.client.db.settings.selectPrefix.pluck().get(message.guild.id); // Get prefix
    const embed = new MessageEmbed()
      .setTitle('Bot\'s Prefix')
      .setThumbnail('https://imgs.search.brave.com/pIeKnGi_4DEgYzx45jVSKrVaJYlYz8qCMScOI_mmbQs/rs:fit:1200:423:1/g:ce/aHR0cHM6Ly91dGls/aXR5Z2Z4LndlZWJs/eS5jb20vdXBsb2Fk/cy81LzIvOS82LzUy/OTY2NTA1L3M5NDM3/MDgxMDczNDkwNzAw/MTdfcDNfaTJfdzI1/NjAucG5n')
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Example', `\`${prefix}ping\``, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
