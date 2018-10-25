const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'


client.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("502920545935949824").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},4000);
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.BOT_TOKEN);
