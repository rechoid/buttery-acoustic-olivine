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
  if (!user) return message.reply("Kayıt edeceğin üyeyi etiketlemelisin.")
  
const embed = new Discord.RichEmbed()
.setDescription(`${user} Erkek Olarak Kaydedildi. \n\n İsmini Değiştirmek İçin \`${ayarlar.prefix}i @kişi isim\``)
message.channel.send(embed)
  user.addRole("752224828311863426").then(y => y.addRole("752224829326753793")).then(ys => ys.removeRole("754022574064926731"))
    db.add(`kız.${message.author.id}`, 1)
    client.channels.get('754098145952137266').send(`${user}, Aramıza katıldı. Hoşgeldin! :heart:`)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "e",
  description: "",
  usage: "taslak"
}; 