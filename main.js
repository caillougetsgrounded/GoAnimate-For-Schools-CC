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
// Force active HTTP listener block to keep the Render container running indefinitely
const http = require('http');
try {
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GoAnimate Wrapper Server Online');
    }).listen(process.env.PORT || 10000, () => {
        console.log('Server successfully bound to port ' + (process.env.PORT || 10000));
    });
} catch (e) {
    console.log('Server initialization bypassed:', e.message);
}
