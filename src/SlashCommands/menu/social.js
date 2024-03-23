const { EmbedBuilder } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "social",
  description: "Social link of my devs",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.find(emoji => emoji.id === id)?.toString() || 'Missing Emoji';
    }
    const embed = new EmbedBuilder()
      .setTitle("Social Link")
      .setDescription(
        `➼ ** | [GitHub_RuBy67](https://github.com/RuBy-67)**\n➼ ** | [@XXX](https://twitter.com/)**\n➼ ** |** <@375590278880428034>\n\n *Write me if you need any update in bot*`
      )
      .setColor("#3135D8");
      

    return interaction.reply({ embeds: [embed] });
  },
};