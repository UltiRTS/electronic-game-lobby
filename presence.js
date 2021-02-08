const RPC = require("discord-rpc");
const rpc = new RPC.Client({
        transport: "ipc"
});
rpc.on("ready", () => {
        rpc.setActivity({
                details: "In Lobby",
                //state: "State"
                //startTimestamp: new Date()
                //largeImageKey: "",
                //largeImageText: "",
                //smallImageKey: "",
                //smallImageText: ""
        });
        
        console.log("Rich presence is now active");
});

rpc.login({
    clientId: "806697271407280158"
});
