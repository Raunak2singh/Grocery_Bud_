const liveserv = require('live-server')


const param = {
    port :3000,
    host:"0.0.0.0",
    file:"index.html"
}


liveserv.start(param)