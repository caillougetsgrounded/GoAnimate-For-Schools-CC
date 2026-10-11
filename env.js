// Pre-initialize global application configuration strings to prevent Node v24 path validation errors
global.config = {
    STORE_URL: "/store",
    SWF_URL: "/animation",
    CLIENT_URL: "/static"
};

module.exports = {
    PORT: process.env.PORT || 10000,
    isProd: true
};
