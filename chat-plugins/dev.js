/**
 *
 * Vip.js Created and Modified by Richard
 *
 */

'use strict';

global.isDev = function (user) {
	if (!user) return;
	if (typeof user === 'Object') user = user.userid;
	let dev = Db('devs').get(toId(user));
	if (dev === 1) return true;
	return false;
};

exports.commands = {
	dev: {
		give: function (target, room, user) {
			if (!this.can('declare')) return false;
			let devUser = toId(target);
		    if (!target || target.indexOf(',') < 0) ;
            let parts = target.split(',');
	     	let username = parts[0];
		    if (!devUser) return this.parse('/help dev');
			if (isDev(devUser)) return this.errorReply(devUser + ' is already a dev.');
			Db('devs').set(devUser, 1);
		if (Users.get(username)) Users(username).popup(user.name + " You have recieved DEV status from ~"+user.name );
			this.sendReply(devUser + ' has been granted with dev status.');
		},
		take: function (target, room, user) {
			if (!this.can('declare')) return false;
			let devUser = toId(target);
			if (!target || target.indexOf(',') < 0) ;
            let parts = target.split(',');
	     	let username = parts[0];
			if (!devUser) return this.parse('/help dev');
			if (!isDev(devUser)) return this.errorReply(devUser + ' is not a dev.');
			Db('devs').delete(devUser);
			if (Users.get(username)) Users(username).popup(user.name + " Your DEV status have been removed by ~ "+user.name );
			this.sendReply(devUser + '\'s dev status has been taken.');
		},
		list: function (target, room, user) {
			if (!this.can('declare')) return false;
			if (!Object.keys(Db('devs').object()).length) return this.errorReply('There seems to be no user with dev status.');
			this.sendReplyBox('<center><b><u>DEV Users</u></b></center>' + '<br /><br />' + Object.keys(Db('devs').object()).join('<br />'));
		},
	},
};
