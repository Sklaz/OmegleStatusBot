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
      name: "website down",
      type: "WATCHING"
    },
    status: "dnd" // "online", "idle", "dnd", or "invisible"
  });

  const embed = new Discord.MessageEmbed()
    .setAuthor("OMEGLEAPPME", "https://imgur.com/nmXU5Wx.png", "https://omegleapp.me/")
    .setTitle("WEBSITE DOWN")
    .setURL("https://omegleapp.me/")
    .setDescription("**Dear users,**\n\nWe are currently experiencing technical difficulties, and our website is temporarily down.\n\nOur team is actively working to resolve the issue and restore full functionality as soon as possible. \n\nWe appreciate your patience and understanding during this time. Please check back later for updates. \n\nThank you for your support !\n\n**__From OmegleMe Team!__**\n\n```\nDISCORD: ✅\nSUPPORT: ✅\nWEBSITE: ❌\n```")
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
    .setThumbnail("https://imgur.com/B8JiMtb.png")
    .setColor("#ff0000")
    .setFooter("OmegleMe | Status", "https://imgur.com/nmXU5Wx.png")
    .setTimestamp();

  message.channel.send(embed);
};
