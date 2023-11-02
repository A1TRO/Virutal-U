const { keyboard, Key } = require('@nut-tree/nut-js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    command_data: {
        name: 'camera',
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
            content: 'Camera Action List',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('cleft')
                            .setLabel('Camera Left [Buggy But Fixed]')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('cright')
                            .setLabel('Camera Right [Buggy But Fixed]')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('up')
                            .setLabel('Camera Up')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('down')
                            .setLabel('Camera Down')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('resetcam')
                            .setLabel('Reset Camera')
                            .setStyle(ButtonStyle.Primary)
                    )
            ]
        });

    }
};
