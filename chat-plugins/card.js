'use strict';

var cards = require('../card-data.js');

var colors = {
	Mythic: '#D82A2A',
	Legendary: '#E8AB03',
	Epic: '#73DF14',
	Rare: '#2DD1B6',
	Uncommon: '#2D3ED1',
	Common: '#000',
};

var shop = [ //Actual shop display
	['XY-Base', 'Get three cards from the first pack released in the Pokemon XY set.', 7],
	['XY-Flashfire', 'Get three cards from the Flashfire pack released in the Pokemon XY set.', 7],
	['XY-Furious Fists', 'Get three cards from the Furious Fists pack released in the Pokemon XY set.', 7],
	['XY-Phantom Forces', 'Get three cards from the Phantom Forces pack released in the Pokemon XY set.', 7],
	['XY-Primal Clash', 'Get three cards from the Primal Clash pack released in the Pokemon XY set.', 7],
	['XY-Roaring Skies', 'Get three cards from the Roaring Skies pack released in the Pokemon XY set.', 7],
	//['UU-Pack', 'Get three cards from the UU tier.', 10]
];
//Shop used in cardCache to reduce RAM usage of card caching
var packShop = ['XY-Base', 'XY-Flashfire', 'XY-Furious Fists', 'XY-Phantom Forces', 'XY-Primal Clash', 'XY-Roaring Skies', 'Double Crisis', 'Water', 'Fire', 'Fighting', 'Fairy', 'Dragon', 'Colorless', 'Psychic', 'Lightning', 'Darkness', 'Grass', 'OU-Pack', 'UU-Pack', 'Uber-Pack', 'PU-Pack', 'NU-Pack', 'RU-Pack', 'LC-Pack', 'BL-Pack', 'BL2-Pack', 'BL3-Pack', 'Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'Gen6', 'Metal', 'Trainer', 'Supporter', 'Item', 'Stadium', 'EX-Pack', 'Legendary', 'Full', 'Event'];
var tourCardRarity = ['No Card', 'Common', 'Uncommon', 'Rare', 'Epic', 'Epic', 'Legendary', 'Legendary', 'Mythic'];
var cardRarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'];
var allCards = ['absol', 'accelgor', 'acetrainer', 'acrobike', 'aegislash', 'aegislash2', 'aegislash3', 'aegislashex', 'aggronex', 'aggronexfull', 'aggronmagma', 'aggronspiritlink', 'alakazambaseset', 'alomomola', 'altaria', 'altariadelta', 'altariafull', 'amaura', 'aquadiffuser', 'arbok', 'archiesaceinthehole', 'archiesaceintheholefull', 'aromatisse', 'aronmagma', 'articuno', 'articunodelta', 'aurorus', 'avalugg', 'az', 'azfull', 'azumarill', 'azumarilldelta', 'bagon', 'bagon2', 'baltoymagma', 'banette', 'banettedelta', 'barbaracle', 'barboach', 'battlecompressor', 'battlereporter', 'battlereporterfull', 'beartic', 'beautifly', 'beedrill', 'beedrill2',
'bellsprout', 'bergmite', 'bibarel', 'bibarel2', 'bidoof', 'bidoof2', 'bidoof3', 'bidoofdelta', 'binacle', 'binacle2', 'bisharp', 'bisharp2', 'blacksmith', 'blastoisebaseset', 'blastoiseex', 'blastoiseex2', 'blastoiseexfull', 'blaziken', 'blaziken2', 'blazikenex', 'blissey', 'boldore', 'bouffalant', 'braixen', 'braixen2', 'breloom', 'breloom2', 'bronzong', 'bronzong2', 'bronzor', 'buizel', 'buneary', 'bunnelby', 'bunnelby2', 'bunnelby3', 'bunnelby4', 'bunnelbydelta', 'butterfree', 'cameruptex', 'cameruptexfull', 'cameruptmagma', 'carbink', 'carbink2', 'carvahnaaqua', 'cascoon', 'cassius', 'caterpie', 'championsfestival', 'chandelure', 'chansey', 'chanseybaseset',
'charizardbaseset', 'charizardex', 'charizardex2', 'charizardex3', 'charizardex4', 'charizardexfull', 'chesnaught', 'chesnaught2', 'chesnaughtex', 'chespin', 'chespin2', 'chespin3', 'chinchou', 'clamperl', 'clauncher', 'clauncher2', 'clawitzer', 'claydolmagma', 'clefable', 'clefairy', 'clefairy2', 'clefairybaseset', 'cloyster', 'combusken', 'combusken2', 'conkeldurr', 'corphish', 'corsola', 'crawdaunt', 'crobat', 'croconaw', 'crushinghammer', 'cubchoo', 'darknessenergy', 'darkrai', 'dedenne', 'dedenne2', 'deino', 'delcatty', 'delcatty2', 'delphox', 'delphox2', 'delphoxex', 'deoxys', 'dialgaex', 'diancie', 'diancieex', 'diggersby', 'diggersby2', 'diggersby3', 'diglett',
'dimensionvalley', 'ditto', 'diveball', 'dodrio', 'doduo', 'doublade', 'doublade2', 'doubleaquaenergy', 'doublecolorlessenergy', 'doubledragonenergy', 'doublemagmaenergy', 'dragalge', 'dragalge2', 'dragonair', 'dragonite', 'dragonitedelta', 'dragoniteex', 'dragoniteexfull', 'drapion', 'dratini', 'drillbur', 'drowzee', 'druddigon', 'dugtrio', 'dunsparce', 'dunsparce2', 'durant', 'dusclops', 'dusknoir', 'duskull', 'dustox', 'dustoxdelta', 'eelektrik', 'eelektrikdelta', 'eelektross', 'eevee', 'ekans', 'electabuzz', 'electivire', 'electrike', 'electrike2', 'electrikedelta', 'electrode', 'electrode2', 'emolgaex', 'emolgaexfull', 'enhancedhammer', 'energyretrieval', 'energyswitch',
'escaperope', 'escavalier', 'espurr', 'evosoda', 'excadrill', 'excadrilldelta', 'exeggcute', 'exeggutor', 'exploud', 'expshare', 'fairyenergy', 'fairygarden', 'farfetchd', 'fearow', 'fearow2', 'feebas', 'feebas2', 'fennekin', 'fennekin2', 'fennekin3', 'feraligatr', 'fierytorch', 'fightingenergy', 'fightingstadium', 'finneon', 'fireenergy', 'flabebe', 'flabebe2', 'fletchinder', 'fletchinder2', 'fletchinder3', 'fletchinder4', 'fletchling', 'fletchling2', 'fletchling3', 'fletchling4', 'fletchling5', 'floatzel', 'floette', 'floette2', 'florges', 'florgesex', 'florgesexfull', 'flygon', 'flygon2', 'focussash', 'forretress', 'fossilresearcher', 'fossilresearcherfull', 'freshwaterset',
'frillish', 'froakie', 'froakie2', 'froakie3', 'frogadier', 'frogadier2', 'fullheal', 'furfrou', 'furfrou2', 'furfrou3', 'furfrou4', 'furfrou5', 'furret', 'galladeex', 'galladeexfull', 'galladespiritlink', 'galvantula', 'garchompex', 'gardevoirex', 'gardevoirexfull', 'gardevoirspiritlink', 'gengarex', 'gengarexfull', 'gengarspiritlink', 'geodude', 'gigalith', 'girafarig', 'glaceon', 'gligar', 'gligar2', 'gliscor', 'gliscor2', 'gogoat', 'gogoat2', 'golbat', 'golem', 'golett', 'golurk', 'goodra', 'goodra2', 'goomy', 'goomy2', 'gorebyss', 'gorebyssdelta', 'gothita', 'gothitelle', 'gothorita', 'gourgeist', 'gourgeist2', 'granbull', 'grassenergy', 'graveler', 'greatball',
'greninja', 'greninja2', 'greninja3', 'greninjaex', 'grimeraqua', 'groudon', 'groudonex', 'groudonex2', 'groudonexfull', 'groudonexmagmafull', 'groudonspiritlink', 'grovyle', 'grumpig', 'gulpin', 'gurdurr', 'gyaradosbaseset', 'handscope', 'hardcharm', 'hariyama', 'hawlucha', 'hawlucha2', 'hawluchaex', 'headringer', 'healingscarf', 'heatran', 'heliolisk', 'heliolisk2', 'heliolisk3', 'helioptile', 'helioptile2', 'helioptile3', 'heracrossex', 'heracrossexfull', 'herbalenergy', 'herdier', 'hippopotas', 'hippowdon', 'hitmonchan', 'hitmonchanbaseset', 'hitmonlee', 'hitmontop', 'honchkrow', 'honedge', 'honedge2', 'honedge3', 'honedge4', 'hoopaex', 'horsea', 'huntail',
'hydreigon', 'hydreigonex', 'hydreigonexfull', 'hypno', 'illumise', 'illumise2', 'inkay', 'inkay2', 'inkay3', 'inkay4', 'jammingnet', 'jawfossil', 'jellicent', 'jigglypuff', 'jigglypuff2', 'jirachi', 'joltik', 'jynx', 'kakuna', 'kakuna2', 'kangaskhanex', 'kangaskhanexfull', 'karrablast', 'kingdra', 'kingdradelta', 'kingdrafull', 'kingler', 'klefki', 'klefki2', 'klefki3', 'korrina', 'korrinafull', 'krabby', 'krokorok', 'krokorok2', 'krookodile', 'krookodileex', 'kyogre', 'kyogreex', 'kyogreex2', 'kyogreexaquafull', 'kyogreexfull', 'laironmagma', 'lampent', 'landorus', 'lanturn', 'lapras', 'latiosex', 'latiosexfull', 'latiosspiritlink', 'leafeon', 'leavanny',
'ledian', 'ledyba', 'lickilicky', 'lickitung', 'liepard', 'lightningenergy', 'lillipup', 'linoone', 'litleo', 'litleo2', 'litleo3', 'litwick', 'lombre', 'lopunny', 'lotad', 'loudred', 'lucarioex', 'lucarioexfull', 'ludicolo', 'ludicolodelta', 'lumineon', 'lunatone', 'luvdisc', 'luxio', 'luxray', 'lysandre', 'lysandrestrumpcard', 'lysandrestrumpcardfull', 'machamp', 'machamp2', 'machampbaseset', 'machoke', 'machop', 'magcargo', 'magcargo2', 'magcargodelta', 'magmapointer', 'magmar', 'magmortar', 'magnetonbaseset', 'magnezoneex', 'magnezoneexfull', 'maintenance', 'makuhita', 'malamar', 'malamar2', 'malamarex', 'malamarexfull', 'manaphy',
'manectric', 'manectric2', 'manectricex', 'manectricexfull', 'manectricspiritlink', 'maractus', 'marill', 'marshtomp', 'masquerain', 'maxieshiddenballtrick', 'maxieshiddenballtrickfull', 'maxrevive', 'medicham', 'medichamdelta', 'meditite', 'megaaggronex', 'megaaggronexfull', 'megablastoiseex', 'megacharizardex', 'megacharizardexa', 'megacharizardexb', 'megadiancieex', 'megagalladeex', 'megagalladeexfull', 'megagardevoirex', 'megagardevoirexfull', 'megagengarex', 'megaheracrossex', 'megaheracrossex2', 'megakangaskhanex', 'megakangaskhanex2', 'megalatiosex', 'megalatiosexfull', 'megalucarioex', 'megalucarioex2', 'megamanectricex', 'megametagrossex',
'megarayquazaex', 'megarayquazaex2', 'megarayquazaex3', 'megarayquazaexfull', 'megaturbo', 'megavenusaurex', 'meowstic', 'meowstic2', 'meowth', 'metagrossex', 'metalenergy', 'metapod', 'mewancient', 'mewtwobaseset', 'mienfoo', 'mienshao', 'mightyena', 'mightyena2', 'mightyenaaqua', 'mightyenamagma', 'milotic', 'milotic2', 'miltank', 'miltank2', 'minun', 'mountainring', 'mrmime', 'mrmime2', 'mudkip', 'mudkip2', 'mukaqua', 'munna', 'murkrow', 'muscleband', 'musharna', 'mysteryenergy', 'natu', 'natudelta', 'nidokingbaseset', 'nidoqueen', 'nidoqueendelta', 'nidoranf', 'nidorina', 'nincanda', 'ninetales', 'ninetalesbaseset', 'ninjask', 'noibat', 'noivern',
'nosepass', 'numelmagma', 'nuzleaf', 'pachirisu', 'palpad', 'pancham', 'pancham2', 'pangoro', 'pangoro2', 'panpour', 'panpour2', 'pansage', 'pansage2', 'pansear', 'pansear2', 'patrat', 'pawniard', 'pawniard2', 'pelipper', 'phantump', 'pidgeot', 'pidgeotto', 'pidgey', 'pidove', 'pikachu', 'pikachu2', 'pikachu3', 'pineco', 'plusle', 'pokeball', 'pokemoncatcher', 'pokemoncenterlady', 'pokemonfanclub', 'politoed', 'poliwag', 'poliwhirl', 'poliwrath', 'poliwrathbaseset', 'ponyta', 'poochyena', 'poochyena2', 'poochyenaaqua', 'poochyenamagma', 'potion', 'primalgroudonex', 'primalgroudonex2', 'primalgroudonex3', 'primalkyogreex', 'primalkyogreex2', 'primalkyogreex3',
'probopass', 'professorbirchsobservations', 'professorbirchsobservationsfull', 'professorsletter', 'professorsycamore', 'protectioncube', 'psychicenergy', 'pumpkaboo', 'pumpkaboo2', 'purrloin', 'pyroar', 'pyroar2', 'quilladin', 'quilladin2', 'qwilfish', 'raichu', 'raichu2', 'raichubaseset', 'rainbowenergy', 'rapidash', 'rarecandy', 'rayquazaex', 'rayquazaex2', 'rayquazaex3', 'rayquazaexfull', 'rayquazaspiritlink', 'redcard', 'regigigas', 'regirockdelta', 'repeatball', 'reshiram', 'revive', 'rhydon', 'rhydon2', 'rhyhorn', 'rhyhorn2', 'rhyperior', 'rhyperior2', 'rhyperiordelta', 'robosubstitute', 'roggenrola', 'rollerskates', 'roselia', 'roserade', 'roughseas',
'sableye', 'sacredash', 'salamence', 'sandfossil', 'sandile', 'sandile2', 'scatterbug', 'sceptile', 'sceptiledelta', 'sceptileex', 'scolipede', 'scorchedearth', 'scrafty', 'scrafty2', 'scraggy', 'scraggy2', 'seadra', 'sealeo', 'sealeo2', 'sealeoaqua', 'seedot', 'seismitoadex', 'seismitoadexfull', 'sentret', 'seviperaqua', 'sewaddle', 'shadowcircle', 'sharpedoaqua', 'sharpedoex', 'sharpedoexfull', 'shauna', 'shayminskyex', 'shayminskyexfull', 'shedinja', 'shelgon', 'shellder', 'shelmet', 'shieldenergy', 'shiftry', 'shiftry2', 'shinx', 'shrineofmemories', 'shroomish', 'shroomish2', 'shuppet', 'silcoon', 'silentlab', 'simipour', 'simisage', 'simisear',
'skarmory', 'skarmory2', 'skarmoryex', 'skarmoryexfull', 'skiddo', 'skiddo2', 'skitty', 'skitty1', 'skitty2', 'skorupi', 'skrelp', 'skuntank', 'skyfield', 'slaking', 'slakoth', 'sliggoo', 'sliggoo2', 'slugma', 'slugma2', 'slugma3', 'slurpuff', 'slurpuff2', 'slurpuff3', 'sneasel', 'sneasel2', 'snorlax', 'snorlax2', 'snubbull', 'solrock', 'sparklingrobe', 'spearow', 'spearow2', 'spewpa', 'spheal', 'spheal2', 'spheal3', 'sphealaqua', 'spinda', 'spiritomb', 'spoink', 'spritzee', 'spritzee2', 'starmie', 'starmie2', 'startlingmegaphone', 'staryu', 'staryu2', 'steelshelter', 'steven', 'stoutland', 'strongenergy', 'stunky', 'stunky2', 'superpotion', 'superscoopup', 'surskit',
'swablu', 'swadloon', 'swalot', 'swampert', 'swampertdelta', 'swampertex', 'swellow', 'swellow2', 'swellowdelta', 'swirlix', 'swirlix2', 'swirlix3', 'switch', 'sylveon', 'sylveon2', 'taillow', 'taillow2', 'talonflame', 'talonflame2', 'talonflame3', 'tangela', 'tangrowth', 'targetwhistle', 'tauros', 'teamaquaadmin', 'teamaquagrunt', 'teamaquasgreatball', 'teamaquassecretbase', 'teamflaregrunt', 'teammagmaadmin', 'teammagmagrunt', 'teammagmasgreatball', 'teammagmassecretbase', 'teammates', 'teammatesfull', 'tentacool', 'tentacooldelta', 'tentacruel', 'thundurus', 'thundurusex', 'thundurusexfull', 'tierno', 'timburr', 'togekiss', 'togekissdelta', 'togepi', 'togetic',
'toolretriever', 'torchic', 'torchic2', 'torchic3', 'torchicdelta', 'torkoal', 'tornadus', 'totodile', 'toxicroakex', 'toxicroakexfull', 'trainersmail', 'trainingcenter', 'tranquill', 'trapinch', 'trapinch2', 'treecko', 'treecko2', 'trevenant', 'trevenant2', 'trevenantex', 'trevenantexfull', 'trevor', 'trickcoin', 'trickshovel', 'tropius', 'tynamo', 'tyrantrum', 'tyrunt', 'ultraball', 'unfezant', 'unfezantdelta', 'venipede', 'venomoth', 'venonat', 'venusaurbaseset', 'venusaurex', 'venusaurex2', 'venusaurexfull', 'vibrava', 'vibrava2', 'victini', 'victreebel', 'vigoroth', 'vivillon', 'volbeat', 'volbeat2', 'voltorb', 'voltorb2', 'vsseeker', 'vulpix',
'wailordex', 'wailordexfull', 'wally', 'wallyfull', 'walrein', 'walrein2', 'walreinaqua', 'watchog', 'waterenergy', 'weaknesspolicy', 'weavile', 'weedle', 'weedle2', 'weedle3', 'weepinbell', 'whirlipede', 'whiscash', 'whiscashdelta', 'whismur', 'widelens', 'wigglytuff', 'wigglytuff2', 'wingull', 'winona', 'winonafull', 'wobbuffet', 'wonderenergy', 'wurmple', 'xatu', 'xerneas', 'xerneas2', 'xerneas3', 'xerneasex', 'xerneasex2', 'xerneasex3', 'xerosic', 'xerosicfull', 'yanma', 'yanmega', 'yveltal', 'yveltal2', 'yveltal3', 'yveltalex', 'yveltalex2', 'yveltalex3', 'zangoosemagma', 'zapdos', 'zapdosbaseset', 'zekrom', 'zigzagoon', 'zoroark', 'zorua', 'zubat', 'zweilous',
];
//System Command: you should prolly never put anything in here
var cleanShop = [];
var cleanCard = [];

var rareCache = []; //Used to cache cards for tours
var cardCache = []; //Used to cache cards in packs
var userPacks = {}; //Used to store users unopened packs

function cachePacks() {
	for (var i = 0; i < packShop.length; i++) {
		cardCache.push(new Array());
		for (var key in cards) {
			if (cards.hasOwnProperty(key)) {
				var obj = cards[key];
				if (obj.hasOwnProperty('collection') && obj.collection.indexOf(packShop[i]) > -1) cardCache[i].push(key);
			}
		}
	}
	for (i = 0; i < packShop.length; i++) {
		cleanShop.push(toId(packShop[i]));
	}
}

function cacheRarity() {
	for (var i = 0; i < cardRarity.length; i++) {
		rareCache.push(new Array());
		for (var key in cards) {
			if (cards.hasOwnProperty(key)) {
				var obj = cards[key];
				if (obj.hasOwnProperty('rarity') && obj.rarity.indexOf(cardRarity[i]) > -1) rareCache[i].push(key);
			}
		}
	}
	for (i = 0; i < cardRarity.length; i++) {
		cleanCard.push(toId(cardRarity[i]));
	}
}

global.tourCard = function (tourSize, userid) {
	if (tourSize > 32) tourSize = 32;
	var tourRarity = tourCardRarity[Math.floor(tourSize / 4)];
	var cacheValue = rareCache[cleanCard.indexOf(toId(tourRarity))];
	var card = cacheValue[Math.round(Math.random() * (cacheValue.length - 1))];
	if (tourRarity === 'No Card') return;
	addCard(userid, card);
	return [cards[card].rarity, cards[card].title, cards[card].name];
};

function addCard(name, card) {
	var newCard = {};
	newCard.title = cards[card].title;
	newCard.card = cards[card].card;
	newCard.name = cards[card].name;
	newCard.rarity = cards[card].rarity;
	newCard.points = cards[card].points;

	var userid = toId(name);
	Db('cards').set(userid, Db('cards').get(userid, []).concat([newCard]));
	Db('points').set(userid, Db('points').get(userid, 0) + newCard.points);
}

function getShopDisplay(shop) {
	var display = "<table width='100%' border='1' style='border-collapse: collapse; color: #444; box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);' cellpadding='5'>" +
		"<tr><th class='card-th' style='background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9); box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset;'>Command</th><th class='card-th' style='background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9); box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset;'>Description</th><th class='card-th' style='background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9); box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset;'>Cost</th></tr>";
	var start = 0;
	while (start < shop.length) {
		display += "<tr>" + "<td class='card-td'><button name='send' value='/buypack " + shop[start][0] + "' style='border-radius: 12px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2) inset;'><b>" + shop[start][0] + "</b></button></td>" +
			"<td class='card-td'>" + shop[start][1] + "</td>" +
			"<td class='card-td'>" + shop[start][2] + "</td>" +
			"</tr>";
		start++;
	}
	display += "</table><center>To buy a pack from the shop, use /buypack <em>pack</em>.</center>";
	return display;
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

cachePacks();
cacheRarity();

exports.commands = {
	packs: 'pack',
	pack: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) target = user.name;
		target = toId(target);
		if (!userPacks[target] || userPacks[target].length === 0) {
			return this.sendReply((target === user.userid ? 'You have' : target + ' has') + ' no packs.');
		}
		this.sendReply('|raw|<u><b>List of packs:</b></u>');
		for (i = 0; i < userPacks[target].length; i++) {
			this.sendReply(toTitleCase(userPacks[i]));
		}
	},

	buypacks: 'buypack',
	buypack: function (target, room, user) {
		if (!target) return this.sendReply('/buypack - Buys a pack from the pack shop. Alias: /buypacks');
		var self = this;
		var packId = toId(target);
		var amount = Db('money').get(user.userid, 0);
		if (cleanShop.indexOf(packId) < 0) return self.sendReply('This is not a valid pack. Use /packshop to see all packs.');
		var shopIndex = cleanShop.indexOf(toId(target));
		if (packId !== 'xybase' && packId !== 'xyfuriousfists' && packId !== 'xyflashfire' && packId !== 'xyphantomforces' && packId !== 'xyroaringskies' && packId !== 'xyprimalclash') return self.sendReply('This pack is not currently in circulation.  Please use /packshop to see the current packs.');
		var cost = shop[shopIndex][2];
		if (cost > amount) return self.sendReply('You need ' + (cost - amount) + ' more bucks to buy this card.');
		var total = Db('money').set(user.userid, amount - cost).get(user.userid);
		var pack = toId(target);
		self.sendReply('|raw|You have bought ' + target + ' pack for ' + cost +
			' bucks. Use <button name="send" value="/openpack ' +
			pack + '"><b>/openpack ' + pack + '</b></button> to open your pack.');
		self.sendReply('You have until the server restarts to open your pack.');
		if (!userPacks[user.userid]) userPacks[user.userid] = [];
		userPacks[user.userid].push(pack);
		if (room.id !== 'lobby') room.addRaw(user.name + ' has bought <b>' + target + ' pack </b> from the shop.');
		room.update();
	},

	packshop: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|' + getShopDisplay(shop));
	},

	open: 'openpack',
	openpacks: 'openpack',
	openpack: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) {
			this.sendReply('/openpack [pack] - Open a Pokemon Card Pack. Alias: /open, /openpacks');
			return this.parse('/packs');
		}
		if (cleanShop.indexOf(toId(target)) < 0) return this.sendReply('This pack does not exist.');
		if (!userPacks[user.userid] || userPacks[user.userid].length === 0) return this.sendReply('You have no packs.');
		if (userPacks[user.userid].indexOf(toId(target)) < 0) return this.sendReply('You do not have this pack.');
		for (var i = 0; i < 3; i++) {
			var pack = toId(target);
			var cacheValue = cardCache[cleanShop.indexOf(toId(target))];
			var card = cacheValue[Math.round(Math.random() * (cacheValue.length - 1))];
			addCard(user.userid, card);
			var cardName = cards[card].name;
			var packName = packShop[cleanShop.indexOf(toId(target))];
			this.sendReplyBox(user.name + ' got <font color="' + colors[cards[card].rarity] + '">' + cards[card].rarity + '</font>\
			<button name="send" value="/card ' + card  + '"><b>' + cardName + '</b></button> from a \
			<button name="send" value="/buypack ' + packName + '">' + packName + ' Pack</button>.');
		}
		var usrIndex = userPacks[user.userid].indexOf(pack);
		userPacks[user.userid].splice(usrIndex, 1);
	},

	givepacks: 'givepack',
	givepack: function (target, room, user) {
		if (!user.can('declare')) return this.errorReply('/givepack - Access denied.');
		if (!target) return this.sendReply('/givepack [user], [pack] - Give a user a pack. Alias: /givepacks');
		var parts = target.split(',');
		this.splitTarget(parts[0]);
		if (!parts[1]) return this.sendReply('/givepack [user], [pack] - Give a user a pack. Alias: /givepacks');
		var pack = toId(parts[1]);
		var userid = toId(this.targetUsername);
		if (cleanShop.indexOf(pack) < 0) return this.sendReply('This pack does not exist.');
		if (!this.targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (!userPacks[userid]) userPacks[userid] = [];
		userPacks[userid].push(pack);
		this.sendReply(this.targetUsername + ' was given ' + pack + ' pack. This user now has ' + userPacks[userid].length + ' pack(s).');
		Users.get(this.targetUsername).connections[0].sendTo(room.id,
			'|raw|' + user.name + ' has given you ' + pack + ' pack. You have until the server restarts to open your pack. \
			Use <button name="send" value="/openpack ' + pack + '"><b>/openpack ' + pack + '</b></button> to open your pack.');
	},

	takepacks: 'takepack',
	takepack: function (target, room, user) {
		if (!user.can('takepack')) return this.errorReply('/takepack - Access denied.');
		if (!target) return this.sendReply('/takepack [user], [pack] - Take a pack from a user. Alias: /takepacks');
		var parts = target.split(',');
		this.splitTarget(parts[0]);
		if (!parts[1]) return this.sendReply('/takepack [user], [pack] - Take a pack from a user. Alias: /takepacks');
		var pack = toId(parts[1]);
		var packIndex = userPacks[userid].indexOf(pack);
		var userid = toId(this.targetUsername);
		if (packsKeys.indexOf(pack) < 0) return this.sendReply('This pack does not exist.');
		if (!this.targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (!userPacks[userid]) userPacks[userid] = [];
		if (packIndex < 0) return this.sendReply('This user does not have this pack.');
		userPacks[userid].splice(packIndex, 1);
		this.sendReply(this.targetUsername + ' lost ' + pack + ' pack. This user now has ' + users[userid].length + ' pack(s).');
		Users.get(this.targetUsername).send('|raw|' + user.name + ' has taken ' + pack + ' pack from you. You now have ' +  users[userid].length + ' pack(s).');
	},

	showcards: 'showcase',
	showcard: 'showcase',
	showcase: function (target, room, user) {
		if (!this.runBroadcast()) return;

		let page = 1;
		let userid = user.userid;
		const parts = target.split(',');
		if (parts.length === 2) {
			userid = toId(parts[0]);
			page = isNaN(parts[1]) ? 1 : Number(parts[1]);
		} else if (parts.length === 1 && toId(parts[0])) {
			userid = toId(parts[0]);
		}

		const cards = Db('cards').get(userid, []);
		const points = Db('points').get(userid, 0);

		if (!cards.length) return this.sendReplyBox(user.name + " has no cards.");

		const cardsMapping = cards.map(function (card) {
			return '<button name="send" value="/card ' + card.title + '" style="border-radius: 12px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2) inset;" class="card-button"><img src="' + card.card + '" width="50" title="' + card.name + '"></button>';
		});

		const start = (page - 1) * 10;
		const end = page * 10;
		const bottom = '<br><br>' + user.name + ' has ' + points + ' points.<br><br><b>Showing cards: ' + start + ' through ' + end + ' of ' + cards.length + '</b>';
		const display = cardsMapping.slice(start, end);

		if (!display.length) return this.sendReplyBox("Too many pages.");

		this.sendReplyBox(display.join('') + bottom);
	},

	card: function (target, room, user) {
		if (!target) return this.sendReply('/card [name] - Shows information about a card.');
		if (!this.runBroadcast()) return;
		var cardName = toId(target);
		if (!cards.hasOwnProperty(cardName)) return this.sendReply(target + ': card not found.');
		var card = cards[cardName];
		var html = '<div class="card-div card-td" style="box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);"><img src="' + card.card + '" height="220" title="' + card.name + '" align="right">' +
			'<span class="card-name" style="border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; background-image: -moz-linear-gradient(center top , #EBF3FC, #DCE9F9);  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8) inset, 0px 0px 2px rgba(0, 0, 0, 0.2);">' + card.title + '</span>' +
			'<br /><br /><h1><font color="' + colors[card.rarity] + '">' + card.rarity + '</font></h1>' +
			'<br /><br /><font color="#AAA"><i>Points:</i></font> ' + card.points +
			'<br /><br /><font color="#AAA"><i>Found in Packs:</i></font>' + card.collection.join(', ') +
			'<br clear="all">';
		this.sendReply('|raw|' + html);
	},

	cardladder: function (target, room, user) {
		if (!this.runBroadcast()) return;
		var display = '<center><u><b>Card Ladder</b></u></center><br><table border="1" cellspacing="0" cellpadding="5" width="100%"><tbody><tr><th>Rank</th><th>Username</th><th>Points</th></tr>';
		var keys = Object.keys(Db('points').object()).map(function (name) {
			return {name: name, points: Db('points').get(name)};
		});
		if (!keys.length) return this.sendReplyBox("Card ladder is empty.");
		keys = keys.sort(function (a, b) {
			if (b.points > a.points) return 1;
			return -1;
		});
		keys.slice(0, 10).forEach(function (user, index) {
			display += "<tr><td>" + (index + 1) + "</td><td>" + user.name + "</td><td>" + user.points + "</td></tr>";
		});
		if (this.broadcasting && Number(target) > 10) target = null;
		if (!isNaN(target)) {
			if (Number(target) > 100) target = 100;
			keys.slice(10, target).forEach(function (user, index) {
				display += "<tr><td>" + (index + 11) + "</td><td>" + user.name + "</td><td>" + user.points + "</td></tr>";
			});
		}
		display += "</tbody></table>";
		this.sendReply("|raw|" + display);
	},

	psgo: 'cardshelp',
	origincg: 'cardshelp',
	cardshelp: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReplyBox('\
			<center><b><u>Alpha Trading Card Game</u></b></center><br>\
			<b>/buypack</b> - Buys a pack from the pack shop.<br>\
			<b>/packshop</b> - Shows the shop for buying packs.<br>\
			<b>/openpack</b> - Opens a pack that has been purchased from the shop.<br>\
			<b>/showcase</b> - Shows a display of all cards that you have. Specify a page number to see more cards.<br>\
			<b>/card</b> - Shows data and information on any specifc card.<br>\
			<b>/cardladder</b> - Shows the leaderboard of the users with the most card points.<br>\
			<center><b>Special Thanks To Fender, Naten, and Nineage for creating such a wonderful feature and allowing us to use it! n_n</b></center>\
		');
	},
	searchcards: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) return this.errorReply('you need a search term');
		if (target === "ALL" && user.name === 'AuraStormLucario') {
			for (var x = 0; x < 888; x++) {
				this.parse('/card ' + allCards[x]);
			}
		} else {
			var j = 0;
			for (var i = 0; i < 900; i++) {
				if (allCards[i].slice(0, target.length) === target/*&& j <= 50*/) {
					this.parse('/card ' + allCards[i]);
					j++;
				}
			}
		}
	},
};
