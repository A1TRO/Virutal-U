const { keyboard, Key } = require('@nut-tree/nut-js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    command_data: {
        name: 'action2',
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
            content: 'Action List 2',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('roll')
                            .setLabel('Roll')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('crouch')
                            .setLabel('Crouch')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('throw')
                            .setLabel('Throw')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('gpound')
                            .setLabel('Ground Pound')
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('backflip')
                            .setLabel('Backflip')
                            .setStyle(ButtonStyle.Primary)
                    )
            ]
        });

    }
};
