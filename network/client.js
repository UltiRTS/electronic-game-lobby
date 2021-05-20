"use strict";

const net = require("net");
const crypto = require("crypto");
const EventEmitter = require("events");
const regexPatterns = require("../lib/regex-patterns");
const SERVER_URL = "ulti-wiki.eterea.uk";
const SERVER_PORT = 8200;
window.addEventListener('beforeunload', function(event) { 
	window.client.logout()
});
class Client extends EventEmitter {
	constructor() {
		super();
		this.connect = false;
	}

	connectToServer(server_url = SERVER_URL, server_port = SERVER_PORT) {
		this.socket = new net.Socket();
		try{
			this.socket.connect(server_port, server_url);
			this.socket.on("connect", () => {
				this.connected = true;
				this.emit("connected");
			});
			this.socket.on("close", () => {
				this.connected = false;
				this.emit("disconnected");
			});
			this.socket.on("data", (data) => {
				data=window.networkBuffer+data.toString()
                if (!data.endsWith("\n")){
                    window.networkBuffer=data
                    return
                }
                window.networkBuffer=""
                data.split("\n")
					.forEach((message) => {
						if (message.length > 0) {
							console.log("Received: " + message)
						
							
								const commandLength = message.indexOf(" ");
								const command = message.substring(0, commandLength);
								const args = message.substring(commandLength, message.length);
						
							if (command in regexPatterns) {
								const pattern = regexPatterns[command];
								if (pattern) {
									const result = pattern.exec(args);
									if (result == null) console.log("Unknown Pattern: " + message);
									else this.emit(command, ...result.slice(1, result.length));
								}
							}
							else{this.emit(message)}
						}
					});
			});
		}
		catch (e){console.log("UNABLE TO INIT CONNECTION!")}
	}
	
	joinChanel(chanName) {
		const message ="JOIN " +chanName;
		this.send(message);
	}
	
	joinBattle(bID) {
		const message ="JOINBATTLE " +bID;
		this.send(message);
        
	}
	
	leaveChanel(chanName) {
		const message ="LEAVE " +chanName;
		this.send(message);
	}
	leaveBattle() {
		const message ="LEAVEBATTLE";
		this.send(message);

	}
	
	myBtlStatus(syncStatus){
	//var battleStatus=parseInt(String(syncStatus)+'0000000000000000000000').toString(10)
	if (syncStatus){var message ="MYBATTLESTATUS "+'4194304'+" 0";console.log('(has map )sending '+message)} //have map, should be 01(b23,b22)
		else {var message ="MYBATTLESTATUS "+'8388608'+" 0";console.log('(doesnt have map )sending '+message)} //no map, should be 10(b23,b22)
		
	this.send(message);
		
	}
	
	say(channel, something) {
		const message ="SAY " +channel+" "+something;
		this.send(message);
	}
	
	sayBattle(something) {
		const message ="SAYBATTLE " +something;
		this.send(message);
	}
	
	login(username, password, cpu = 0, localIP = "*") {
		const passwordHash = crypto
			.createHash("md5")
			.update(password)
			.digest("base64");

		const message =
			"LOGIN " + username + " " + passwordHash + " " + cpu + " " + localIP;
		this.send(message);
		setInterval(() => { this.send("PING"); }, 20000);
		
	}

	logout(reason = "unknown") {
		this.send("EXIT " + reason);
		this.endConnection();
	}

	endConnection() {
		this.socket.destroy();
		clearInterval(window.timer4);
	}
	register(username,password){
		const passwordHash = crypto
		.createHash("md5")
		.update(password)
		.digest("base64");
		
		const message =
		"REGISTER " + username + " " + passwordHash + " non@nonnon.com";
		this.send(message);		
	}
	
	registerConfirm(){
	const message =
		"CONFIRMAGREEMENT ";
		this.send(message);	
		loading(true)

	}
	
	send(message) {
		if (window.dbug) console.log("Sending: " + message);
		try{
		this.socket.write(message + "\n");
		}
		catch(e){
			this.endConnection()
			window.isLoggedin=false
		}
		
	}
}

module.exports = Client;
