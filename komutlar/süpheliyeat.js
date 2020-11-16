const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
      if(!message.member.roles.has("754641668527095848")) 
  return message.channel.send(new Discord.RichEmbed()
  .setDescription("Komutu kullanmak için yetkin yok.")
  .setColor("RANDOM"))
  
    if (message.channel.id !== "753532353112178749") return
  let user = message.mentions.members.first();
  if (!user) return message.reply("Şüpheliye atacağın üyeyi etiketlemelisin.")
  
const embed = new Discord.RichEmbed()
.setDescription(`${user} Şüpheli hesap olarak kaydedildi. \n\n Güvenli olarak kaydetmek için: \`${ayarlar.prefix}g @kişi\``)
message.channel.send(embed)
  user.addRole("754022574907850773").then(ys => ys.removeRole("754022574064926731"))
    db.add(`süpheli.${message.author.id}`, 1)
    client.channels.get('753532353112178749').send(`${user}, Şüpheli hesap olarak kaydedildi. Yetkililere ulaşmalısın! ⚡️ `)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "s",
  description: "",
  usage: "taslak"
}; 