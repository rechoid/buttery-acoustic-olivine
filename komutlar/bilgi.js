
const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author
  let erkek = db.fetch(`erkek.${user.id}`)
    let kız = db.fetch(`kız.${user.id}`)
let toplam = kız+erkek

const embed = new Discord.RichEmbed()
.setDescription(`Kayıt Bilgileri! \n\n Erkek Kayıt Sayısı **${erkek || 0}** \n\n Kız Kayıt Sayısı!  **${kız || 0}** \n\n Toplam Kayıt Sayısı **${toplam || 0}**`)
message.channel.send(embed)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "bilgi",
  description: "",
  usage: "taslak"
}; 