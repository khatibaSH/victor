const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = '-M'
const developers = ['480762263075291146'] //الاي دى حقك
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'p')) {
    client.user.setGame(argresult);
      message.channel.send(`BY **ZEUS ᵒᶰ#9999**   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`BY **ZEUS ᵒᶰ#9999**     ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`BY **ZEUS ᵒᶰ#9999**   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'o')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`BY **ZEUS ᵒᶰ#9999** `)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 
 
 
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
