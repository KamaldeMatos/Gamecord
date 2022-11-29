const Discord = require('discord.js');
const client = new Discord.Client();
const { Snake } = require('../index');


client.on('messageCreate', async (message) => {
  if(message.content === '!snake') {
    const Game = new Snake({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Jogo da Cobrinha',
        overTitle: 'Fim de Jogo!',
        color: '#5865F2'
      },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        left: '⬅️',
        right: '➡️',
      },
      stopButton: 'Stop',
      timeoutTime: 60000,
      snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
      foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
      playerOnlyMessage: 'Apenas {player} pode usar esses botões.'
    });
    
    Game.startGame();
    Game.on('gameOver', result => {
      console.log(result);
    });
  }
});

client.login('DISCORD_BOT_TOKEN');