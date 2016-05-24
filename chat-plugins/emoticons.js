'use strict';

const color = require('../config/color');
let demFeels = function () {};
demFeels.getEmotes = function () {
	return {};
};
try {
	demFeels = require('dem-feels');
} catch (e) {
	console.error(e);
}

exports.parseEmoticons = parseEmoticons;

// for travis build
if (typeof demFeels.extendEmotes === 'function') {
	// example extending emotes
	demFeels.extendEmotes({
		'(ditto)': 'https://cdn.betterttv.net/emote/554da1a289d53f2d12781907/2x',
		'#freewolf': 'http://i.imgur.com/ybxWXiG.png',
		'feelsbn': 'http://i.imgur.com/wp51rIg.png',
		'feelshayley': 'http://orig09.deviantart.net/5a7d/f/2010/131/6/c/free_vaporeon_lick_icon_by_narutard33.gif',
		'feelsbui': 'http://a.deviantart.net/avatars/r/i/rijaya-vidra.gif?2',
		'feelsjay': 'http://orig01.deviantart.net/1b84/f/2013/311/3/1/free_bouncy_spheal_icon_by_kattling-d6tdi31.gif',
		'feelsleaf': 'http://a.deviantart.net/avatars/a/l/alucakes.gif?4',
		'bshax': 'https://static-cdn.jtvnw.net/emoticons/v1/37025/2.0',
		'youdontsay': 'http://r32.imgfast.net/users/3215/23/26/64/smiles/280467785.jpg',
		'xoxo': 'http://orig00.deviantart.net/b49d/f/2014/220/5/3/ichigo_not_impressed_icon_by_magical_icon-d7u92zg.png',
		'feelsotami': 'http://images5.fanpop.com/image/user_images/3475000/Ciel_-3475109_50_50.png',
		'feelsmiku': 'http://orig02.deviantart.net/bba8/f/2014/043/1/9/hatsune_miku_by_mikumikudancexxx-d765fzq.gif',
		'feelsamp': 'http://orig06.deviantart.net/d756/f/2015/255/f/3/pokemon_ampharos_lick_icon___free_to_use_by_icelemontea83-d97jr15.gif',
		'feelslick': 'http://a.deviantart.net/avatars/d/a/darkclaw8980.gif?6',
		'feelsluxray': 'http://media-cerulean.cursecdn.com/avatars/316/712/635515869333876405.gif',
		'feelsumbreon': 'http://orig14.deviantart.net/ef78/f/2011/043/b/9/umbreon_lick_icon_by_mushydog-d39f8n4.gif',
		'feelsshinx': 'http://orig02.deviantart.net/2897/f/2010/232/e/0/shinx_free_lick_avatar_by_yakalentos.gif',
		'feelslugia': 'http://a.deviantart.net/avatars/s/k/skyewolf36.gif?9',
		'pjsalt': 'http://orig05.deviantart.net/99d1/f/2015/358/a/9/pjsalt_twitch_emote_by_xenoblast1-d9lc7ni.png',
	});
}

const emotes = demFeels.getEmotes();

const emotesKeys = Object.keys(emotes).sort();

/**
* Parse emoticons in message.
*
* @param {String} message
* @param {Object} room
* @param {Object} user
* @param {Boolean} pm - returns a string if it is in private messages
* @returns {Boolean|String}
*/
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	let match = false;
	let len = emotesKeys.length;

	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = demFeels(message);

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	let group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	let style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
* Create a two column table listing emoticons.
*
* @return {String} emotes table
*/
function create_table() {
	let emotes_name = Object.keys(emotes).sort();
	let emotes_list = [];
	let emotes_group_list = [];
	let len = emotes_name.length;

	for (let i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' />" +
			emotes_name[i] + "</td>");
	}

	let emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (let i = 0; i < len / 2; i++) {
		let emote1 = emotes_list[i];
		let emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<div class='infobox'><center><b><u>List of Emoticons</u></b></center>" + "<div class='infobox-limited'><table border='1' cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table></div></div>";
}

let emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let rng = Math.floor(Math.random() * emotesKeys.length);
		let randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."],
};
