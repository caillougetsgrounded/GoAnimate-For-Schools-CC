// Global Node v24 patch to shield path and fs modules from type validation errors
const path = require('path');
const fs = require('fs');

const origJoin = path.join;
path.join = (...args) => origJoin(...args.map(x => typeof x === 'string' ? x : String(x || '')));
const origResolve = path.resolve;
path.resolve = (...args) => origResolve(...args.map(x => typeof x === 'string' ? x : String(x || '')));

const origExists = fs.existsSync;
fs.existsSync = (p) => { if (typeof p !== 'string') return false; return origExists(p); };
const origReaddir = fs.readdirSync;
fs.readdirSync = (p, o) => { if (typeof p !== 'string') return []; return origReaddir(p, o); };

global.config = {
    STORE_URL: "/store",
    SWF_URL: "/animation",
    CLIENT_URL: "/static"
};

require('./server.js');
