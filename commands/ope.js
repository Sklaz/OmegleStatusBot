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

    // Changer le statut du bot
    client.user.setPresence({
      activity: {
        name: "All operational",
        type: "WATCHING"
      },
      status: "online" // "online", "idle", "dnd", or "invisible"
    });

  const embed = new Discord.MessageEmbed()
  .setAuthor("OMEGLEAPPME", "https://imgur.com/nmXU5Wx.png", "https://omegleapp.me/")
  .setTitle("WEBSITE NO-PROBLEM")
  .setURL("https://omegleapp.me/")
  .setDescription("**Dear users,**\n\nWe are excited to announce that our website is fully operational! All features and services are  up and running smoothly.\n\nIf you have any questions or need assistance, feel free to reach out.\n\nEnjoy your experience!\n\nThank you for your support !\n\n**__From OmegleMe Team!__**\n\n```\nDISCORD: ✅\nSUPPORT: ✅\nWEBSITE: ✅\n```")
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
    },
  )
  .setImage("https://imgur.com/EoT9Rnx.png")
  .setThumbnail("https://imgur.com/qTS6afE.png")
  .setColor("#00ff11")
  .setFooter("OmegleMe | Status", "https://imgur.com/nmXU5Wx.png")
  .setTimestamp();

  message.channel.send(embed);
};
