const { keyboard, Key } = require('@nut-tree/nut-js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    command_data: {
        name: 'settings',
        description: 'Simulate a button on Virutal-U`s controller',
        type: 1,
        options: [],
    },
    role_perms: null,
    developers_only: false,
    cooldown: '5s',
    category: 'Utility',
    run: async (client, interaction) => {

        return interaction.reply({
            content: 'Settings List',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('quickload')
                            .setLabel('Quick Load')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('quicksave')
                            .setLabel('Quick Save')
                            .setStyle(ButtonStyle.Primary)
                    )
                    
            ]
        });

    }
};
