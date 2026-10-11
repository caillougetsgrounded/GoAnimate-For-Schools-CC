// Universal Node v24 patch to fix all path argument type errors automatically
const path = require('path');
const fs = require('fs');
const origJoin = path.join;
path.join = (...args) => origJoin(...args.map(x => typeof x === 'string' ? x : String(x || '')));
const origResolve = path.resolve;
path.resolve = (...args) => origResolve(...args.map(x => typeof x === 'string' ? x : String(x || '')));

global.config = {
    STORE_URL: "/store",
    SWF_URL: "/animation",
    CLIENT_URL: "/static"
};
require('./server.js');
