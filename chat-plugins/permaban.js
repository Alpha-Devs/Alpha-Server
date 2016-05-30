const permaDataFile = 'permaban.json';

var fs = require('fs');

global.Permaban = {
	permaLock: {},
	permaBan: {}
};

if (!fs.existsSync(permaDataFile))
	fs.writeFileSync(permaDataFile, JSON.stringify(Permaban));

Permaban = JSON.parse(fs.readFileSync(permaDataFile).toString());

function writePermaBanData() {
	fs.writeFileSync(permaDataFile, JSON.stringify(Permaban));
}

exports.commands = {
	permaban: function (target, room, user) {
		if (!this.can('permaban')) return false;
		target = this.splitTarget(target);
		var userT = this.targetUser;
		if (!userT) return this.sendReply("User '" + this.targetUsername + "' does not exist.");
		if (userT.can('staff')) return this.sendReply("User '" + this.targetUsername + "' is a staff member. Please demote before permabanning.");
		if (Permaban.permaBan[userT.userid]) return this.sendReply("User '" + this.targetUsername + "' already perma banned.");
		Permaban.permaBan[userT.userid] = 1;
		userT.popup("" + user.name + " has banned you." + (target ? "\n\nReason: " + target : ""));
		userT.ban();
		this.addModCommand(this.targetUsername + " was permanently banned by " + user.name + (target ? ('. (' + target + ')') : '.'));
		writePermaBanData();
	},
	
	unpermaban: 'permaunban',
	permaunban: function (target, room, user) {
		if (!this.can('permaban')) return false;
		var userT = toId(target);
		if (!Permaban.permaBan[userT]) return this.sendReply("User '" + target + "' is not perma banned.");
		delete Permaban.permaBan[userT];
		this.addModCommand(target + " was removed from the blacklist by " + user.name);
		this.parse('/unban ' + target);
		writePermaBanData();
	},
	
	permalock: function (target, room, user) {
		if (!this.can('permaban')) return false;
		target = this.splitTarget(target);
		var userT = this.targetUser;
		if (!userT) return this.sendReply("User '" + this.targetUsername + "' does not exist.");
		if (userT.can('staff')) return this.sendReply("User '" + this.targetUsername + "' is an staff member. Please demote before permalocking.");
		if (Permaban.permaLock[userT.userid]) return this.sendReply("User '" + this.targetUsername + "' already perma locked.");
		Permaban.permaLock[userT.userid] = 1;
		userT.popup("" + user.name + " has permanently locked you from talking in chats, battles, and PMing regular users." + (target ? "\n\nReason: " + target : ""));
		userT.lock();
		this.addModCommand(this.targetUsername + " was permanently locked by " + user.name + (target ? ('. (' + target + ')') : '.'));
		writePermaBanData();
	},
	
	unpermalock: 'permaunlock',
	permaunlock: function (target, room, user) {
		if (!this.can('permaban')) return false;
		var userT = toId(target);
		if (!Permaban.permaLock[userT]) return this.sendReply("User '" + target + "' is not perma locked.");
		delete Permaban.permaLock[userT];
		this.addModCommand(target + " was removed from the permalock list by " + user.name);
		this.parse('/unlock ' + target);
		writePermaBanData();
	},
	
	permalist: function (target, room, user) {
		if (!this.can('permaban')) return false;
		var banstr = '<b><font color="#e65c00"><u>Banned Users:</font></u></b> ' + Object.keys(Permaban.permaBan).sort().join(", ");
		var lockstr = '<b><font color="#b30000"><u>Locked Users:</font></u></b> ' + Object.keys(Permaban.permaLock).sort().join(", ");
		this.sendReplyBox(banstr + '<br /><br />' + lockstr);
		
	},
	
	permahelp: function (target, room, user) {
		if (!this.can('permaban')) return false;
		return this.sendReplyBox(
			'<b><u><font color="#cc33ff">Permaban Commands:</u></b></font><br /><br />' +
			'/permaban [username] - permanently bans a user. Requires: & ~<br />' +
			'/permalock [username] - permanently locks a user. Requires: & ~<br />' +
			'/permalist [username] - lists all the permanently locked/banned users. Requires: & ~<br />'
		);
	}
	
}
