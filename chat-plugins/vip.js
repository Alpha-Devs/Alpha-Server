'use strict';

global.isVip = function (user) {
	if (!user) return;
	if (typeof user === 'Object') user = user.userid;
	let vip = Db('vips').get(toId(user));
	if (vip === 1) return true;
	return false;
};

exports.commands = {
	vip: {
		give: function (target, room, user) {
			if (!this.can('declare')) return false;
			let vipUser = toId(target);
		        if (!target || target.indexOf(',') < 0) ;
                        let parts = target.split(',');
	     	        let username = parts[0];
		        if (!vipUser) return this.parse('/help vip');
			if (isVip(vipUser)) return this.errorReply(vipUser + ' is already a vip.');
			Db('vips').set(vipUser, 1);
		        if (Users.get(username)) Users(username).popup(user.name + " You have recieved VIP status from "+user.name );
			this.sendReply(vipUser + ' has been granted with vip status.');
		},
		take: function (target, room, user) {
			if (!this.can('declare')) return false;
			let vipUser = toId(target);
			if (!target || target.indexOf(',') < 0) ;
                        let parts = target.split(',');
	     	        let username = parts[0];
			if (!vipUser) return this.parse('/help vip');
			if (!isVip(vipUser)) return this.errorReply(vipUser + ' is not a vip.');
			Db('vips').delete(vipUser);
			if (Users.get(username)) Users(username).popup(user.name + " Your VIP status have been removed by ~ "+user.name );
			this.sendReply(vipUser + '\'s vip status has been taken.');
		},
		list: function (target, room, user) {
			if (!this.can('declare')) return false;
			if (!Object.keys(Db('vips').object()).length) return this.errorReply('There seems to be no user with vip status.');
			this.sendReplyBox('<center><b><u>Vip Users</u></b></center>' + '<br /><br />' + Object.keys(Db('vips').object()).join('<br />'));
		},
	},
};
