var poemArr = [

        'i loved the way', 'the dark side of <br> craters', 'remnants of lunar <br> catastrophe', 'i tried to hide', 'in shadows', 'in seas of Serenity <br> of Vapors', 'the way <br> I loved <br> in eclipses', 'you traversed', 'I loved <br> the way <br> you traversed', 'these craters <br> these graves', 'your hands <br> on my face <br> found <br> time', 'sleek, pale echoes', 'through chaos <br> and the chasm', 'i loved', 'you stitched <br> these fissures.',

      'sometimes i count the steps <br> to quiet my creaking heels', 'around the wooden cracks <br> that once sounded', 'of yesterday', 'a hurried pace rattles the grain <br> of tomorrow', 'split splinters through my gums', 'i spit smokey swishers', 'sometimes I count the ashes <br> to quiet my waning dreams', 'rooted, in the wind', 'and a faint mirror of what it once was to be', 'sometimes I count the roses <br> to quiet my lonely fear', 'mercy, please, if you please', 'these petals of past are brittle now.', 'but they are, at least,', 'beyond the white curtain', 'beyond her forced smile <br> that only ever came out', 'when the sun was down', 'I think her light faded <br> my fabric', '', '',

      'There are things I could say, but I won\'t', 'I could brag, I could boast, but I won\'t', 'All those thoughts should remain unspoken.', 'No, it need not always be this way', 'But, we know, life can be zero sum', 'My step up - no more than your step down.', 'The answer\'s simple - keep it inside', 'I will not be filled by empty boasts', 'Modesty, unspoken - that is love.', '',

      'The pale pink crepe blooming into wilting', 'before me in the gallery, the paper petals', 'spreading over flower pots, the cement', 'molds planting a skyline with gray', 'my eyes climbing four molds in the first row', 'seven molds and six flowers in the second,', 'to a third row on the wall: a photograph', 'of the piece, my eyes believing these flowers', 'and shoving them into one pot,', 'my eyes placing a pot from the photo', 'onto the ground, the pots being not', 'pots, being only cement molds,', 'being self-potted and present', 'containing themselves, containing', 'precisely gray, my eyes beaming from gray','this cement posing with flowers, pots', 'posing with pink, gray posing with crepe,', 'and with the photo posing in a sheen of sky,', 'my eyes place a pot into my right pocket.', 'if', '',

      'Do not hurry, love.', 'spring comes without a push', 'impatience will not chase the frost', 'snowfall melts, rivers rise', 'with steady thaw, no flood this year.', 'Do not hurry love.', 'allow the flower time to grow', 'seed then sprout, stem and leaf', 'blossom beauty all in time', 'beauty, love all in time.', '',

      'Once the rain has been shelved,', 'the smell of an old lake', 'ships through the screen door and', 'meets the soap on the bowl <br> I have cleaned. It is night', 'and I am near a dream.', 'There had been friends, wine, grains, <br> pills, words, and not much more.', 'Some bald screech of a man', 'dropped pants and first we cheered <br> then drowned him in sighs. We', 'talked states, tax, boats and tides,', 'live streamed the rich and rats.', 'We spritzed a proud Left pose.', 'We threw up in our bowls <br> and bowled, howled, held our bows.', 'We spilled class. We pissed sneers <br> at men, and we tugged good <br> at our own dicks. Our skin', 'quite pale, a fact blubbed out', 'like some bright and blank page', 'I have since rinsed the place:', 'I have scrubbed the sink, bowls,', 'pots, and spoons; I have swept', 'and mopped the floor; I have', 'sprayed and wiped tops of all <br> those words; and I have paged', 'through all those thoughts, and sponged', 'and shipped them off with scorn.', 'But now, the door is wide.', 'My breath is choked. I float.', 'The lake is here, right up', 'to my gums. The rain, too,', 'is here, and has brought down <br> my shelves. I smell like drains.', 'My foot drips off its toes <br> which find a wet, clean bowl.', '<img src="img/man-i-am_opt.gif">', '',

      'is it the light <br> or the darker time <br> of the year', 'in the quieter world', 'you thought this could be', 'the world whose dreams blossom', 'and gasp beneath the frozen glass', 'of the heart <br> and its breaking', 'and before they were mine,', 'my dreams were often of swans', 'dozens of swans, short-chained', 'to the rainclouds, singing <br> through the colder winds of January', 'singing just as horribly <br> as we\'ve come to know love.', '',

      'god\'s country', 'have you found me yet', '', ';', 'no', 'i wish you loved the seconds when we didn\'t fuck', '<img class="img-fluid" src="img/stay_opt.gif">', '<img class="img-fluid" src="img/will_opt.gif">', '',

      'I have a dancer\'s pride when pressed', 'against walls, I have a force of miniature', 'things. At sunrise I rise like a king', 'without his home, wandering. Nomadic', 'steps like exhales from his soles. Trails <br> created', 'but directions have lost me about five minutes', 'back, so however magnetized we claim', 'to be, babe, I know now there is no North Pole', 'aren\'t there any memories worth saving? Or are', 'we mindless like the man with eyes from feet forward?', 'I haven\'t received any help to turn me', 'towards the view that thought is a raft', 'and the people are essentially an ocean', 'of bliss: the sheer size and power of a', 'galaxy can be appreciated by anyone on a <br> clear night', 'unless of course, the others were to come too', 'you know what company fear is: you know <br> precious lives', 'they are drinking tea, warming themselves to the', 'thought of an approach like death -- a passing <br> like receding galaxies. They', 'accelerate the harmony between this and them. Empty', 'phrases have been said over and over again', 'so let\'s try to get some fresh air in the lungs today.', '',

      'One hundred years of rain', 'of wind and shifting sand', 'yet fault lines still remain', 'torn deep into the land', 'No remainder, no reminder', 'forgiven is forgotten debt', 'major scars reduced to minor', 'please remember to forget', 'Ten foot waves from evening winds', 'by morning, calm inviting sea', 'keep no record of her sins', 'begin to heal your memory.', '',

      'I can see the sky', 'pulling <br> the stars closer <br> to the dark', 'I feel it falling <br> through my hands', 'as I renounce <br> all forms of undress', 'and if there\'s water <br> on Mars, you\'ll find me <br> drowning', 'thirsty <br> for Jupiter', ''

      ]

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var chooser = randomNoRepeats(poemArr);

window.setInterval(function(){
  var gen = chooser();
  $('.text-area').append('<p>' + gen + '</p>');
}, 3500);
