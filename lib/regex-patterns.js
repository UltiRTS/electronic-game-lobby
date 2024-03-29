"use strict";

const NO_PARAMS = false;

module.exports = {
	ACCEPTED: /(\S+)/,
	ADDBOT: /(\d+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)(?:\s+(.*))?/,
	ADDSTARTRECT: /(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)/,
	ADDUSER: /(\S+)\s+(\S\S)\s+(\S+)(?:\s*(.*))?/,
	AGREEMENT: /(.*)/,
	AGREEMENTEND: NO_PARAMS,
	BATTLECLOSED: /(\d+)/,
	BATTLEOPENED: /(\d+)\s+(\d)\s+(\d)\s+(\S+)\s+(\S+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\S+)\s+(\S+)(?:\s*([^\t]+))?(?:\t*([^\t]+))?(?:\t*([^\t]+))?(?:\t*([^\t]+))?(?:\t*([^\t]+))?/,
	BRIDGEDCLIENTFROM: /(\S\S)\s+(\S+)\s+(\S+)/,
	CHANGEEMAILACCEPTED: NO_PARAMS,
	CHANGEEMAILDENIED: /(.*)/,
	CHANGEEMAILREQUESTACCEPTED: NO_PARAMS,
	CHANGEEMAILREQUESTDENIED: /(.*)/,
	CHANNEL: /(\S+)\s+(\d+)(?:\s*(.*))?/,
	CHANNELMESSAGE: /(\S+)\s+(\S+)/,
	CHANNELTOPIC: /(\S+)\s+(\S+)(?:\s*(.*))?/,
	CLIENTBATTLESTATUS: /(\S+)\s+(\S+)\s+(\S+)/,
	CLIENTIPPORT: /(\S+)\s+(\S+)\s+(\S+)/,
	CLIENTS: /(\S+)(?:\s+(.+))?/,
	CLIENTSFROM: /(\S+)\s+(\S+)(?:\s+(.+))?/,
	CLIENTSTATUS: /(\S+)\s+(\S+)/,
	COMPFLAGS: /(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?(?:(\S+)(?:\s+)?)?/,
	DENIED: /(.*)/,
	DISABLEUNITS: /(.+)/,
	ENABLEALLUNITS: NO_PARAMS,
	ENABLEUNITS: /(.+)/,
	ENDOFCHANNELS: NO_PARAMS,
	FAILED: NO_PARAMS,
	FORCEQUITBATTLE: NO_PARAMS,
	FRIENDREQUESTLIST:  /(\S+)(?:\s+(.+))?/,
	FRIENDLIST:  /(\S+)(?:\s+(.+))?/,
	FRIENDREQUEST:  /(\S+)(?:\s+(.+))?/,
	FRIEND: /(\S+)/,
	FRIENDLISTBEGIN: NO_PARAMS,
	FRIENDLISTEND: NO_PARAMS,
	


	UNFRIEND: /(\S+)/,
	HOSTPORT: /(\d+)/,
	IGNORE: /(\S+)(?:\s*(.*))?/,
	IGNORELIST: /(\S+)(?:\s*(.*))?/,
	IGNORELISTBEGIN: NO_PARAMS,
	IGNORELISTEND: NO_PARAMS,
	JOIN: /(\S+)/,
	JOINBATTLE: /(\d+)\s+(\S+)(?:\s+(\S+))?/,
	JOINBATTLEFAILED: /(.*)/,
	JOINBATTLEREQUEST: /(\S+)\s+(\S+)/,
	JOINED: /(\S+)\s+(\S+)/,
	JOINEDBATTLE: /(\d+)\s+(\S+)(?:\s*(\S*))?/,
	JOINEDFROM: /(\S+)\s+(\S+)\s+(\S+)/,
	JOINFAILED: /(\S+)(?:\s*(.*))?/,
	JSON: /(.*)/,
	KICKFROMBATTLE: /(\d+)\s+(\S+)/,
	LEFT: /(\S+)\s+(\S+)(?:\s+(.+))?/,
	LEFTBATTLE: /(\d+)\s+(\S+)/,
	LEFTFROM: /(\S+)\s+(\S+)/,
	LOGININFOEND: NO_PARAMS,
	MOTD: /(?:[^\t]*)?/,
	OK: NO_PARAMS,
	OPENBATTLE: /(\d+)/,
	OPENBATTLEFAILED: /(.*)/,
	PONG: NO_PARAMS,
	REDIRECT: /(\S+)\s+(\d+)/,
	REGISTRATIONACCEPTED: NO_PARAMS,
	REGISTRATIONDENIED: /(.*)/,
	REMOVEBOT: /(\d+)\s+(\S+)/,
	REMOVESCRIPTTAGS: /(.*)/,
	REMOVESTARTRECT: /(\d+)/,
	REMOVEUSER: /(\S+)/,
	REQUESTBATTLESTATUS: NO_PARAMS,
	RESENDVERIFICATIONACCEPTED: NO_PARAMS,
	RESENDVERIFICATIONDENIED: /(.*)/,
	RESETPASSWORDACCEPTED: NO_PARAMS,
	RESETPASSWORDDENIED: /(.*)/,
	RESETPASSWORDREQUESTACCEPTED: NO_PARAMS,
	RESETPASSWORDREQUESTDENIED: /(.*)/,
	RING: /(\S+)/,
	SAID: /(\S+)\s+(\S+)(?:\s+(.+))?/,
	SAIDEX: /(\S+)\s+(\S+)(?:\s+(.+))?/,
	SAIDFROM: /(\S+)\s+(\S+)(?:\s+(.+))?/,
	SAIDBATTLE: /(\S+)(?:\s(.+))?/,
	SAIDPRIVATE: /(\S+)(?:\s+(.+))?/,
	SAIDPRIVATEEX: /(\S+)(?:\s+(.+))?/,
	SAYPRIVATE: /(\S+)(?:\s+(.+))?/,
	SAYPRIVATEEX: /(\S+)(?:\s+(.+))?/,
	SERVERMSG: /(.*)/,
	SERVERMSGBOX: /([^\t]+)(?:\t+([^\t]+))?/,
	SETSCRIPTTAGS: /(.*)/,
	TASSERVER: /(\S+)\s+(\S+)\s+(\S+)\s+(\S+)/,
	UDPSOURCEPORT: /(\d+)/,
	UNBRIDGEDCLIENTFROM: /(\S\S)\s+(\S+)\s+(\S+)/,
	UNIGNORE: /(\S+)/,
	UPDATEBATTLEINFO: /(\d+)\s+(\S+)\s+(\S+)\s+(\S+)(?:\s+([^\t]+))?/,
	UPDATEBOT: /(\d+)\s+(\S+)\s+(\S+)\s+(\S+)/,
};
