const config = require("config");
const http = require("http");
const { app } = require("./app");

const port = config.get("port");
const server = http.createServer(app);

async function startServer() {
    server.listen(port, () => {
        // console.log(`Starting BE http://localhost:${port}`);
    });
}

startServer();