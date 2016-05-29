//This is a file for miscellaneous commands.

exports.commands = {
  hc: function(target, room, user) {
    return this.parse('/hotpatch chat')
  }
	pus: 'pmupperstaff',
	pmupperstaff: function(target, room, user) {
		if (!target) return this.sendReply('/pmupperstaff [message] - Sends a PM to every upper staff');
		if (!this.can('pban')) return false;
		Gold.pmUpperStaff(target, false, user.name);
	}
}
