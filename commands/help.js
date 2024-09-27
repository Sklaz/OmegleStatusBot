const fs = require('fs');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  // Charger la configuration
  const config = JSON.parse(fs.readFileSync('config.json'));

  // Vérifier si l'utilisateur a l'autorisation
  if (!config.allowedUserIds.includes(message.author.id)) {
    return message.channel.send("You don't have the permission.");
  }

  message.delete();
  const embed = new Discord.MessageEmbed()
  .setAuthor({
    name: "OMEGLEAPPME",
    url: "https://omegleapp.me/",
  })
  .setTitle("Commands List")
  .setURL("https://omegleapp.me/")
  .setDescription("**__OmegleMe Team!__**\n```Préfix: os!```\n\n__Commands List__\n\n**ope:** All is operational ✅\n**alldown:** All service down ❌\n**down:** Only website is down ❌\n**downdiscord:** Only discord is down ❌\n**webbug:** Only website is bug ⚠️")
  .addFields(
    {
      name: "✅",
      value: "Operational",
      inline: true
    },
    {
      name: "⚠️",
      value: "Bug",
      inline: true
    },
    {
      name: "❌",
      value: "Non-functional",
      inline: true
    }
  )
  .setImage("https://imgur.com/EoT9Rnx.png")
  .setThumbnail("https://dan.onl/images/emptysong.jpg")
  .setColor("#0084ff")
  .setFooter({
    text: "OmegleMe | Status",
    iconURL: "https://imgur.com/nmXU5Wx.png",
  })
  .setTimestamp();

  message.channel.send(embed);
};
