
let wordlist=['Asteroid', 'Cucumber', 'Verdant', 'Inquisitive', 'Flourish', 'Ballet', 'Bristle', 'Midnight', 'Decibel', 'Ashtray', 'Parachute', 'Fringe', 'Palace', 'Apricot', 'Kelpie', 'Stellar', 'Galaxy', 'Acoustic', 'Dream', 'Night', 'Knead', 'Saffron', 'Monkey', 'Chameleon', 'Fiery', 'Banana', 'Sashay', 'Pirate', 'Karate', 'Khaki', 'Parachute', 'Flock', 'Influx', 'Bullet', 'Ethereal', 'Impact', 'Vigor', 'Sapphire', 'Inaugurate', 'Board', 'Gangway', 'Joust', 'Horizon', 'Piano', 'Exclaim', 'X-Ray', 'Justify', 'Hedge', 'Bangle', 'Arboretum', 'Quirky', 'Threshold', 'Keynote', 'Hydra', 'Kooky', 'Drone', 'Keyboard', 'Lotus', 'Jungle', 'Serene', 'Limestone', 'Avalanche', 'Knockout', 'Keenly', 'Passion', 'Quack', 'Fortify', 'Liberty', 'Violet', 'Niche', 'Dentist', 'Honey', 'Pretend', 'Wanderlust', 'Kettle', 'Savor', 'Grumble', 'Hammer', 'Oregano', 'Lavish', 'Radio', 'Kaftan', 'Spirituality', 'Helmet', 'Novice', 'Shadow', 'Vessel', 'Polar', 'Duster', 'Flood', 'Language', 'Express', 'Novice', 'Kegel', 'Llama', 'Biscuit', 'Jackal', 'Recur', 'Pearl', 'Lament', 'Nature', 'Amplify', 'Kernel', 'Labyrinth', 'Emerald', 'Cello', 'EthnicWitty', 'Descent', 'Lollipop', 'Xeriscape', 'Neuron', 'Nation', 'Quote', 'Arrow', 'Generator', 'Popcorn', 'Manatee', 'Energy', 'Virtue', 'Guava', 'EmotionNectar', 'Intense', 'Leisure', 'Forehead', 'Triumph', 'Hydrate', 'Frolic', 'Evergreen', 'Eyelash', 'Quest', 'Quicken', 'Canvas', 'Jubilant', 'Bouquet', 'Knapsack', 'Arcade', 'Hound', 'Navigate', 'Jackpot', 'Fiddle', 'Brick', 'Unleash', 'Muffin', 'Forgiveness', 'Forecast', 'Enchant', 'Cranberry', 'Robot', 'Adjacent', 'Unfurl', 'Octopus', 'Elaborate', 'Glimmer', 'Drumstick', 'Chocolate', 'Escape', 'Moonlight', 'Cobra', 'Skylight', 'Lizard', 'Angler', 'Bonsai', 'Kernel', 'Cabin', 'Lollipop', 'Shimmering', 'Junior', 'Mirage', 'Glaze', 'Vision', 'Xerox', 'Institute', 'Zigzag', 'Valiant', 'Leash', 'Javelin', 'Beetle', 'Biscuit', 'Vanguard', 'Lemonade', 'Whirlwind', 'Sizzle', 'Endure', 'Wonderland', 'Tackle', 'Intimate', 'Nautical', 'Humble', 'Melody', 'Elegant', 'Demon', 'Bamboo', 'Incline', 'Douche', 'Luscious', 'Vanilla', 'Elephant', 'Nightingale', 'Nomad', 'Dragonfly', 'Otter', 'Meadowlark', 'Keystone', 'Raven', 'Aperture', 'Temptation', 'Peanut', 'Parrot', 'Brocade', 'Karaoke', 'Kindness', 'Winter', 'Blazer', 'Kudzu', 'Sequester', 'Marshmallow', 'Duckweed', 'Beacon', 'Empire', 'Venerate', 'Juxtapose', 'Surrender', 'Snowflake', 'Fiasco', 'Eager', 'Insight', 'Aardvark', 'Jurisdiction', 'Nightingale', 'Glitter', 'Denim', 'Timid', 'Organize', 'Queen', 'Xylograph', 'Gingerbread', 'Cupcake', 'Butterfly', 'Brass', 'Riddle', 'Vibrato', 'Hover', 'Snuggle', 'Fluffy', 'Baggage', 'Evidence', 'Identify', 'Zestful', 'Jovial', 'Tiger', 'Twinkle', 'Demolition', 'Symphony', 'Relentless', 'Artifact', 'Unison', 'Gravy', 'Ginger', 'Welcome', 'Birch', 'Exercise', 'Chipmunk', 'Kangaroo', 'Wonder', 'Bloom', 'Vitality', 'Nominate', 'Unravel', 'Meteor', 'Jaguar', 'Kangaroo', 'Badge', 'Djembe', 'Scenic', 'Ghoul', 'Fitness', 'Jewel', 'Enable', 'Fortunate', 'Shelter', 'Pretzel', 'Pigeon', 'Rampant', 'Helix', 'Ultimate', 'Intersection', 'Globe', 'Evaluate', 'Ancestor', 'Dribble', 'Venture', 'Invite', 'Auricle', 'Knead', 'Umbrella', 'Harness', 'Mosaic', 'Wanderlust', 'Gravel', 'Angel', 'Guillotine', 'Niche', 'Jelly', 'Agate', 'Kitten', 'Adapter', 'Koala', 'Kooky', 'Crayon', 'Linen', 'Blade', 'Inhale', 'Kangaroo', 'Ignore', 'Ubiquitous', 'Nocturnal', 'Badge', 'Overjoyed', 'Igloo', 'Quench', 'Jumble', 'Serpentine', 'Niche', 'Jealousy', 'Dispatch', 'Vignette', 'Nuzzle', 'Hearth', 'Scribble', 'Inlay', 'Burrow', 'Ketchup', 'Groundhog', 'Deerstalker', 'Pearl', 'Landfill', 'Bicycle', 'Eagle', 'Adventure', 'Xyster', 'Orchid', 'Klutz', 'Kismet', 'Jukebox', 'Altitude', 'Haggard', 'Extend', 'Collage', 'Xerox', 'Atlantis', 'Plane', 'January', 'Centaur', 'Quick', 'Tonic', 'Banquet', 'Habitat', 'River', 'Kindle', 'Caramel', 'Whimsical', 'Instruct', 'Krypton', 'Hunchback', 'Giggle', 'Aurora', 'Rejoice', 'Boatyard', 'Vivacious', 'Skyline', 'Lifeline', 'Tornado', 'Porpoise', 'Heave', 'Formidable', 'Kooky', 'Duckling', 'Mountainous', 'Lantern', 'Quiver', 'Gravity', 'Wavelength', 'Inlet', 'Spark', 'Omelet', 'Munch', 'Night', 'Sensational', 'Elicit', 'Mountain', 'Finite', 'Lighthouse', 'Airship', 'Olive', 'Cascade', 'Jigsaw', 'Dwindle', 'Citrus', 'Telescope', 'Jargon', 'Xeriscape', 'Anchor', 'Barrier', 'Bagel', 'Jumpstart', 'Wholesome', 'Lacrosse', 'Relish', 'Jiffy', 'Brick', 'Nymph', 'Valuable', 'Conch', 'Pencil', 'Insect', 'Dispute', 'Resourceful', 'Doghouse', 'Kudzu', 'Aquarium', 'Kaleidoscope', 'Unity', 'Pineapple', 'Maple', 'BraidKetchup', 'Loyal', 'Deerfly', 'Amulet', 'Neighbor', 'Tinsel', 'Recline', 'Crystal', 'Unconditional', 'Cathedral', 'Nutmeg', 'Unite', 'Friction', 'Olive', 'Ember', 'Xenolith', 'Donkey', 'Inner', 'Alphabet', 'Freelance', 'Xenon', 'Foolproof', 'Calendar', 'Dandelion', 'Secure', 'Juicy', 'Gambit', 'Kingdom', 'Unreserved', 'Landscaping', 'Quintessential', 'Hailstorm', 'Teapot', 'Forestry', 'Amphibian', 'Kingdom', 'Bonnet', 'Mosaic', 'Leotard', 'Tandem', 'Bedrock', 'Cyclone', 'Latitude', 'Broom', 'Plunge', 'Legacy', 'Docket', 'Ingenious', 'Glade', 'Diver', 'Garnet', 'Ingot', 'Uncover', 'Accordance', 'Deficit', 'Milky', 'Carousel', 'Gecko', 'Meteorite', 'Penguin', 'Vanity', 'Xylophone', 'Jamboree', 'Intuition', 'Uplift', 'Courier', 'Penguin', 'Xanadu', 'Ruler', 'Noble', 'Nautical', 'History', 'Gadget', 'Tranquil', 'Jacket', 'Nickel', 'Orbit', 'Nymph', 'Zenith', 'Lemonade', 'Outdoors', 'Journal', 'Enjoy', 'Illusion', 'Nibble', 'Eyebrow', 'Jaunt', 'Coachman', 'Bench', 'Lullaby', 'Chalk', 'Rabbit', 'Meditation', 'Heirloom', 'Truffle', 'Voyage', 'Crossroads', 'Baseline', 'Zebra', 'Junction', 'Raccoon', 'Judicious', 'Incantation', 'Quilt', 'Inspect', 'Alcove', 'Jellyfish', 'Infamous', 'Irony', 'Seashore', 'Cherry', 'Nocturnal', 'Quarry', 'Thunder', 'Noble', 'Jumper', 'Parrot', 'Whirl', 'Hunch', 'Festivity', 'Patrol', 'Qualm', 'Garnish', 'Quail', 'Upbeat', 'Kaleidoscope', 'Kudos', 'Kelpie', 'Inquire', 'Garment', 'Jittery', 'Aviator', 'Anvil', 'Bandana', 'Mystery', 'Pancake', 'Rustle', 'Ribbon', 'Ladybug', 'Instinct', 'Flavorful', 'Pizza', 'Chandelier', 'Dolphin', 'Silent', 'Bridge', 'Drive', 'Quiet', 'Inferno', 'Ripple', 'Nudge', 'Moose', 'Expand', 'Twilight', 'Gooseberry', 'Princess', 'Dinosaur', 'Guzzle', 'Crane', 'Alligator', 'Sacred', 'Explore', 'Burial', 'Nobility', 'Lifeguard', 'Serenity', 'Tiptoe', 'Decoy', 'Illuminate', 'Nerve', 'Kremlin', 'Xenon', 'Equal', 'Needle', 'Atmosphere', 'Vacation', 'Nectar', 'Lemon', 'Knapsack', 'Lucid', 'Rainbow', 'Eloquent', 'Sanctuary', 'Ivory', 'Lacquer', 'Kitten', 'Lagoon', 'Jester', 'Tulip', 'Velvet', 'Vixen', 'Flexible', 'Spirit', 'Rapture', 'Lettuce', 'Rhyme', 'Magnolia', 'Autumn', 'Immerse', 'October', 'Gallop', 'Quartz', 'Marshmallow', 'Aesthetic', 'Wellness', 'Inquire', 'Kitchen', 'Blanket', 'Algorithm', 'Employ', 'Meadow', 'Fixture', 'Mitten', 'Thoughtful', 'Ballad', 'Flair', 'Embrace', 'Horizon', 'Barge', 'Joint', 'Nectar', 'Intrepid', 'Jockey', 'Barbecue', 'Zipper', 'Observe', 'Ferocious', 'Despot', 'Treasure', 'Peacock', 'Apple', 'Outlast', 'Whisper', 'Brooch', 'Nobleman', 'Train', 'Garbage', 'Embellish', 'Accord', 'Genie', 'Scintillating', 'Jailbreak', 'Kudos', 'Butter', 'Night', 'Ignite', 'Scent', 'Puzzle', 'Artisan', 'Embark', 'Compassion', 'Soothe', 'Jiggle', 'Glacier', 'Keyboard', 'Picnic', 'Laugh', 'Tender', 'Zingy', 'Symphony', 'Terrific', 'Oceanography', 'Refresh', 'Excite', 'Iguana', 'Humidity', 'Kiosk', 'Knight', 'Kindergarten', 'Hatch', 'Arrowhead', 'Avocado', 'Iconic', 'Overcoat', 'Seraphic', 'Joyful', 'Nymph', 'Mermaid', 'Haunt', 'Oatmeal', 'Downpour', 'Briefcase', 'Fascinate', 'Incense', 'Inherit', 'Onion', 'Lavender', 'Storm', 'Aqueduct', 'Intact', 'Excel', 'Jeopardy', 'Quarter', 'Marigold', 'Radiant', 'Jingle', 'Icicle', 'Vault', 'Flash', 'Cauldron', 'Driftwood', 'Kiosk', 'Innate', 'Conductor', 'Treat', 'Watermelon', 'Kinetic', 'Kilogram', 'Universe', 'Alpaca', 'Junkyard', 'Envelope', 'X-Ray', 'Deflector', 'Laughter', 'Handicap', 'Haiku', 'Bumper', 'Impressionism', 'Botany', 'Magnificent', 'Outstretched', 'Thrive', 'Frenzy', 'Visionary', 'Kinetic', 'Bumper', 'Marine', 'Nibble', 'Jolly', 'Keeper', 'Emblem', 'Involve', 'Goggles', 'Undertake', 'Balance', 'Every', 'Cruise', 'Moonlight', 'Gullible', 'Anatomy', 'Amethyst', 'Marble', 'Geyser', 'Vibrant', 'Wreath', 'Accent', 'Beanie', 'Kirsch', 'Fellowship', 'Monarch', 'Tapestry', 'Unveil', 'Dialect', 'Zephyr', 'Pumpkin', 'Gardenia', 'Unique', 'Barrel', 'Sparkle', 'Kismet', 'Unfold', 'Nanny', 'Cyclist', 'Quasar', 'Table', 'Latitude', 'Astronaut', 'Garble', 'Inhale', 'Rocker', 'Overcoat', 'Elastic', 'Blouse', 'Loiter', 'Ballot', 'Fragrant', 'Geyser', 'Diorama', 'Jumbo', 'Panda', 'Panda', 'Binder', 'Mandolin', 'Rustic', 'Darkroom', 'Kuiper', 'Puppy', 'Solitude', 'Xanadu', 'Zodiac', 'Vortex', 'Polar', 'Turtle', 'Misty', 'Acrobatics', 'Decanter', 'Pounce', 'Indigo', 'Flipper', 'Javelina', 'Exclusive', 'Entice', 'Emulate', 'Oyster', 'Kudzu', 'Feline', 'Nectar', 'Tether', 'Delight', 'Kneel', 'Burden', 'Trick', 'Branch', 'Festoon', 'Illegal', 'Drummer', 'Lagoon', 'Ovation', 'Transcend', 'Uphold', 'Dumbbell', 'Bassinet', 'Impulse', 'Mistletoe', 'Hemorrhage', 'Foster', 'Esteem', 'Nomad', 'Abacus', 'Nursery', 'Immune', 'Earth', 'Piglet', 'Salient', 'Coliseum', 'Ocean', 'Encore', 'Empty', 'Unwind', 'Accolade', 'Bobbin', 'Antelope', 'Kindergarten', 'Equip', 'Unison', 'Airplane', 'Kinfolk', 'Taffy', 'Mushroom', 'Infinity', 'Smile', 'Tadpole', 'Cabbage', 'Husky', 'Jitterbug', 'Wondrous', 'Drizzle', 'Fresh', 'Beetle', 'Sunset', 'Kibble', 'Sable', 'Porcupine', 'Kettle', 'Butterfly', 'Absorb', 'Klaxon', 'Journey', 'Krypton', 'Willow', 'Transpire', 'Artichoke', 'Handle', 'Doodle', 'Aromatic', 'Alchemy', 'Lagoon', 'Bottle', 'Crocodile', 'Heart', 'November', 'Moccasin', 'Lullaby', 'Goblin', 'Imprint', 'Tickling', 'Wander', 'Horse', 'Unwavering', 'Neuron', 'Duckbill', 'Dachshund', 'Peach', 'Lioness', 'Timeless', 'Inevitable', 'Noodle', 'Karaoke', 'Journal', 'Animal', 'Tundra', 'Vestige', 'Dabble', 'Liftoff', 'Herring', 'Juvenile', 'Rosemary', 'Jumpy', 'Strength', 'Xenolith', 'Hoist', 'Lobster', 'Unblemished', 'Knightly', 'Igneous', 'Xylograph', 'Serendipity', 'Papaya', 'Foliage', 'Playground', 'Karst', 'Landmark', 'Reverie', 'Vigilance', 'Beach', 'Butcher', 'Quota', 'Diner', 'Embroider', 'Nectarine', 'Jetsam', 'Inversion', 'Luxury', 'Expert', 'Kerfuffle', 'Embryo', 'Balloon', 'Sempiternal', 'Locomotive', 'Juggernaut', 'Plant', 'Nourish', 'Kiosk', 'House', 'Marble', 'Melody', 'Thirsty', 'Entire', 'Lightning', 'Ravenous', 'Rattle', 'Jolly', 'Albatross', 'Muffin', 'Magnificent', 'Dapple', 'Burrito', 'Volley', 'Xylophone', 'Kowtow', 'Haven', 'Aftermath', 'Eraser', 'Sanctuary', 'Flannel', 'Integrate', 'Tangerine', 'Button', 'Jaded', 'Serenade', 'Harmony', 'Leisure', 'Upward', 'Tango', 'Deluge', 'Archive', 'Rooster', 'Nectarine', 'Brigade', 'Justice', 'Impose', 'Evolution', 'Treasure', 'Underneath', 'Popcorn', 'Navigator', 'Monument', 'Legume', 'Trickle', 'Flamboyant', 'Flawless', 'Nourish', 'Lofty', 'Dungeon', 'Melancholy', 'Banner', 'Dividend', 'Verdant', 'HemlockKilt', 'Tumble', 'Intrigue', 'Keyboard', 'Buckle', 'Flask', 'Champagne', 'Pebble', 'Gondola', 'Sensory', 'Digit', 'Inland', 'Gazelle', 'Foundation', 'Navigate', 'Canyon', 'Unafraid', 'Basket', 'Appendage', 'Library', 'Kernel', 'Cobweb', 'Festive', 'Grizzly', 'Drape', 'Farewell', 'Entrance', 'Secretive', 'Extra', 'Exchange', 'Acorn', 'Melon', 'Infuse', 'Asparagus', 'Pineapple', 'Inherit', 'Daylight', 'Vivify', 'Indulge', 'Royal', 'Essence', 'Lagoon', 'Unicorn', 'Gauntlet', 'Xyster', 'Mossy', 'Laboratory', 'Harbor', 'Knight', 'Quake', 'Miracle', 'Elevate', 'Expedition', 'Victory', 'Insomnia', 'Ledge', 'Diamondback', 'Extreme', 'Elusive', 'Mitten', 'Lettuce', 'Lighthouse', 'Incognito', 'Flabbergast', 'Valuable', 'Needle', 'Outdoors', 'Fortune', 'Ignition', 'Freedom', 'Jamming', 'Flapjack', 'Nudge', 'Juggler', 'Kernel', 'Wisdom', 'Oasis', 'Laptop', 'Utter', 'Marble', 'Pretzel', 'Iceberg', 'Unabashed', 'Opulent', 'Orange', 'Nickel']

function insertDiv(item){
    const newdiv=document.createElement('div')
    newdiv.innerHTML=`<div class="front">_</div><div class="back">${item}</div>`;
    newdiv.setAttribute("class",'letter')
    document.querySelector('.letters').appendChild(newdiv)
}

function removeDiv(){
    const div_remove=document.querySelector('.letters')
    if(div_remove.lastElementChild!=null)
        div_remove.removeChild(div_remove.lastElementChild)

}

function pickRandomWord(wordlist){
    let word_index;
    word_index=Math.floor(Math.random()*(wordlist.length));
    return wordlist[word_index].toUpperCase();
}

function displayState(guessesLeft){
    const part=document.getElementsByClassName(guessesLeft)
    console.log(part)
    if(guessesLeft!="6")
        part[0].style.fill='rgb(96, 94, 94)'
    part[0].style.stroke='rgb(96, 94, 94)'        
}

function resetState(){
    for (let i = 1; i < 6; i++) {
        let part=document.getElementsByClassName(i.toString());
        if(part!=undefined){
        if(i!=6)
            part[0].style.fill='#373737'
        part[0].style.stroke='#373737'
        }
    }
}

function displayLetterBox(){
    for(let i=0;i<word.length;i++){
        insertDiv(word[i]);
    }
}
function displayProblem(){
    for(let i=0;i<word.length;i++){
        if(word[i].charCodeAt()>90 || word[i].charCodeAt()<65)
        {
            flip(i);
            shown_index.push(i);
        }
    }
    console.log(word.length/1.8)
    if(word.length<=6){
        n=Math.floor(Math.random()*((word.length/1.8)-2)+2)
    }
    else{
        n=Math.floor(Math.random()*((word.length/1.8)-3)+3)
    }

    console.log(n);
    let index;
    for (let i = 0; i < n && shown_index.length!=word.length; i++) {
        do{
            index=Math.floor(Math.random()*word.length)
        }while(shown_index.includes(index))
        flip(index); 
        shown_index.push(index);
    }

    
}

function flip(n){
    const letters=document.querySelector(".letters")
    letters.children[n].setAttribute('style',"transform:rotateY(180deg)")
}
function indexesOf(letter){
    for(let i=0;i<word.length;i++){
        if(letter==word[i] && !shown_index.includes(i))
            return i;
    }
    return -1;
}

function evaluateGuess(guess){
    let key=0;
    console.log(guess)
    if(guess.length==1){
        if(word.includes(guess)){
            while(true){
                index=indexesOf(guess)
                if(index>=0){
                key=1;
                flip(index)
                shown_index.push(index);
                }
                else
                    break;
                
            }
        }    
    }
    else if(guess.length==word.length){
        if(guess==word){
            key=1
            for (let i = 0; i < word.length; i++) {
                if(!shown_index.includes(i)){
                    flip(i)
                    shown_index.push(i);
                }
            }
        }
    }
    else
        key=-1
    return key;
}

function shake(){
    const input_field=document.querySelector('.input-text')
    input_field.setAttribute('style',"animation:shake 0.38s")
    setTimeout(()=>{
        input_field.removeAttribute('style');
        console.log("shake succesful")
    },400)
}

function takeGuess(guess){
    if(guess!=''){
        key=evaluateGuess(guess)
        console.log(`key: ${key}`);
        if(key==0){
            writePrompt("incorrectGuess")
            wrongGuess.innerHTML=`${wrongGuess.innerHTML}  ${guess}`
            displayState(guessesLeft)
            guessesLeft=guessesLeft-1
            shake();
        }
        else if(key==-1){
            writePrompt("InvalidGuess")
            shake();
        }
    }
    else{
        writePrompt("InvalidGuess")
        shake();
    }
}


function writePrompt(msg){
    document.querySelector('.prompt-text').innerHTML=msg;
}

function endGame(){
    input.setAttribute('disabled','')
    play_button.innerHTML='<p>Play Again<\p>'
    play_button.style.visibility='visible'
    wrongGuess.innerHTML='wrongGuesses: '
    wrongGuess.style.visibility='hidden'
}



let shown_index=[]
let guessesLeft=6
const input=document.querySelector('.input-text')
const result=document.querySelector('.result')
const wrongGuess=document.querySelector('.wrong-guesses')
let word='';


input.addEventListener("keydown",(e)=>{
    document.querySelector('.prompt-text').innerHTML='';
    if(e.key=='Enter'){
        takeGuess(input.value.toUpperCase())
        input.value='';
        if(shown_index.length==word.length){
            result.innerHTML='YOU WIN';
            result.style.visibility='visible'
            endGame();
        }
        else if(guessesLeft==0)
        {
            result.innerHTML='YOU LOOSE';
            result.style.visibility='visible';
            writePrompt(`Word was: ${word}`)
            endGame();
        }
    }
})

const play_button=document.querySelector('.play')
play_button.addEventListener('click',(e)=>{
    play_button.style.visibility='hidden'
    wrongGuess.style.visibility='visible'
    resetState();
    writePrompt('');
    result.style.visibility='hidden'
    guessesLeft=6;
    shown_index=[];
    document.querySelector('.letters').innerHTML=''
    input.removeAttribute('disabled');
    word=pickRandomWord(wordlist)
    displayLetterBox(word);
    setTimeout(()=>{
        displayProblem();
    },300)

})

const start_button=document.querySelector('.start-play')
start_button.addEventListener('click',e=>{
    start_button.style.visibility='hidden';
})
