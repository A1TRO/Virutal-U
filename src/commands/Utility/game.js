const { keyboard, Key } = require('@nut-tree/nut-js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    command_data: {
        name: 'action',
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
            content: 'Action List 1',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('forward')
                            .setLabel('Forward')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('left')
                            .setLabel('Left')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('right')
                            .setLabel('Right')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('backward')
                            .setLabel('Backward')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('jump')
                            .setLabel('Jump')
                            .setStyle(ButtonStyle.Primary)
                    )
            ]
        });

    }
};
