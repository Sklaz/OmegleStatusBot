const fs = require('fs');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  // Charger la configuration
  const config = JSON.parse(fs.readFileSync('config.json'));

  // Vérifier si l'utilisateur a l'autorisation
  if (!config.allowedUserIds.includes(message.author.id)) {
    return message.channel.send("Désolé, vous n'avez pas la permission d'utiliser cette commande.");
  }

  message.delete();
  const embed = new Discord.MessageEmbed()
    .setTitle("Bonjour " + message.author.username)
    .setDescription("Mon ping est de : " + client.ws.ping + "ms")
    .setColor("#33a8ff")
    .setFooter("OmegleMe | Status");
  
  message.channel.send(embed);
};
