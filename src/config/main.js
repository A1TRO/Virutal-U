const { GatewayIntentBits, Partials } = require('discord.js');
const { ClientIntents, ClientPartials } = require('discord.js-v14-helper');

module.exports = {
    // Client configuration:
    client: {
        constructor: {
            intents: ClientIntents,
            partials: ClientPartials,
            presence: {
                activities: [
                    {
                        name: 'Hello world!',
                        type: 0
                    }
                ],
                status: 'online'
            }
        },
        token: "",
        id: "943170343521124393"
    },

    // Database:
    database: {
        mongodb_uri: ""
    },

    // Users:
    users: {
        developers: [
          "YOUR_ACCOUNT_ID",
          "YOU_CAN_ADD_MORE_IDS"
        ],
        owner: "481475041217871882"
    },
    
    channels: {
        logging_channel: "1096202395232522311"
    }
};
