const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '748054494058774549') {
    switch (name) {
      case '<:zeroaiHi:730530086138151024>':
        member.roles.add('748073452077842523');
        break;
      case '<:zeroaiAi:732357048213438577>':
        member.roles.add('748073680793239572');
        break;
      case '<:zeroaiTech:743606222963474542>':
        member.roles.add('738664618511171634');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '748054494058774549') {
    switch (name) {
      case '<:zeroaiHi:730530086138151024>':
        member.roles.remove('748073452077842523');
        break;
      case '<:zeroaiAi:732357048213438577>':
        member.roles.remove('748073680793239572');
        break;
      case '<:zeroaiTech:743606222963474542>':
        member.roles.remove('738664618511171634');
        break;
    }
  }
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret