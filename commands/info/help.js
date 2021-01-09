const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async (client, message, args) => {
    message.delete();

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} Commands!`)
      .setDescription(
        `Use ${Prefix}Help <Command Name> For More Command Information!` +
          "\n\n**Fun**\n`Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Choose, Hack, Randomnumber`" +
          "\n\n" +
          "**Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" +
          "\n\n" +
          "**Information**\n`Help, Covid, Weather, Userinfo, Serverinfo, Ping`" +
          "\n\n" +
          "**Music Commands** \n`M$help for Music Commands`" +
          "\n\n" +
          "**Giveaway Commands** \n`G$help for Giveaway Commands`" +
          "\n\n" +
          "**Economy Commands** \n`E$help for Economy Commands`" +
          "\n\n" +
          "**Reaction roles** \n`r.help for reaction roles commands`" +
          "\n\n" +
          "**Welcome Setup** \n`Coming soon!`"
      )
      .setFooter(
        `To get info of each command you can do $help [command] | Handle by Cööl dude 69`
      )
      .setTimestamp();

    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
