const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.roles.has("754641668527095848")) 
  return message.channel.send(new Discord.RichEmbed()
  .setDescription("Komutu kullanmak için yetkin yok.")
  .setColor("RANDOM"))
  let member = message.mentions.members.first();
  let isim = args[1]
  let yş = args[2]
  if (!member) return message.channel.send("Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send("Bir İsim Yazmalısın!");
    if (!yş) return message.channel.send("Bir Yaş Yazmalısın!");
  member.setNickname(`𒄬 ${isim} | ${yş}`);
  const embed = new Discord.RichEmbed()
.addField(`İsmi Değiştirilen Kullanıcı`,`${member}`)
  .addField(`İsmi Değiştiren Yetkili`,`${message.author}`)
  .addField(`Yapılan İsim`,`${isim}`)
    .setFooter(`Kullanan: ${message.author.username}`)
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["isim","i"],
  permLevel: 0
};
exports.help = {
  name: "isim",
  description: "Birinin ismini değiştirir.",
  usage: "isim <yeni nick>"
};