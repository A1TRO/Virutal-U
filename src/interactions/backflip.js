const { keyboard, Key } = require('@nut-tree/nut-js');

async function rollhere(duration) {
    keyboard.pressKey(Key.Num2);
    await new Promise(resolve => setTimeout(resolve, duration));
    keyboard.pressKey(Key.K)
    await new Promise(resolve => setTimeout(resolve, 90));
    keyboard.releaseKey(Key.Num2)
    keyboard.releaseKey(Key.K)
  }
  

module.exports = {
    customId: 'backflip',
    run: async (client, interaction) => {
    
        rollhere(230);

        return interaction.reply({
            content: ''
        });
    }
};
