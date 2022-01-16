const { MessageEmbed } = require('discord.js');
const Discord =require('discord.js')
module.exports = {
    name: "kick",
    description: "kick user",
    permissions: ["KICK_MEMBERS"],

    run: async (client, message, args) => {
 const reason = args.slice(1)
 const user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
 if(!user) return message.reply("Please select a user!")
 if(user === message.author) return message.reply("You cannot kick yourself!")
 if(user === message.client.user) return message.reply("You cannot kick me!")
 if(message.guild.members.cache.get(user.id).permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS)) return message.reply("You cannot kick moderator of this server!")
 if(message.guild.members.cache.get(user.id).permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("You cannot kick staff member of this server!")
 if(!reason) return message.reply('Please provide a reason')
  
	 message.guild.members.fetch(user.id).then(member => {
            member.kick().catch(err => console.error(err))
        })
            const embed = new Discord.MessageEmbed()
            .setColor('#00ffff')
             .setTitle(`kickned ${user}`)
             .setDescription(`reason: ${reason}\n` + `moderator: ${message.author.username}`)
             message.reply({ embeds: [embed] })
  }
} 