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
	'4Head': 'https://static-cdn.jtvnw.net/emoticons/v1/354/1.0',
	'#freewolf': 'http://i.imgur.com/ybxWXiG.png',
	'(ditto)': 'https://cdn.betterttv.net/emote/554da1a289d53f2d12781907/2x',
	'Cate': 'http://i.imgur.com/728AQQN.jpg',
	'DansGame': 'https://static-cdn.jtvnw.net/emoticons/v1/33/1.0',
	'Doge': 'http://fc01.deviantart.net/fs71/f/2014/279/4/5/doge__by_honeybunny135-d81wk54.png',
	'EleGiggle': 'https://static-cdn.jtvnw.net/emoticons/v1/4339/2.0',
	'enteirawr': 'http://i.imgur.com/HZWoAMx.gif',
	'FacePalm': 'http://i.imgur.com/lv3GmpM.png',
	'FailFish': 'https://static-cdn.jtvnw.net/emoticons/v1/360/1.0',
	'feelsackbr': 'http://i.imgur.com/BzZJedC.jpg?1',
	'feelsamy': 'http://i.imgur.com/Aw8KAmi.gif',
	'feelsapple': 'http://i.imgur.com/h42wGYF.gif',
	'feelsarken': 'http://imgur.com/YCCDZWq.png',
	'feelsasl': 'http://i.imgur.com/ZQbYp9l.gif',
	'feelsbadHD': 'https://cdn.betterttv.net/emote/55b6e2e03293ee267743902b/2x',
	'feelsbald': 'http://i.imgur.com/Gv2BFxs.png',
	'feelsbd': 'http://i.imgur.com/YyEdmwX.png',
	'feelsbebop': 'http://i.imgur.com/TDwC3wL.png',
	'feelsbirb': 'http://i.imgur.com/o4KxmWe.png',
	'feelsbm': 'http://i.imgur.com/xwfJb2z.png',
	'feelsbn': 'http://i.imgur.com/wp51rIg.png',
	'feelsbt': 'http://i.imgur.com/rghiV9b.png',
	'feelsbunny': 'http://orig04.deviantart.net/a762/f/2012/352/9/5/dancing_bunny_by_onisuu-d5oee23.gif',
	'feelschar': 'http://orig04.deviantart.net/9abc/f/2013/118/8/e/charizard_lick_icon_by_spritegirl999-d63d7sf.gif',
	'feelschime': 'http://i.imgur.com/uIIBChH.png',
	'feelscool': 'http://i.imgur.com/qdGngVl.jpg?1',
	'feelscop': 'http://i.imgur.com/eNaFHvR.png?1',
	'feelscrazy': 'http://i.imgur.com/NiJsT5W.png',
	'feelscri': 'http://i.imgur.com/QAuUW7u.jpg?1',
	'feelscute': 'https://cdn.betterttv.net/emote/55aeba450d87fd2766bee7cd/2x',
	'feelscx': 'http://i.imgur.com/zRSUw2n.gif',
	'feelsdd': 'http://i.imgur.com/fXtdLtV.png',
	'feelsdell': 'http://i.imgur.com/1CgwuDz.jpg',
	'feelsdoge': 'http://i.imgur.com/GklYWvi.png',
	'feelsdrg': 'http://i.imgur.com/UZzWcA3.png',
	'feelsemo': 'http://i.imgur.com/FPolh5d.jpg',
	'feelsentei': 'http://i.imgur.com/Wxc10fM.jpg',
	'feelsevil': 'http://i.imgur.com/zOemc0n.png',
	'feelsfdra': 'http://i.imgur.com/ZIcl9Zy.jpg',
	'feelsfloat': 'http://i.imgur.com/XKP1Kpf.gif',
	'feelsfro': 'http://i.imgur.com/ijJakJT.png',
	'feelsgay': 'http://i.imgur.com/zQAacwu.png?1',
	'feelsgd': 'http://i.imgur.com/Jf0n4BL.png',
	'feelsgm': 'https://cdn.betterttv.net/emote/5638163f55dee26813aebbf1/2x',
	'feelsgn': 'http://i.imgur.com/juJQh0J.png',
	'feelsgro': 'http://i.imgur.com/jLhP0bZ.png?1',
	'feelshigh': 'http://i.imgur.com/s9I2bxp.jpg?1',
	'feelshlwn': 'http://i.imgur.com/OHMDVNJ.jpg',
	'feelsho': 'http://i.imgur.com/J4oUHm2.png?1',
	'feelshp': 'http://i.imgur.com/1W19BDG.png',
	'feelsilum': 'http://i.imgur.com/CnyGTTD.png',
	'feelsjig': 'http://i.imgur.com/hSzqy5z.png?1',
	'feelsjpn': 'http://i.imgur.com/Zz2WrQf.jpg',
	'feelskawaii': 'http://i.imgur.com/kLnDaYD.png',
	'feelsky': 'http://i.imgur.com/BtATPId.png?1',
	'feelslag': 'https://cdn.betterttv.net/emote/56758c29bf317838643c7e97/2x',
	'feelslelouch': 'http://i.imgur.com/qZrV75o.png',
	'feelsllama': 'http://i.imgur.com/oSLSk2I.gif',
	'feelslot': 'http://i.imgur.com/tl88F7i.png?1',
	'feelslug': 'http://i.imgur.com/REEBSOT.png?1',
	'feelsmd': 'http://i.imgur.com/DJHMdSw.png',
	'feelsmerry': 'https://cdn.betterttv.net/emote/5658e10f18d1dbe358624e35/2x',
	'feelsmixtape': 'http://i.imgur.com/7lncwng.png',
	'feelsmmyea': 'https://cdn.betterttv.net/emote/562bf1bec6035e430db80824/2x',
	'feelsns': 'http://i.imgur.com/jYRFUYW.jpg?1',
	'feelsnv': 'http://i.imgur.com/XF6kIdJ.png',
	'feelsohwait': 'https://cdn.betterttv.net/emote/55ab96ce9406e5482db53424/2x',
	'feelsok': 'http://i.imgur.com/gu3Osve.png',
	'feelsorange': 'http://i.imgur.com/3fxXP16.jpg',
	'feelspanda': 'http://i.imgur.com/qi7fue9.png',
	'feelspaul': 'https://gp4.googleusercontent.com/-ZRuqrlbzvlY/AAAAAAAAAAI/AAAAAAAAAAA/8cf-4Mt_VEE/s48-c-k-no/photo.jpg?sz=50',
	'feelsPika': 'http://i.imgur.com/eoTrTkn.png?1',
	'feelspika': 'http://i.imgur.com/mBq3BAW.png',
	'feelspink': 'http://i.imgur.com/jqfB8Di.png',
	'feelspix': 'http://cbc.pokecommunity.com/config/emoticons/pix.png',
	'feelspn': 'http://i.imgur.com/wSSM6Zk.png',
	'feelspoli': 'http://i.imgur.com/FnzhrWa.jpg?1',
	'feelsPoli': 'http://i.imgur.com/sbKhXZE.jpg?1',
	'feelspuke': 'http://i.imgur.com/nQbRspU.png?1',
	'feelsrb': 'http://i.imgur.com/L6ak1Uk.png',
	'feelsreally': 'https://cdn.betterttv.net/emote/55b0fa13f54d6ecb7927ec54/2x',
	'feelsrg': 'http://i.imgur.com/DsRQCsI.png',
	'feelsrs': 'http://i.imgur.com/qGEot0R.png',
	'feelssad': 'https://cdn.betterttv.net/emote/5613b7ca141069f91f48acca/2x',
	'feelssakis': 'http://i.imgur.com/yThm3fM.png?1',
	'feelssammich': 'http://i.imgur.com/sVgkUF1.png?1',
	'feelssc': 'http://i.imgur.com/cm6oTZ1.png',
	'feelsSerp': 'http://i.imgur.com/PtCTxmY.png',
	'feelsseis': 'http://i.imgur.com/gGGYxrE.png?1',
	'feelsshi': 'http://i.imgur.com/VzlGZ1M.jpg',
	'feelsshrk': 'http://i.imgur.com/amTG3jF.jpg',
	'feelssht': 'http://i.imgur.com/s9owArF.png?1',
	'feelsslo': 'http://i.imgur.com/iQuToJf.jpg?1',
	'feelssnail': 'http://i.imgur.com/wf2ajCR.jpg',
	'feelssnake': 'http://i.imgur.com/xoJnDUD.png',
	'feelstea': 'http://i.imgur.com/M0f2zgJ.jpg?1',
	'feelstired': 'http://i.imgur.com/EgYViOs.jpg',
	'feelstrump': 'http://i.imgur.com/tqW8s6Y.png',
	'feelsvolc': 'http://i.imgur.com/QXlKzZd.png?1',
	'feelsvpn': 'http://i.imgur.com/ODTZISl.gif',
	'feelsweird': 'https://cdn.betterttv.net/emote/5603731ce5fc5eff1de93229/2x',
	'feelswin': 'http://i.imgur.com/rbs9pZG.png?1',
	'feelswndo': 'http://media.tumblr.com/68eb56721b0833c66c8a9542ed515594/tumblr_inline_mkj23fgNsZ1qz4rgp.gif',
	'feelsya': 'https://cdn.betterttv.net/emote/5678a310bf317838643c8188/2x',
	'funnylol': 'http://i.imgur.com/SlzCghq.png',
	'gachiGASM': 'https://cdn.betterttv.net/emote/55999813f0db38ef6c7c663e/2x',
	'gudone': 'http://i.imgur.com/USkp1b9.png',
	'gudsht': 'http://i.imgur.com/R9SO76u.png?1',
	'happyface': 'http://imgur.com/krzCL3j.jpg',
	'hmmface': 'http://i.imgur.com/Z5lOwfZ.png',
	'hoSway': 'https://cdn.betterttv.net/emote/56396c857e538de14bd747a5/2x',
	'hypnotoad': 'http://i.imgur.com/lJtbSfl.gif',
	'jcena': 'http://i.imgur.com/hPz30Ol.jpg?2',
	'Kappa': 'http://i.imgur.com/ZxRU4z3.png?1',
	'kappapride': 'http://i.imgur.com/GMs8OxU.jpg',
	'Kreygasm': 'https://static-cdn.jtvnw.net/emoticons/v1/41/1.0',
	'lelefp': 'http://i.imgur.com/pWlEKa3.jpg',
	'lelelol': 'http://i.imgur.com/R2g0RHT.gif',
	'Lennyf': 'http://i.imgur.com/FhOwY2P.png',
	'llamacool': 'http://i.imgur.com/X1x3728.gif',
	'llamanoodle': 'http://i.imgur.com/SUZkz5p.gif',
	'llamarawr': 'http://i.imgur.com/KWAQbPu.gif',
	'llamatea': 'http://i.imgur.com/nJnakEU.gif',
	'llamayawn': 'http://i.imgur.com/SVj8kBt.gif',
	'meGusta': 'http://cdn.overclock.net/3/36/50x50px-ZC-369517fd_me-gusta-me-gusta-s.png',
	'MingLee': 'https://static-cdn.jtvnw.net/emoticons/v1/68856/2.0',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'Obama': 'http://i.imgur.com/rBA9M7A.png',
	'oshet': 'http://i.imgur.com/yr5DjuZ.png',
	'PeoplesChamp': 'http://i.imgur.com/QMiMBKe.png',
	'PogChamp': 'https://static-cdn.jtvnw.net/emoticons/v1/88/1.0',
	'RareChar': 'https://cdn.betterttv.net/emote/562b9101a6646e202bcc5447/2x',
	'Sanic': 'http://i.imgur.com/Y6etmna.png',
	'stevo': 'http://imgur.com/Gid6Zjy.png',
	'thumbsup': 'http://i.imgur.com/eWcFLLn.jpg',
	'trollface': 'http://cdn.overclock.net/a/a0/50x50px-ZC-a0e3f9a7_troll-troll-face.png',
	'trumpW': 'https://static-cdn.jtvnw.net/emoticons/v1/35218/1.0',
	'wtfman': 'http://i.imgur.com/kwR8Re9.png',
	'WutFace': 'https://static-cdn.jtvnw.net/emoticons/v1/28087/2.0',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'xoxo': 'http://orig00.deviantart.net/b49d/f/2014/220/5/3/ichigo_not_impressed_icon_by_magical_icon-d7u92zg.png',
	'yayface': 'http://i.imgur.com/anY1jf8.png',
	'yesface': 'http://i.imgur.com/k9YCF6K.png',
	'youdontsay': 'http://r32.imgfast.net/users/3215/23/26/64/smiles/280467785.jpg',
	'feelsmoa': 'http://i.imgur.com/943QIfz.jpg?1',
	'feelsfox': 'http://orig10.deviantart.net/4383/f/2012/172/f/1/victini_lick_avatar_by_neogalactic54-d54daqi.gif',
	'PJSalt': 'http://orig05.deviantart.net/99d1/f/2015/358/a/9/pjsalt_twitch_emote_by_xenoblast1-d9lc7ni.png',
	'feelssylv': 'http://orig08.deviantart.net/5af0/f/2015/115/7/d/shiny_sylveon_lick_icon_by_zeaeevee-d8r173b.gif',
	'feelsesp': 'http://a.deviantart.net/avatars/p/e/pearl-of-violette.gif?4',
	'feelsfurry': 'http://media-cerulean.cursecdn.com/attachments/8/149/635261773285034557.gif',
	'feelshop': 'http://fc05.deviantart.net/fs71/f/2012/299/3/b/lick_icon___hoppip_by_taricalmcacil-d5j1yhv.gif',
	'feelsumb': 'http://orig11.deviantart.net/5e14/f/2011/178/4/0/umbreon_by_9000boy-d3k6h8p.gif',
	'feelsbui': 'http://a.deviantart.net/avatars/r/i/rijaya-vidra.gif?2',
	'feelssky': 'http://static.planetminecraft.com/files/avatar/605325.gif',
	'feelsleaf': 'http://orig08.deviantart.net/6218/f/2011/257/0/3/shiny_leafeon_lick_icon_by_supersilverabsol-d49t0tj.gif',
	'feelsscam': 'http://i3.kym-cdn.com/photos/images/original/000/093/476/Mew_lick_avatar_by_MythicAzurel20110725-22047-2wuksy.gif',
	'feelshayley': 'http://a.deviantart.net/avatars/c/h/chaoni.gif?1',
	'feelseevee': 'http://a.deviantart.net/avatars/e/e/eeveelickplz.gif?1',
	'feelsnatm': 'http://a.deviantart.net/avatars/n/e/neptune-ninja.gif?3',
	'feelsotami': 'http://orig13.deviantart.net/2bc9/f/2013/119/a/3/spiky_eared_pichu_lick_icon_commission_by_poke_lover88-d63htrw.gif',
	'feelsangel': 'http://cdn.imgs.tuts.dragoart.com/how-to-draw-kanade-angel-angel-beats_1_000000012513_7.png',
	'hayleyandjake': 'http://sequence.com/wp-content/uploads/2013/10/chipotle_logo-e1387463876530.png',
	'feelsjay': 'http://i.imgur.com/RIOKSJ3.gif',
	'feelsdragon': 'http://orig11.deviantart.net/62f3/f/2014/140/a/2/dragonite_lick_gif__d_by_timedragonpony-d7j1bq4.gif',
	'feelspop': 'http://orig07.deviantart.net/940d/f/2016/142/a/d/popplio_sprite_animation_by_snivy101-da3d4lj.gif',
	'feelsslime': 'http://orig11.deviantart.net/b2c5/f/2014/345/d/f/free_reuniclus_lick_icon_by_mewtres-d89hx52.gif',
	'feelslugia': 'http://pa1.narvii.com/5859/02cfbad147c6cfa158abca48b595e57de08da3be_hq.gif',
	'feelsnair': 'http://i76.photobucket.com/albums/j23/WWWpeoples/Lick%20Icons/ShinyDragonair.gif',
	'feelstorpid': 'http://a.deviantart.net/avatars/z/a/zapdosrockz.gif?3',
	'feelspsy': 'http://orig07.deviantart.net/1336/f/2012/056/1/c/kadabra_lick_icon_by_dudewheresmylion-d4qykar.gif',
	'feelssui': 'http://l-userpic.livejournal.com/119169976/50630589',
	'feelsresh': 'http://orig00.deviantart.net/7a17/f/2011/196/0/e/reshiramlickicon___request_by_zekrom622-d3suesi.gif',
	'feelssnake': 'http://orig08.deviantart.net/9667/f/2010/099/7/f/arbok_lick_avi_by_zazuandhyenafan.gif',
	'feelsserp': 'http://a.deviantart.net/avatars/x/x/xxxxusernamexxxx.gif?2',
	'feelsglace': 'http://a.deviantart.net/avatars/s/k/skileet44.gif?3',
	'feelssnor': 'http://orig04.deviantart.net/aa43/f/2011/162/3/2/snorlax_licky_by_lycramosa-d3ioajf.gif',
	'feelsmeow': 'http://orig14.deviantart.net/2a17/f/2010/136/8/5/free_meowth_icon_by_mookameedy.gif',
	'feelsdns': 'http://i.imgur.com/zsHvM4L.gif',
	'feelswisp': 'http://orig13.deviantart.net/68b1/f/2010/268/8/5/arcanine_lick_icon__3_by_mushydog-d2zhkl4.gif',
	'feelskip': 'http://victoryroad.net/images/smilies/Mudkip_avatar_by_Frikolin.gif',
	'feelsrai': 'http://a.deviantart.net/avatars/r/a/raichuisawesome5.gif?1',
	'feelslatias': 'http://i2.kym-cdn.com/photos/images/original/000/939/166/d49.gif',
	'feelslatios': 'http://orig07.deviantart.net/746b/f/2011/195/f/b/free_latios_lick_icon_by_supersilverabsol-d3qhmws.gif',
	'feelschik': 'http://orig10.deviantart.net/de15/f/2010/193/9/4/chikorita_free_lick_avatar_by_yakalentos.gif',
	'(blueditto)': 'http://a.deviantart.net/avatars/d/i/ditto9.gif?8',
	'feelsgall': 'http://orig06.deviantart.net/c153/f/2011/220/0/b/galladelickicon___request_by_zekrom622-d45wcts.gif',
	'feelsally': 'http://a.deviantart.net/avatars/m/i/miss-vulpix.gif?2',
	'feelsarti': 'http://orig11.deviantart.net/253b/f/2011/255/a/1/articuno_for_stephany_chan___3_by_duhgetsu-d49oq2g.gif',
	'feelsflare': 'http://orig11.deviantart.net/262c/f/2011/187/6/1/free_flareon_lick_icon_by_supersilverabsol-d3l8e0c.gif',
	'feelsray': 'http://orig03.deviantart.net/4cf3/f/2012/011/5/f/rayquaza_lick_icon___request_by_roro_victini-d4m0pda.gif',
	'feelsskit': 'http://orig08.deviantart.net/2e75/f/2011/036/5/0/skitty_lickie_by_blankblankety-d38vhgh.gif',
	'feelsalpha': 'http://a.deviantart.net/avatars/k/i/kimyri.gif?1',
	'feelsemol': 'http://wiki.pokemonpl.net/images/b/b9/Przfffddjdjdjddjdjdjdjjdjdjdyk%C5%82ad.gif',
	'feelsdoctor': 'http://data.whicdn.com/avatars/25857926/thumb.jpg?1409831930',
	'feelsmeryl': 'http://i.imgur.com/MlTIDTh.jpg',
	
	
	
	
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
