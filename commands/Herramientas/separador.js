const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'separador',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            description: 'Crea un separador.'
        });
    }
    async run(msg) {
          msg.channel.sendFile('https://cdn.discordapp.com/attachments/360666079804260352/366634302542446594/barra_gamedev.png');

          return msg.delete(100);

  }
};
