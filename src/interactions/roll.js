const { keyboard, Key } = require('@nut-tree/nut-js');

async function rollhere(duration) {
    keyboard.pressKey(Key.Num2);
    await new Promise(resolve => setTimeout(resolve, duration));
    keyboard.pressKey(Key.J)
    await new Promise(resolve => setTimeout(resolve, 90));
    keyboard.releaseKey(Key.Num2)
    keyboard.releaseKey(Key.J)
  }
  

module.exports = {
    customId: 'roll',
    run: async (client, interaction) => {
    
        rollhere(230);

        return interaction.reply({
            content: ''
        });
    }
};
