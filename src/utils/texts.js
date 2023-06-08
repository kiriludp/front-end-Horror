

const texts = [

    {
        id: 1,
        text: `As you sit trying to relax and go back to sleep, you hear sounds in the woods. Twigs snapping. Branches rustling. Something heavy disrupting the underbrush. From inside your tent you can’t quite tell where it’s coming from or if there’s anything else to the sounds. It’s most likely your friend coming back but you won’t be able to figure out what it is from inside….`,

        options: [
            {
                text: `It’s definitely your friend. It’s late and the woods are unfamiliar. They’re probably just stumbling around. You call out to catch their attention; maybe they just need help finding their way back. You decide to wait. `,
                nextText: 14,
            },
            {
                text: `You’d rather be safe than sorry. You get out of your sleeping bag, slip on socks, shoes and jacket, and grab your headlamp. Your friend probably forgot their own light- they could use the help.
                `,
                nextText: 2,
            },
        ],
    },
    {
        id: 2,
        text:`You unzip the tent quietly, poking your head out first before stepping out fully. Your full body shivers, jaw clenching against the chill of wind that brushes past and rustles the nylon of your tent. There’s an urgency you can’t explain boiling in your gut– You just want to find your friend as quickly as possible. Now that you’re out here, you can tell the sounds are coming from two different directions. To the right, towards where you drove in from the road, sounds like voices in the distance. Are there other campers around? To the left, the rustling is sporadic but more often than it seemed to be when you were in your tent.  Is it closer? Maybe you’re mind is playing tricks on you. Your curiosity pulls you to the…`,

        options: [
            {
                text: `Left– Logically, it’s probably either your friend or an animal. And you rather keep raccoons away from your camp if possible.`,

                nextText: 3,
            },
            {
                text: `Right– You know that’s where you all came in from. Either your friend ran into some other campers or, at the very least, you’ll hit the entrance and the road.`,

                nextText: 16,
            },
        ],
    },
    {
        id: 3,
        text: `You start towards the noise. The deeper you go, the harder it is to navigate around fallen branches and roots. You’re shuffling through big piles of decaying leaves and the smell is almost overwhelming. Did your friend really come all the way out here just to use the bathroom? 
            
        SNAP
        
        You jump and spin in the direction of the sound that still echos through the woods. Your mouth is feeling dry. You’re breathing hard. This is starting to feel like maybe it’s a bad idea…
        `,
    options: [
        {
            text: `Turn around and go back to camp– this isn’t worth it. Your friend will find you.`,
            nextText: 1,
        },
        {
            text: `You’re already this deep– might as well keep going. Can it really be that bad?`,
            nextText: 4,
        },
    ],


    },
    {
        id: 4,
        text: `You only take a few more steps when you hear it again– and closer! Did you make the right choice? Are you about to run into a bear? Oh god, you didn’t even bring your bear spray… (did you bring any at all?! All those episodes of Alone to waste!) Just when you’re sure death is at your door–

        A raccoon is sitting there staring you right in the eye. Judging you. It knows you were terrified, that you thought it was a bear. Wow. Coward. 
        
        You let out a heavy sigh of relief. Not a bear. Not The Hillside Strangler. Not The Blair Witch. Just a raccoon. You stop to take stock of your location and find you’re…not actually sure which way you came from. Best go with your gut.
        
        `,
    options: [
        {
            text: `Pretty sure camp is right behind you– you really just walked in a straight line, right? You are not to be one of those stupid characters in a horror movie.`,
            nextText: 1,
        },
        {
            text: `Pretty sure camp is to your right. You’re not sure why. It just feels right. 
            `,
            nextText: 5,
        },
    ],


    },
    {
        id: 5,
        text: `Y… you’re pretty sure you were wrong. This does not seem like the way to camp. At all. Although, you have noticed that the trees have started to thin. That’s got to be a good sign right?

        Well… There is a shed. A creepy, derelict, rusted shed. And maybe that’s a door? Does someone live here? `,

    options: [
        {
            text: `You’ve got to see what’s in there. This could be a Goonies situation. You enter the shed`,
            nextText: 1,
        },
        {
            text: `Nope. Big No. Definitely Not. Hahah funny but no. That is either a serial killer's hangout or a tetanus shot waiting to happen. Definitely not risking it. You walk past`,
            nextText: 6,
        },
    ],


    },
    {
        id: 6,
        text: `You all but avert your eyes as you walk past the shed, as if looking at it will summon a once lost demon. In fact, you’re so distracted by trying to be distracted you nearly walk right into the pathway of a machete coming down at you. 

        THERE IS ACTUALLY A MASKED KILLER IN FRONT OF YOU?! 
        
        You thought this only happened in movies???`,
    options: [
        {
            text: `You lunge at the killer– the leads always run away and it never works. It’s the woods! At night! You have a better chance in hand to hand. You’ve been training for this– You watched the Ninja Turtles!`,
            nextText: 19,
        },
        {
            text: `N O P E

            You take off running. As long as you don’t pull a Frodo and fall down every three steps you’ll be fine– statistics are in your favor. You’re not carrying an evil ring. And you’re also not staying around here. 
            `,
            nextText: 7,
        },
    ],
    },
    {
        id: 7,
        text: `Y O U T R I P.
        
        What are the odds. Truly. You take a moment to rethink every life choice you’ve made before you spring into to action

        Text: You hide; There’s a big root ala Sleepy Hollow and not only is it fitting for your very Baggins-esque behavior but it also looks like a really good hiding place. You can at least catch your breath and take a second to think things over. `,
    options: [
        {
            text: `You hide; There’s a big root ala Sleepy Hollow and not only is it fitting for your very Baggins-esque behavior but it also looks like a really good hiding place. You can at least catch your breath and take a second to think things over. `,
            nextText: 8,
        },
        {
            text: `It’s just a stumble– this is nothing. Your sibling did worse to you growing up! Link goes through more every day! You push yourself up and keep running– You weren’t that deep in the woods, right?
            `,
            nextText: 20,
        },
    ],


    },
    {
        id: 8,
        text: `You hear the killer approach, heavy footsteps crunching dead leaves under heavier boots. Your heart is pounding so hard you worry that it’s actually audible, no matter how unrealistic. You press a hand over your mouth, desperate to remain silent. The killer has paused right in front of your hiding place. You can see them– big, broad, dirty, bloody. They’re back is to you. You have a choice… `,
    options: [
        {
            text: `You have the jump on them. Their back is to you and you have the upper hand. If you don’t do something, this is going to end like every other stupid horror movie you’ve ever seen. 
            `,
            nextText: 19,
        },
        {
            text: `You wait; as silent as you were when you snuck out of the house at a younger age. …or into the house. Whichever. Better safe than sorry. You’re strong but not that strong…`,
            nextText: 9,
        },
    ],


    },
    {
        id: 9,
        text: `From your vantage point, you  watch the killer slowly pass by. You press your lips together behind your hand, desperate to keep silent. You wish you could close your eyes but you’re too afraid that taking your eyes off of the figure in front of you will cause them to see you. After what feels like an eternity, they walk out of your line of sight. You’re in the clear. This is it. `,
    options: [
        {
            text: `R U N! They’re away from you and you have to get even further away from them. You’re not waiting around until they circle back`,
            nextText: 21,
        },
        {
            text: `Sneak away slowly– you keep repeating to yourself the mantra ‘Rather safe than sorry’. What was that story about the tortoise and the hare?
            `,
            nextText: 10,
        },
    ],


    },
    {
        id: 10,
        text: `You all but crawl across the forest floor, your hands sticking into various piles or who knows what. You’re pretty sure a mouse ran over you and you’re positive there’s at least four raccoons mocking you, but you’re quiet. Barely a brush against the forest floor as you move along. You pause every now and again to listen, make sure no one is following you, make sure you’re alone, and so far it certainly seems like it is. 

        After some time, the woods seem quiet. You’re all alone. You pause to listen and plan your next move.  `,

    options: [
        {
            text: `You think you hear a road to the left of you…maybe some cars? You can’t be positive but the sound is similar enough you think you should investigate.`,
            nextText: 22,
        },
        {
            text: `You don’t want to risk it; your car is just back at camp and you have a satellite phone in the trunk if your own phone (which you ignorantly left in the tent) doesn’t work. You’re just going to keep heading the way you’re pretty sure camp is.`,
            nextText: 11,
        },
    ],


    },

    {
        id: 11,
        text: `You’re getting tired, sneaking through the woods is taking a lot out of you and the adrenaline of being /chased/ has worn off. It’s been a while since you saw the killer and you haven’t heard anything else besides yourself in a while…`,

    options: [
        {
            text: `Enough sneaking around. There’s no way you wouldn’t have heard him and you really have been sneaking for a /while/. If you want out, you’ve just got to hurry and do it. You take a final glance around you, pause to listen, and then take off in the direction you’re sure camp is.`,
            nextText: 1,
        },
        {
            text: `No matter how tired you are, you’re just too scared to move any faster. It might take you twenty-eight days but you’re going to crawl your way to safety. That always works out right?`,
            nextText: 12,
        },
    ],
    },
    {
        id: 12,
        text: `You’re sneaking carefully through the woods when you see notice some brush and dirt that has been disturbed. You shuffle closer on your hands and knees and almost stumble into a pit trap that the killer must have left for you!
        `,

    options: [
        {
            text: `Let’s see how they like it! You’re going to lure them right towards their own trap!`,
            nextText: 13,
        },
        {
            text: `Rude. But you’re just focused on getting out of here, none of this nonsense. `,
            nextText: 1,
        },
    ],
    },

    {
        id: 13,
        text: `You push enough of the coverage down that it looks like the trap has been triggered before you let out an ear splitting scream. After the disruption, you cover yourself in some of the left over lose brush, waiting for your killer to arrive. They do, hurrying forward to look into the pit, waiting to see your body impaled on sharp stakes. 

        But they didn’t anticipate your ingenuity! 
        
        As soon as they are close to the edge, you move quickly and quietly, giving them a hard shove and throwing them off balance. Their arms pinwheel, trying to catch their footing before they lose to gravity and tumble to their demise in their own trap. 
        
        You let out a sigh of relief, near tears as you fall back against a tree. You can’t believe you managed to do that! What if you had died?! It was so close! They were–
        
        You hear a snap behind you and spin around, ready to fight or run. 
        
        Your friend stands there with wide confused eyes. 
        
        “What the hell are you doing all the way out here?”
        `,

        options: [
            {
                text: `THE`,
                nextText: `()`
            },
            {
                text: `END`,
                nextText: `()`
            },
        ]


    },
    {
        id: 14,
        text: `It feels like an eternity of waiting, curled up in your sleeping bag, waiting to hear the sound of your friend unzipping the text to return. The woods are quiet save for the occassional series of twiges, underbrush, rustling. You feel anxious and unsure what to do.   `,

    options: [
        {
            text: `Wait it out. You cant even remember the last time 'Check out the creepy, unknown noises in the distance' actually worked out for anyone.`,
            nextText: 15,
        },
        {
            text: `You're too restless- you have to do something! You grab the essentials; socks, shoes, headlamp, a snack(?). If it's just your friend, they're going to owe you BIG time.`,
            nextText: 2,
        },
    ],
    },
    {
        id: 15,
        text: `You wait in the quiet of the nighttime woods, breath catching every so often in your chest. Your heart jumps at every sound, but you try to keep calm. You know you'll feel better once your friend returns. 
        
        You never get to find out. 
        
        As you sit there contemplating if you should make your friend take you to lunch or dinner to make up for pulling this crap (BUDDY SYSTEM COME ON) you don't notice the shadow falling over your tent. In fact, you don't notice until the machete is sticking out of your chest. 
        
        Huh.
        
        
        --END--`,

        options: [
            {
                text: `THE`,
                nextText: `()`
            },
            {
                text: `END`,
                nextText: `()`
            },
        ]
    },
    {
        id: 16,
        text: `It seems like no matter how far you walk, the voices and sounds are still so far away, you don't think you're getting any closer. As you pause to get your bearings, you realize you are probably lost. Well... `,

    options: [
        {
            text: `Keep going towards the voices-- You've already come this far right?`,
            nextText: 17,
        },
        {
            text: `This clearly isn't working; you turn around and start heading back in the direction you came in. You're pretty sure you can make it straight back to camp and find a solution then.`,
            nextText: 5,
        },
    ],
    },
    {
        id: 17,
        text: `You certainly put in the time! With your headlamp you can see that your palms are scrapped up and you are filthy. But it looks like things might be on your side! There's a warm looking cambin in a clearing just a few feet away! There's smoke curling out of the chimney and you think you can hear laughing from inside. And electricty means some form of communication right?! You may have just found your saviors! `,

        options: [
            {
                text: `Yeah, you're going to have to check that out.`,
                nextText: 18
            },
            {
                text: `As tempting as that is, you don't feel like meeting a killer family today, no. You will keep going. I mean... either way you're probably going down but at least you'll go down fighting. That's better than nothing, right?`,
                nextText: 5
            }
        ]
    },
    {
        id: 18,
        text: `TO BE CONTINUED`,
    },
    {
        id: 19,
        text: `You gear up for the fight, fists raised, stank face on-- all you need is a baton and you might as well be Raphael. 
        
        Well. Turns out, that baton was more important than maybe you thought. Bare hands versus machete isn't... really a fight that leans in your favor. 
        
        The killer cuts off your bare hands. And then stabs you.
        
        ---END---`,
        options: [
            {
                text: `THE`,
                nextText: `()`
            },
            {
                text: `END`,
                nextText: `()`
            },
        ]
    },
    {
        id: 20,
        text: `Unfortunately, the trip slowed you down more than you thought. You're barely up a few moments before you feel a sharp pain in the middle of your chest. You look down and it's a legit machete. Like. Wow. The Killer threw that. 

        Honestly? You're a little impressed. Before you drop dead.
        
        ---END---`,

        options: [
            {
                text: `THE`,
                nextText: `()`
            },
            {
                text: `END`,
                nextText: `()`
            },
        ]
    },
    {
        id: 21,
        text: `Remember being told to watch where you're going or to not run with scissors?

        Yeah, those are some thoughts you probably wish you had remembered as the ground beneath you suddenly feels loose and you feel yourself falling, falling, falling aaaannnd

        Pain. Just. All encompassing Pain. You've fallen into a pit trap and now there are wooden stakes sticking out of your body from various places. Booo.
        
        ---END---`,

        options: [
            {
                text: `THE`,
                nextText: `()`
            },
            {
                text: `END`,
                nextText: `()`
            },
        ]
    },
    {
        id: 22,
        text: `It is, in fact, a road! Wow! What are the odds!

        It's not the same road you came in on, but it seems well traveled enough. In fact, not that far a head of you is a car that may be broken down or abandoned.  There's a chance it just overheated and needed to cool off but the owners abandoned it. If that's the case, you can probably use it to get away.`,
        
    options: [
        {
            text: `Not worth the risk. You don't know much about cars and that's enough for you to not trust this situation. You're going to see how far you can walk.`,
            nextText: 23,
        },
        {
            text: `Killers in situations like this always move bizarely fast-- no way are you risking it. You'll chance it with the car. At the very least it's good shelter.`,
            nextText: 23,
        },
    ]
    },
];


export default texts;