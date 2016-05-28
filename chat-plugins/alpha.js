//This is a file for miscellaneous commands.

exports.commands = {
  hc: function(target, room, user) {
    return this.parse('/hotpatch chat')
  }
  cas: function(target,room,user) {
    return this.parse('/customavatar set')
  }
}
