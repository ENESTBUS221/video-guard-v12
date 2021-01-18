const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Suspects V12 Guard Botu")
.addField(":white_check_mark: !antiraid",":white_check_mark: Sunucunuza gelen botları girer girmaz sunucudan atar.",true)
.addField(":white_check_mark: !ban-koruma #kanal**", ":white_check_mark: Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar",true)
.addField(":white_check_mark: !ban-koruma-sıfırla **", ":white_check_mark: Ayarlanan Ban Koruma Sistemini Sıfırlar.",true)
.addField(":white_check_mark: !kanal-koruma #kanal**", ":white_check_mark: Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.",true)
.addField(":white_check_mark: !kanal-koruma-sıfırla**", ":white_check_mark: Ayarlanan Kanal Koruma Sistemini Sıfırlar.",true)
.addField(":white_check_mark: !rol-koruma #kanal**", ":white_check_mark: Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.",true)
.addField(":white_check_mark: !rol-koruma-sıfırla #kanal**", ":white_check_mark: Ayarlanan Rol Koruma Sistemini Sıfırlar.",true)
.addField(":white_check_mark: !spam #kanal**", ":white_check_mark: Spam engel açar",true)
.addField(":white_check_mark: !spamkapat #kanal**", ":white_check_mark: Spam engel kapatır.",true)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))

message.channel.send(embed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["koruma-sistemi","help","yardim"], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };