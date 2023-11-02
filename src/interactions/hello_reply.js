const { keyboard, Key } = require('@nut-tree/nut-js');


module.exports = {
    customId: 'hello_reply',
    run: async (client, interaction) => {
        keyboard.pressKey(Key.A)
        return interaction.reply({
            content: 'Hello world!'
        });
        
    }
};