const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: "mute",
    description: "mute user",
    permissions: ["MUTE_MEMBERS"],

    run: async (client, message, args) => {
 const reason = args.slice(1)
 const user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
 const muteRole = message.guild.roles.cache.find(val => val.name === 'Mute')
 if(!user) return message.reply("``?mute <member> [reason]``")
 if(user === message.author) return message.reply("You cannot mute yourself!")
 if(user === message.client.user) return message.reply("You cannot mute me!")
 if(message.guild.members.cache.get(user.id).permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS)) return message.reply("You cannot mute moderator of this server!")
 if(message.guild.members.cache.get(user.id).permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("You cannot mute staff member of this server!")
 if(!reason) return message.reply('Please provide a reason')
 if(user.roles.cache.some(role => role.name === "Mute")) return message.reply('User is already Muted')
 if (!muteRole){
	 //return message.reply('Mute Role required')
	 guild.roles.create({
  data: {
    name: 'Mute',
		permissions: []
  }
})
 } 
 message.guild.members.fetch(user.id).then(member => {
            member.roles.add(muteRole).catch(err => console.error(err))
        })
            const embed = new Discord.MessageEmbed()
            .setColor("#00ffff")
             .setTitle(`muted ${user}`)
             .setDescription(`reason: ${reason}\n` + `moderator: ${message.author.username}`)
             message.reply({ embeds: [embed] })
  }
} 