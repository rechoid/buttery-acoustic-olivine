const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});




client.on("guildMemberAdd", async member => {
  let member2 = member.user
   // let author = "₣│Ƨƛ│JaimiTR#8142"
    let zaman = new Date().getTime() - member2.createdAt.getTime()
    var cfxzaman = [];
if(zaman < 604800000) member.addRole("754022574907850773")

if(zaman > 604800000) member.addRole("754022574064926731")
})



 

client.on('guildMemberAdd', async member => {
  let member2 = member.user
   // let author = "₣│Ƨƛ│JaimiTR#8142"
    let zaman = new Date().getTime() - member2.createdAt.getTime()
    var cfxzaman = [];
if(zaman < 604800000) {
  cfxzaman = `<a:onaysiz:754619840614105180> Şüpheli`
} else {
  cfxzaman = `<a:onay:752086532617142405> Güvenli`
}
  const katilim = moment.utc(member.guild.members.get(member.id).user.createdAt).format('`YYYY [Yılında] MMMM [Ayında] dddd [Gününde] (DD/MM/YYYY)`')
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)


  client.channels.get("753532353112178749").send(`<a:guvenli:752086516523728927> Hoşgeldin ${member} Seninle Birlikte  **${member.guild.memberCount}** Kişiyiz.  \n\n<a:guvenli:752086516523728927> Müsait Olduğunuzda Teyit Kanallarına Gelerek Teyit Verebilirsiniz! \n\n<a:guvenli:752086516523728927> Tagımızı Alarak Bize Destek Olabilirsin. \`𒄬\` \n\n<a:guvenli:752086516523728927> Hesabının Açılış Tarihi ${katilim} \n\n<a:guvenli:752086516523728927> Bu Hesap  **${cfxzaman}** Gözüküyor.`, new Discord.Attachment('https://cdn.discordapp.com/attachments/753532353112178749/755895787581472808/b28433c392959f923ff0d736cd89dcbd.gif'))
})

   client.on("message", async message => {

let prefix = ayarlar.prefix
if(message.content.toLowerCase() === `${prefix}fake-çık`) {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  message.channel.send("Fake çıktın.")
  }
});


client.on("message", async message => {

let prefix = ayarlar.prefix
if(message.content.toLowerCase() === `${prefix}fake`) {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  message.channel.send("Fake girdin")
  }
});     

client.login(ayarlar.token);

