var fs = require('fs');
 
function loadDevs() {
    try {
        Users.devs = JSON.parse(fs.readFileSync('config/devs.json', 'utf8'));
    } catch (e) {
        Users.devs = {};
    }
}
if (!Users.devs) loadDevs();
 
function saveDevs() {
    fs.writeFileSync('config/devs.json', JSON.stringify(Users.devs));
}
 
exports.commands = {
    givedev: function (target, room, user) {
        if(user.userid !== 'otami') return false;
        if (!target) return this.sendReply("Usage: /givedev [user]");
        if (Users.devs[toId(target)]) return this.sendReply(target + " already has the status.");
        var targetUser = Users(target);
 
        if (!targetUser) return this.sendReply("User \"" + target + "\" not found.");
        if (!targetUser.connected) return this.sendReply(targetUser.name + " is not online.");
        if (!targetUser.registered) return this.sendReply(targetUser.name + " is not registered.");
 
        Users.devs[targetUser.userid] = 1;
        targetUser.popup("You have received Developer status from " + user.name);
        this.privateModCommand("(" + user.name + " has given Alpha Developer status to " + targetUser.name + ")");
        saveDevs();
    },
 
    removedev: function (target, room, user) {
        if(user.userid !== 'otami') return false;
        if (!target) return this.sendReply("Usage: /removedev [user]");
        if (!Users.devs[toId(target)]) return this.sendReply("User \"" + target + "\" is not an Alpha Developer.");
 
        delete Users.devs[toId(target)];
        saveDevs();
        this.privateModCommand("(" + user.name + " has removed Alpha Developer status from " + target + ")");
    },
};
