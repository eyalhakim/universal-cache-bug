import { Category } from "./Category";

export class CategoriesStorage {

    static wellness: Category[] = [
        {
            title: 'Fitness Classes',
            name: 'fitness',
            trending: true,
            subCategories: [
                {
                    title: 'Express Yoga',
                    name: 'express-yoga',
                    trending: true,
                    id: 231
                },
                {
                    title: 'AcroYoga',
                    name: 'acro-yoga',
                    trending: true,
                    id: 232

                },
                {
                    title: 'Yoga',
                    name: 'yoga',
                    id: 10
                },
                {
                    title: 'Zumba',
                    name: 'zumba',
                    id: 212
                },
                {
                    title: 'Pilates',
                    name: 'pilates',
                    id: 89
                },
                {
                    title: 'Tai Chi',
                    name: 'tai-chi',
                    id: 158
                },
                {
                    title: 'Abs',
                    name: 'abs',
                    id: 233
                },
                {
                    title: 'Kickboxing',
                    name: 'kickboxing',
                    id: 18
                },
                {
                    title: 'Deep House Yoga',
                    name: 'deep-house-yoga',
                    id: 234
                },
                {
                    title: 'Hip Hop',
                    name: 'hip-hop',
                    id: 235
                },
                {
                    title: 'Running Class',
                    name: 'running-class',
                    id: 60
                },
                {
                    title: 'High Intensity Dance Class',
                    name: 'high-intensity-dance',
                    id: 236
                },
                {
                    title: 'Flow Revive Restore',
                    name: 'flow-revive-restore',
                    id: 237
                }
            ]
        },
        {
            title: 'Body, Mind & Spirit',
            name: 'body-mind-spirit',
            trending: true,
            subCategories: [
                {
                    title: 'Sound Baths',
                    name: 'sound-baths',
                    trending: true,
                    id: 238
                },
                {
                    title: 'Laughter Yoga',
                    name: 'laughter-yoga',
                    trending: true,
                    id: 239
                },
                {
                    title: 'Massage',
                    name: 'massage',
                    id: 88
                },
                {
                    title: 'Aromatherapy',
                    name: 'aromatherapy',
                    id: 243
                },
                {
                    title: 'Express Meditation',
                    name: 'express-meditation',
                    id: 240
                },
                {
                    title: 'Learn To Meditate',
                    name: 'learn-to-meditate',
                    id: 241
                },
                {
                    title: 'Breathwork',
                    name: 'breathwork',
                    id: 242
                },
                {
                    title: 'Flow Revive Restore',
                    name: 'flow-revive-restore',
                    id: 237
                },
                {
                    title: 'Desk Yoga',
                    name: 'desk-yoga',
                    id: 250
                },
                {
                    title: 'Dancorcism',
                    name: 'dancorcism',
                    id: 246
                },
                {
                    title: 'Bollywood',
                    name: 'bollywood',
                    id: 247
                },
                {
                    title: 'Acupuncture',
                    name: 'acupuncture',
                    id: 113
                },
                {
                    title: 'Journaling Class',
                    name: 'journaling',
                    id: 248
                },
                {
                    title: 'Resilience In The Workplace',
                    name: 'resilience',
                    id: 249
                },
                {
                    title: 'Kombucha Brewing 101',
                    name: 'kombucha-brewing-101',
                    id: 251
                }
            ]
        },
        {
            title: 'Nutrition',
            name: 'nutrition',
            subCategories: [
                {
                    title: 'Quick Lunch Workshop',
                    name: 'quick-lunch-workshop',
                    trending: true,
                    id: 252
                },
                {
                    title: 'Juice Station',
                    name: 'juice-station',
                    trending: true,
                    id: 171
                },
                {
                    title: 'Sustainable Eating',
                    name: 'sustainable-eating',
                    id: 253
                },
                {
                    title: 'Smoothie Bar',
                    name: 'smoothie-bar',
                    id: 254
                },
                {
                    title: 'Healthy Hangs Happy Hour',
                    name: 'healthy-hangs-happy-hour',
                    id: 255
                },
                {
                    title: 'Ayurvedic Cooking Class',
                    name: 'ayurvedic-cooking-class',
                    id: 257
                },
                {
                    title: 'Beating the Sugar Blues',
                    name: 'beating-the-sugar-blues',
                    id: 256
                },
                {
                    title: 'Nutrition Workshop',
                    name: 'nutrition-workshop',
                },
                {
                    title: 'Eating for Energy',
                    name: 'eating-for-energy',
                    id: 258
                },
                {
                    title: 'Detox with Me!',
                    name: 'detox-with-me',
                    id: 259
                }
            ]
        }
    ];

    static perks: Category[] = [
        {
            title: 'Self Care',
            name: 'self-care',
            subCategories: [
                {
                    title: 'Massage',
                    name: 'massage',
                    trending: true,
                    id: 88
                },
                {
                    title: 'Manicures',
                    name: 'manicure',
                    trending: true
                },
                {
                    title: 'Barbers, Beard Trims & Shoe Shines',
                    name: 'barber'
                },
                {
                    title: 'Make-up Class',
                    name: 'make-up-class'
                },
                {
                    title: 'Hair Styling',
                    name: 'hair-styling'
                }
            ]
        },
        {
            title: 'Food Stations',
            name: 'food-stations',
            trending: true,
            subCategories: [
                {
                    title: 'Omelettes',
                    name: 'omelettes',
                    trending: true
                },
                {
                    title: 'Power Breakfast Bowls',
                    name: 'power-breakfast-bowls',
                    trending: true
                },
                {
                    title: 'Ice Cream',
                    name: 'ice-cream'
                },
                {
                    title: 'Crepes',
                    name: 'crepe-station'
                },
                {
                    title: 'Frozen Yogurt',
                    name: 'frozen-yogurt'
                },
                {
                    title: 'Wowfuls',
                    name: 'wuffle'
                },
                {
                    title: 'Smoothies',
                    name: 'smoothies'
                },
                {
                    title: 'Juice',
                    name: 'juice'
                },
                {
                    title: 'Ice Cream Sandwiches',
                    name: 'ice-cream-sandwiches'
                },
                {
                    title: 'Popsicle Cart',
                    name: 'popsicle-cart'
                },
                {
                    title: 'Tacos',
                    name: 'tacos'
                },
                {
                    title: 'Coffee',
                    name: 'coffee-station'
                },
                {
                    title: 'Juicy Happy Hour',
                    name: 'juicy-happy-hour'
                }
            ]
        },
        {
            title: 'Unique',
            name: 'unique',
            subCategories: [
                {
                    title: 'Puppies in the Office',
                    name: 'puppy',
                    trending: true
                },
                {
                    title: 'Retro Photoshoot',
                    name: 'retro-photoshoot'
                }
            ]
        }
    ];

    static activities: Category[] = [
        {
            title: 'Games',
            name: 'games',
            trending: true,
            subCategories: [
                {
                    title: 'Casino Night',
                    name: 'casino-night',
                    trending: true
                },
                {
                    title: 'Portable Escape Room',
                    name: 'portable-escape-room',
                    trending: true
                },
                {
                    title: 'Trivia',
                    name: 'trivia'
                },
                {
                    title: 'Family Fued',
                    name: 'family-fued'
                },
                {
                    title: 'Jeopardy',
                    name: 'jeopardy'
                },
                {
                    title: 'Trivia Game Show',
                    name: 'trivia-game-show'
                },
                {
                    title: 'Game Show',
                    name: 'game-show'
                },
                {
                    title: 'Minute to Win It',
                    name: 'minute-to-win-it'
                },
                {
                    title: 'Ping Pong Tournament',
                    name: 'ping-pong'
                },
                {
                    title: 'Arcade Night',
                    name: 'arcade-night'
                },
                {
                    title: 'Portable Laser Tag',
                    name: 'portable-laser-tag'
                },
                {
                    title: 'Virtual Reality',
                    name: 'vr'
                },
                {
                    title: 'Star Wars Party',
                    name: 'star-wars-party'
                },
                {
                    title: 'Murder Mystery Party',
                    name: 'murder-mystery-party'
                },
                {
                    title: 'Real Life Mario Kart',
                    name: 'real-life-mario-kart'
                }
            ]
        },
        {
            title: 'Arts & Crafts',
            name: 'arts-crafts',
            subCategories: [
                {
                    title: 'In Office Mural',
                    name: 'in-office-mural',
                    trending: true
                },
                {
                    title: 'Terrariums',
                    name: 'terrariums',
                    trending: true
                },
                {
                    title: 'Macrame',
                    name: 'macrame'
                },
                {
                    title: 'Craft Day',
                    name: 'craft-day'
                },
                {
                    title: 'Paint & Sip',
                    name: 'paint-sip'
                },
                {
                    title: 'Photography Class',
                    name: 'photography'
                },
                {
                    title: 'Calligraphy',
                    name: 'calligraphy'
                },
                {
                    title: 'Watercolor',
                    name: 'watercolor'
                },
                {
                    title: 'Flower Arrangements',
                    name: 'flower-arrangements'
                },
                {
                    title: 'Tie Dying',
                    name: 'tie-dying'
                },
                {
                    title: 'Card Creating & Sending',
                    name: 'card-creating'
                },
                {
                    title: 'DIY Bath Soaps & Fizzes',
                    name: 'diy-bath-soaps'
                }
            ]
        },
        {
            title: 'Entertainment',
            name: 'entertainment',
            subCategories: [
                {
                    title: 'Karaoke',
                    name: 'karaoke',
                    trending: true
                },
                {
                    title: 'Virtual Reality',
                    name: 'vr',
                    trending: true
                },
                {
                    title: 'Board Games & Beer',
                    name: 'board-games-beer'
                },
                {
                    title: 'Mentalism',
                    name: 'mentalist'
                },
                {
                    title: 'Video Games',
                    name: 'video-games'
                },
                {
                    title: 'Movie Night',
                    name: 'movie-night'
                },
                {
                    title: 'Learn to Juggle',
                    name: 'learn-to-juggle'
                },
                {
                    title: 'Creative Writing',
                    name: 'creative-writing'
                }
            ]
        },
        {
            title: 'Tastings',
            name: 'tastings',
            trending: true,
            subCategories: [
                {
                    title: 'Wine & Cheese',
                    name: 'wine-cheese',
                    trending: true
                },
                {
                    title: 'Beer & Cheese',
                    name: 'beer-cheese'
                },
                {
                    title: 'Cheese',
                    name: 'cheese'
                },
                {
                    title: 'Chocolate',
                    name: 'chocolate'
                },
                {
                    title: 'Coffee',
                    name: 'coffee'
                },
                {
                    title: 'Tea',
                    name: 'tea'
                },
                {
                    title: 'Sake & Sushi',
                    name: 'sake-sushi'
                },
                {
                    title: 'Taste Flipping',
                    name: 'taste-flipping'
                },
                {
                    title: 'Whiskey',
                    name: 'whiskey'
                }
            ]
        },
        {
            title: 'Cooking Classes',
            name: 'cooking-classes',
            trending: true,
            subCategories: [
                {
                    title: 'Sushi',
                    name: 'sushi',
                    trending: true
                },
                {
                    title: 'Cocktail Making Class',
                    name: 'cocktail-making-class'
                },
                {
                    title: 'Cupcake Decorating',
                    name: 'cupcake-decorating'
                },
                {
                    title: 'Cafe Off',
                    name: 'cafe-off'
                },
                {
                    title: 'Tiramisu',
                    name: 'tiramisu'
                },
                {
                    title: 'Knife Skills',
                    name: 'knife-skills'
                },
                {
                    title: 'Gnocchi',
                    name: 'gnocchi'
                },
                {
                    title: 'Pasta',
                    name: 'pasta'
                },
                {
                    title: 'Dumpling Making',
                    name: 'dumpling-making'
                },
                {
                    title: 'Kombucha Brewing',
                    name: 'kombucha-brewing-101'
                },
                {
                    title: 'Taste Flipping',
                    name: 'taste-flipping'
                }
            ]
        },
        {
            title: 'Learn Something',
            name: 'learn-something',
            subCategories: [
                {
                    title: 'Learn to Meditate',
                    name: 'meditation',
                    trending: true
                },
                {
                    title: 'WeCards',
                    name: 'wecards'
                },
                {
                    title: 'Lunch with a Monk',
                    name: 'lunch-with-a-monk'
                },
                {
                    title: 'Resilience In The Workplace',
                    name: 'resilience'
                },
                {
                    title: 'Laughter Yoga',
                    name: 'laughter-yoga',
                    id: 239
                },
                {
                    title: 'Improv Workshop',
                    name: 'improv-workshop'
                },
                {
                    title: 'Body Language 101',
                    name: 'body-language-101'
                },
                {
                    title: 'Business Writing',
                    name: 'business-writing'
                },
                {
                    title: 'Build a Bike',
                    name: 'build-a-bike'
                }
            ]
        },
        {
            title: 'Interactive Performances',
            name: 'interactive-performances',
            subCategories: [
                {
                    title: 'Slam Poetry',
                    name: 'slam-poetry'
                },
                {
                    title: 'Murder Mystery',
                    name: 'murder-mystery'
                },
                {
                    title: 'Comedians',
                    name: 'comedians'
                },
                {
                    title: 'Pop Up Concert',
                    name: 'pop-up-concert'
                }
            ]
        }
    ];

    static all: Category[] = CategoriesStorage.activities.concat(CategoriesStorage.perks).concat(CategoriesStorage.wellness);
}