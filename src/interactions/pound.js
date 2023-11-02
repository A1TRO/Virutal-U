const { keyboard, Key } = require('@nut-tree/nut-js');

async function groundpound(duration) {
    keyboard.pressKey(Key.K);
    await new Promise(resolve => setTimeout(resolve, duration));
    keyboard.pressKey(Key.Num2);
    await new Promise(resolve => setTimeout(resolve, 90));
    keyboard.releaseKey(Key.Num2)
    keyboard.releaseKey(Key.K)
  }
  

module.exports = {
    customId: 'gpound',
    run: async (client, interaction) => {
    
        groundpound(500)

        return interaction.reply({
            content: ''
        });
    }
};
