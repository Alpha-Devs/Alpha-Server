'use strict';

const http = require('http');
const AnimalsHelp = '|raw|<div class="infobox"><strong>Animals Plugin by <font color="deeppink">Audinory</font><strong><br><ul><li>/animals cat - Displays a cat</li><li>/animals kitten - Displays a kitten</li><li>/animals dog - Displays a doge</li><li>/animals puppy - Displays a puppy</li><li>/animals bunny - Displays a bunny</li><li>/animals otter - Displays an otter</li><li>/animals pokemon - Displays a pokemon</li><li>/animals zoo - Displays a random animal</li></ul></div>';

exports.commands = {

    animals: 'testimals', //
    testimals: function(target, room, user) {
        let tarId = toId(target);
        let validTargets = {
            'cat': 'cat',
            'otter': 'otter',
            'dog': 'dog',
            'bunny': 'bunny',
            'zoo': 'zoo',
            'pokemon': 'pokemon',
            'kitten': 'kitten',
            'puppy': 'puppy'
        };
        let validTarget = validTargets[tarId];
        // If you have any more feel free to outsource or ask me and Ill go looking.
        if (!this.runBroadcast()) return;
        if (!target) return this.sendReply(AnimalsHelp);
        if (!validTarget) return this.parse("/animals");
        if (tarId === "random") tarId = "animals";
        let self = this;
        let reqOpt = {
            hostname: 'api.giphy.com',
            path: '/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + tarId,
            method: 'GET',
        };
        let req = http.request(reqOpt, function(res) {
            res.on('data', function(chunk) {
                try {
                    let data = JSON.parse(chunk);
                    let output = '<center><img src="' + data.data["image_url"] + '" width="400"></center>';
                    if (!self.runBroadcast()) return;
                    if (data.data["image_url"] === undefined) {
                        self.errorReply("404 Error: No Images found!");
                        return room.update();
                    } else {
                        self.sendReplyBox(output);
                        return room.update();
                    }
                } catch (e) {
                    self.errorReply("Sorry Giphy is under a lot of stress right now!");
                    return room.update();
                }
            });
        });
        req.end();
    },
};
