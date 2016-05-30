'use strict';

const fs = require('fs');

let adWhitelist = (Config.adWhitelist ? Config.adWhitelist : ['smogon.psim.us', 'smogtours.psim.us', 'alpha.psim.us']);
let bannedMessages = (Config.bannedMessages ? Config.bannedMessages : ['pornhub', 'xvideos', 'xxnx', 'youporn', 'redtube', 'paysite', 'abbywinters', 'baitbus', 'brazzers', 'chaturbate', 'kink.com', 'justusboys', 'sssh.com', 'sex141', 'thesword.com', 'youporn', 'xtube', 'porn2.0', 'myex.com', 'myfeecams', 'livejasmin', 'erotica', 'hentai', 'rule34.paheal.net', 'danbooru', 'gelbooru', 'rule34.xxx', 'e621.net']);
let adRegex = new RegExp("(play.pokemonshowdown.com\\/~~)(?!(" + adWhitelist.join('|') + "))", "g");

Config.chatfilter = function (message, user, room, connection) {
	user.lastActive = Date.now();

	for (let x in bannedMessages) {
		if (message.toLowerCase().indexOf(bannedMessages[x]) > -1 && bannedMessages[x] !== '' && message.substr(0, 1) !== '/') {
			if (user.locked) return false;
			Punishments.lock(user, Date.now() + 7 * 24 * 60 * 60 * 1000, "Said a banned word: " + bannedMessages[x]);
			user.popup('You have been automatically locked for sending a message containing a banned word.');
			Rooms('staff').add('[PornMonitor] ' + (room ? '(' + room + ') ' : '') + Tools.escapeHTML(user.name) +
			' was automatically locked for trying to say "' + message + '"').update();
			fs.appendFile('logs/modlog/modlog_staff.txt', '[' + (new Date().toJSON()) + '] (staff) ' + user.name + ' was locked from talking by the Server (' +
			bannedMessages[x] + ') (' + connection.ip + ')\n');
			return false;
	  	}
		return message;
	}
};
