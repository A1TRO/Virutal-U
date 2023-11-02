const { keyboard, Key } = require('@nut-tree/nut-js');

async function pressKey(key, duration) {
    keyboard.pressKey(key);
    await new Promise(resolve => setTimeout(resolve, duration));
    keyboard.releaseKey(key);
  }
  

module.exports = {
    customId: 'down',
    run: async (client, interaction) => {
    
        pressKey(Key.Down, 1000);

        return interaction.reply({
            content: ''
        });
    }
};
