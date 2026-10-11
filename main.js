// Force safe strings for all configuration variables to prevent path argument type crashes
const fs = require('fs');
if (fs.existsSync('./config.json')) {
    try {
        global.config = require('./config.json');
        if (typeof global.config.STORE_URL !== 'string') global.config.STORE_URL = '/store';
        if (typeof global.config.SWF_URL !== 'string') global.config.SWF_URL = '/animation';
        if (typeof global.config.CLIENT_URL !== 'string') global.config.CLIENT_URL = '/static';
    } catch(e) {}
}

require("./server")
