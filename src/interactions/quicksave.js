const { keyboard, Key } = require('@nut-tree/nut-js');

async function Save(duration) {
    keyboard.pressKey(Key.Num6);
    await new Promise(resolve => setTimeout(resolve, 200));
    keyboard.releaseKey(Key.Num6);
    await new Promise(resolve => setTimeout(resolve, 200));
    keyboard.pressKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.releaseKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.pressKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.releaseKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.pressKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.releaseKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.pressKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.releaseKey(Key.S);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.pressKey(Key.L);
    await new Promise(resolve => setTimeout(resolve, 1000));
    keyboard.releaseKey(Key.L);
    await new Promise(resolve => setTimeout(resolve, 4000));
    keyboard.pressKey(Key.Num6);
    await new Promise(resolve => setTimeout(resolve, 300));
    keyboard.releaseKey(Key.Num6);
  }

  
  

module.exports = {
    customId: 'quicksave',
    run: async (client, interaction) => {
    
        Save(100);
        

        return interaction.reply({
            content: ''
        });
    }
};
