const Discord = require("discord.js");

module.exports = 
class AvatarCommand {
    constructor () {
        this.name = "avatar";
        this.description = "Afinal, é muito difícil ver um avatar com clareza pelo Discord.";
        this.example = "avatar @NaN#2404"
        this.usage = "avatar @Usuário";
        this.aliases = ["foto"];
        this.user_must_be_owner = false; // somente os administradores do bot podem usar?
        this.guild_only = false; // só pode ser executado em uma guild?
        this.bot_permissions = []; // permissões que o bot precisa ter
        this.user_permissions = []; // permissões que o usuário precisa ter
    }

    async exec (Navalia, client, msg, args) {
        let user = msg.author;

        let firstMention = msg.mentions.users.first();
        if(firstMention) user = firstMention;

	const embed = new Discord.RichEmbed();
	embed.setColor(msg.guild.member(user).displayColor);
	embed.setAuthor(`Avatar de ${user.tag}`, user.displayAvatarURL, user.displayAvatarURL);
	embed.setImage(user.displayAvatarURL);
	msg.reply({embed});
    }
}
