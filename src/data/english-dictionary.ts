
import type { EnglishDictionaryEntry } from './types';

export const englishDictionaryData: EnglishDictionaryEntry[] = [
  {
    id: '1',
    word: 'hello',
    partOfSpeech: 'interjection',
    definitions: [
      {
        definition: 'Used as a greeting or to begin a telephone conversation.',
        example: 'Hello there, how are you?',
        synonyms: ['hi', 'greetings', 'hey'],
      },
    ],
    pronunciation: '/həˈloʊ/',
    amharicEquivalent: 'ሰላም',
    audioUrl: '/audio/english/hello.mp3', // Placeholder
  },
  {
    id: '2',
    word: 'water',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.',
        example: 'The plants need more water.',
        synonyms: ['H2O', 'aqua'],
      },
      {
        definition: '(as verb) Pour liquid, especially water, over (a plant or an area of ground) to encourage plant growth.',
        example: 'She watered the flowers every morning.',
      }
    ],
    pronunciation: '/ˈwɔːtər/',
    amharicEquivalent: 'ውሃ',
    audioUrl: '/audio/english/water.mp3', // Placeholder
  },
  {
    id: '3',
    word: 'love',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An intense feeling of deep affection.',
        example: 'Their love for each other was obvious.',
        synonyms: ['affection', 'fondness', 'caring'],
      },
      {
        definition: 'A great interest and pleasure in something.',
        example: 'His love for music was inspiring.',
        synonyms: ['passion', 'enthusiasm', 'delight'],
      }
    ],
    pronunciation: '/lʌv/',
    amharicEquivalent: 'ፍቅር',
    audioUrl: '/audio/english/love.mp3', // Placeholder
  },
  {
    id: '4',
    word: 'book',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
        example: 'I am reading a fascinating book about history.',
        synonyms: ['volume', 'tome', 'publication'],
      },
      {
        definition: '(as verb) Reserve (accommodation, a place, etc.); buy (a ticket) in advance.',
        example: 'I booked a flight to Addis Ababa.',
      }
    ],
    pronunciation: '/bʊk/',
    amharicEquivalent: 'መጽሐፍ',
    audioUrl: '/audio/english/book.mp3', // Placeholder
  },
  {
    id: '5',
    word: 'home',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The place where one lives permanently, especially as a member of a family or household.',
        example: 'There is no place like home.',
        synonyms: ['residence', 'dwelling', 'abode'],
      },
      {
        definition: 'A place where something flourishes, is most typically found, or from which it originates.',
        example: 'Ethiopia is the home of coffee.',
      }
    ],
    pronunciation: '/hoʊm/',
    amharicEquivalent: 'ቤት',
    audioUrl: '/audio/english/home.mp3', // Placeholder
  },
  {
    id: '6',
    word: 'time',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.',
        example: 'Time waits for no one.',
        synonyms: ['duration', 'period', 'era'],
      },
      {
        definition: 'A point of time as measured in hours and minutes past midnight or noon.',
        example: 'What time is it?',
      }
    ],
    pronunciation: '/taɪm/',
    amharicEquivalent: 'ጊዜ',
  },
  {
    id: '7',
    word: 'person',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A human being regarded as an individual.',
        example: 'Every person has a unique story.',
        synonyms: ['individual', 'human', 'being'],
      },
    ],
    pronunciation: '/ˈpɜːrsən/',
    amharicEquivalent: 'ሰው',
  },
  {
    id: '8',
    word: 'year',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The time taken by a planet to make one revolution around its star; for Earth, this is approximately 365 days.',
        example: 'It has been a productive year.',
        synonyms: ['annum', '12 months'],
      },
    ],
    pronunciation: '/jɪər/',
    amharicEquivalent: 'ዓመት',
  },
  {
    id: '9',
    word: 'way',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A method, style, or manner of doing something.',
        example: 'There are many ways to solve this problem.',
        synonyms: ['method', 'manner', 'approach'],
      },
      {
        definition: 'A road, path, or track for travel.',
        example: 'Can you show me the way to the station?',
      }
    ],
    pronunciation: '/weɪ/',
    amharicEquivalent: 'መንገድ',
  },
  {
    id: '10',
    word: 'day',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'Each of the twenty-four-hour periods, reckoned from one midnight to the next, into which a week, month, or year is divided.',
        example: 'Today is a beautiful day.',
        synonyms: ['24 hours', 'date'],
      },
    ],
    pronunciation: '/deɪ/',
    amharicEquivalent: 'ቀን',
    audioUrl: '/audio/english/day.mp3', // Placeholder
  },
  {
    id: '11',
    word: 'thing',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An object, fact, affair, or matter.',
        example: 'What is that thing on the table?',
        synonyms: ['object', 'item', 'entity'],
      },
    ],
    pronunciation: '/θɪŋ/',
    amharicEquivalent: 'ነገር',
  },
  {
    id: '12',
    word: 'man',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An adult male human being.',
        example: 'The man walked down the street.',
        synonyms: ['male', 'gentleman'],
      },
    ],
    pronunciation: '/mæn/',
    amharicEquivalent: 'ወንድ',
  },
  {
    id: '13',
    word: 'world',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The earth, together with all of its countries, peoples, and natural features.',
        example: 'The world is a vast and diverse place.',
        synonyms: ['earth', 'globe', 'planet'],
      },
    ],
    pronunciation: '/wɜːrld/',
    amharicEquivalent: 'ዓለም',
  },
  {
    id: '14',
    word: 'life',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The condition that distinguishes animals and plants from inorganic matter, including the capacity for growth, reproduction, functional activity, and continual change preceding death.',
        example: 'Life is precious.',
        synonyms: ['existence', 'being'],
      },
    ],
    pronunciation: '/laɪf/',
    amharicEquivalent: 'ሕይወት',
  },
  {
    id: '15',
    word: 'hand',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The end part of a person\'s arm beyond the wrist, including the palm, fingers, and thumb.',
        example: 'She held the pen in her hand.',
      },
    ],
    pronunciation: '/hænd/',
    amharicEquivalent: 'እጅ',
  },
  {
    id: '16',
    word: 'part',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A piece or segment of something.',
        example: 'This is only part of the story.',
        synonyms: ['section', 'portion', 'segment'],
      },
    ],
    pronunciation: '/pɑːrt/',
    amharicEquivalent: 'ክፍል',
  },
  {
    id: '17',
    word: 'child',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A young human being below the age of puberty or below the legal age of majority.',
        example: 'The child played in the park.',
        synonyms: ['kid', 'youngster', 'juvenile'],
      },
    ],
    pronunciation: '/tʃaɪld/',
    amharicEquivalent: 'ልጅ',
  },
  {
    id: '18',
    word: 'eye',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'Each of a pair of globular organs of sight in the head of humans and vertebrate animals.',
        example: 'She has beautiful blue eyes.',
      },
    ],
    pronunciation: '/aɪ/',
    amharicEquivalent: 'ዐይን',
  },
  {
    id: '19',
    word: 'woman',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An adult female human being.',
        example: 'The woman was a skilled engineer.',
        synonyms: ['female', 'lady'],
      },
    ],
    pronunciation: '/ˈwʊmən/',
    amharicEquivalent: 'ሴት',
  },
  {
    id: '20',
    word: 'place',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A particular position or point in space.',
        example: 'This is the place where we first met.',
        synonyms: ['location', 'spot', 'position'],
      },
    ],
    pronunciation: '/pleɪs/',
    amharicEquivalent: 'ቦታ',
  },
  {
    id: '21',
    word: 'work',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'Activity involving mental or physical effort done in order to achieve a purpose or result.',
        example: 'He enjoys his work at the company.',
        synonyms: ['job', 'occupation', 'labor', 'employment'],
      },
      {
        definition: '(as verb) Be engaged in physical or mental activity in order to achieve a result; do work.',
        example: 'She works hard every day.'
      }
    ],
    pronunciation: '/wɜːrk/',
    amharicEquivalent: 'ሥራ',
  },
  {
    id: '22',
    word: 'week',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A period of seven days.',
        example: 'There are 52 weeks in a year.',
      },
    ],
    pronunciation: '/wiːk/',
    amharicEquivalent: 'ሳምንት',
  },
  {
    id: '23',
    word: 'case',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An instance of a particular situation; an example of something occurring.',
        example: 'This is a classic case of mistaken identity.',
        synonyms: ['instance', 'example', 'situation'],
      },
    ],
    pronunciation: '/keɪs/',
    amharicEquivalent: 'ጉዳይ / ሁኔታ',
  },
  {
    id: '24',
    word: 'point',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A particular spot, place, or position in an area or on a map, object, or surface.',
        example: 'Meet me at that point on the map.',
        synonyms: ['spot', 'location', 'position'],
      },
      {
        definition: 'The tapered, sharp end of a tool, weapon, or other object.',
        example: 'The point of the pencil broke.'
      }
    ],
    pronunciation: '/pɔɪnt/',
    amharicEquivalent: 'ነጥብ',
  },
  {
    id: '25',
    word: 'government',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The group of people with the authority to govern a country or state; a particular ministry in office.',
        example: 'The government announced new policies.',
        synonyms: ['administration', 'regime', 'authorities'],
      },
    ],
    pronunciation: '/ˈɡʌvərnmənt/',
    amharicEquivalent: 'መንግሥት',
  },
  {
    id: '26',
    word: 'company',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A commercial business.',
        example: 'He works for a large software company.',
        synonyms: ['firm', 'business', 'corporation'],
      },
    ],
    pronunciation: '/ˈkʌmpəni/',
    amharicEquivalent: 'ድርጅት',
  },
  {
    id: '27',
    word: 'number',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An arithmetical value, expressed by a word, symbol, or figure, representing a particular quantity and used in counting and making calculations.',
        example: 'The number seven is lucky for some.',
        synonyms: ['numeral', 'figure', 'digit'],
      },
    ],
    pronunciation: '/ˈnʌmbər/',
    amharicEquivalent: 'ቁጥር',
  },
  {
    id: '28',
    word: 'Dawit',
    partOfSpeech: 'proper noun',
    definitions: [
      {
        definition: 'A male given name, the English form of David, often used in Ethiopia.',
        example: 'Dawit is a common name in Ethiopia.',
      },
    ],
    pronunciation: '/ˈdɑːwiːt/',
    amharicEquivalent: 'ዳዊት',
    audioUrl: '/audio/english/dawit.mp3', // Placeholder
  },
  {
    id: '29',
    word: 'mother',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A female parent.',
        example: 'She is a caring mother.',
        synonyms: ['mom', 'mama', 'mater'],
      },
    ],
    pronunciation: '/ˈmʌðər/',
    amharicEquivalent: 'እናት',
  },
  {
    id: '30',
    word: 'father',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A male parent.',
        example: 'His father taught him many things.',
        synonyms: ['dad', 'papa', 'pater'],
      },
    ],
    pronunciation: '/ˈfɑːðər/',
    amharicEquivalent: 'አባት',
  },
  {
    id: '31',
    word: 'run',
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'Move at a speed faster than a walk, never having both or all the feet on the ground at the same time.',
        example: 'The athletes run around the track.',
        synonyms: ['sprint', 'jog', 'dash'],
      },
      {
        definition: '(of a liquid) flow.',
        example: 'Tears ran down her cheeks.',
        synonyms: ['flow', 'pour', 'stream'],
      },
      {
        definition: 'Be in charge of; manage.',
        example: 'She runs a small café.',
        synonyms: ['manage', 'operate', 'direct'],
      }
    ],
    pronunciation: '/rʌn/',
    amharicEquivalent: 'ሩጥ / አሂድ / አስተዳድር',
  },
  {
    id: '32',
    word: 'read',
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'Look at and comprehend the meaning of (written or printed matter) by mentally interpreting the characters or symbols of which it is composed.',
        example: 'I like to read novels in my free time.',
        synonyms: ['peruse', 'scan', 'study'],
      },
    ],
    pronunciation: '/riːd/',
    amharicEquivalent: 'አንብብ',
  },
  {
    id: '33',
    word: 'write',
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'Mark (letters, words, or other symbols) on a surface, typically paper, with a pen, pencil, or similar implement.',
        example: 'She wrote a letter to her friend.',
        synonyms: ['compose', 'draft', 'pen'],
      },
    ],
    pronunciation: '/raɪt/',
    amharicEquivalent: 'ጻፍ',
  },
  {
    id: '34',
    word: 'eat',
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'Put (food) into the mouth and chew and swallow it.',
        example: 'We eat dinner at 7 PM.',
        synonyms: ['consume', 'devour', 'partake'],
      },
    ],
    pronunciation: '/iːt/',
    amharicEquivalent: 'ብላ',
  },
  {
    id: '35',
    word: 'drink',
    partOfSpeech: 'verb',
    definitions: [
      {
        definition: 'Take (a liquid) into the mouth and swallow.',
        example: 'It is important to drink plenty of water.',
        synonyms: ['sip', 'gulp', 'imbibe'],
      },
      {
        definition: '(as noun) A liquid that can be swallowed as refreshment or nourishment.',
        example: 'Can I get you a drink?'
      }
    ],
    pronunciation: '/drɪŋk/',
    amharicEquivalent: 'ጠጣ / መጠጥ',
  },
  {
    id: '36',
    word: 'happy',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Feeling or showing pleasure or contentment.',
        example: 'She was happy to see her family.',
        synonyms: ['joyful', 'cheerful', 'pleased'],
        antonyms: ['sad', 'unhappy'],
      },
    ],
    pronunciation: '/ˈhæpi/',
    amharicEquivalent: 'ደስተኛ',
  },
  {
    id: '37',
    word: 'sad',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Feeling or showing sorrow; unhappy.',
        example: 'The news made him sad.',
        synonyms: ['unhappy', 'sorrowful', 'dejected'],
        antonyms: ['happy', 'joyful'],
      },
    ],
    pronunciation: '/sæd/',
    amharicEquivalent: 'አሳዛኝ / የተከፋ',
  },
  {
    id: '38',
    word: 'big',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Of considerable size, extent, or intensity.',
        example: 'That is a big dog.',
        synonyms: ['large', 'huge', 'sizable'],
        antonyms: ['small', 'little'],
      },
    ],
    pronunciation: '/bɪɡ/',
    amharicEquivalent: 'ትልቅ',
  },
  {
    id: '39',
    word: 'small',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Of a size that is less than normal or usual.',
        example: 'She lives in a small apartment.',
        synonyms: ['little', 'tiny', 'minute'],
        antonyms: ['big', 'large'],
      },
    ],
    pronunciation: '/smɔːl/',
    amharicEquivalent: 'ትንሽ',
  },
  {
    id: '40',
    word: 'good',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'To be desired or approved of.',
        example: 'He did a good job.',
        synonyms: ['excellent', 'fine', 'satisfactory'],
        antonyms: ['bad', 'poor'],
      },
      {
        definition: 'Having the qualities required for a particular role.',
        example: 'She is a good teacher.'
      }
    ],
    pronunciation: '/ɡʊd/',
    amharicEquivalent: 'ጥሩ / መልካም',
    audioUrl: '/audio/english/good.mp3', // Placeholder
  },
  {
    id: '41',
    word: 'bad',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Of poor quality; inferior or defective.',
        example: 'This is a bad apple.',
        synonyms: ['poor', 'inferior', 'terrible'],
        antonyms: ['good', 'excellent'],
      },
      {
        definition: 'Unpleasant or unwelcome.',
        example: 'We had bad weather on our trip.'
      }
    ],
    pronunciation: '/bæd/',
    amharicEquivalent: 'መጥፎ',
  },
  {
    id: '42',
    word: 'new',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Produced, introduced, or discovered recently or now for the first time; not existing before.',
        example: 'I bought a new car.',
        synonyms: ['recent', 'modern', 'current'],
        antonyms: ['old', 'ancient'],
      },
    ],
    pronunciation: '/njuː/',
    amharicEquivalent: 'አዲስ',
  },
  {
    id: '43',
    word: 'old',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Having lived for a long time; no longer young.',
        example: 'My grandfather is very old.',
        synonyms: ['aged', 'elderly', 'ancient'],
        antonyms: ['new', 'young'],
      },
      {
        definition: 'Belonging only or chiefly to the past; former or previous.',
        example: 'This is my old school.'
      }
    ],
    pronunciation: '/oʊld/',
    amharicEquivalent: 'አሮጌ / የቆየ / ሽማግሌ',
  },
  {
    id: '44',
    word: 'beautiful',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Pleasing the senses or mind aesthetically.',
        example: 'The sunset was beautiful.',
        synonyms: ['pretty', 'lovely', 'gorgeous', 'attractive'],
        antonyms: ['ugly'],
      },
    ],
    pronunciation: '/ˈbjuːtɪfəl/',
    amharicEquivalent: 'ቆንጆ / ውብ',
  },
  {
    id: '45',
    word: 'ugly',
    partOfSpeech: 'adjective',
    definitions: [
      {
        definition: 'Unpleasant or repulsive, especially in appearance.',
        example: 'The old building looked ugly.',
        synonyms: ['unattractive', 'hideous', 'plain'],
        antonyms: ['beautiful', 'pretty'],
      },
    ],
    pronunciation: '/ˈʌɡli/',
    amharicEquivalent: 'አስቀያሚ',
  },
  {
    id: '46',
    word: 'knowledge',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'Facts, information, and skills acquired by a person through experience or education; the theoretical or practical understanding of a subject.',
        example: 'He has a vast knowledge of history.',
        synonyms: ['understanding', 'learning', 'wisdom', 'erudition'],
      },
    ],
    pronunciation: '/ˈnɒlɪdʒ/',
    amharicEquivalent: 'እውቀት',
  },
  {
    id: '47',
    word: 'power',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The ability or capacity to do something or act in a particular way.',
        example: 'The king had absolute power.',
        synonyms: ['strength', 'might', 'authority', 'control'],
      },
      {
        definition: 'Physical strength and force exerted by something or someone.',
        example: 'The power of the engine was impressive.'
      }
    ],
    pronunciation: '/ˈpaʊər/',
    amharicEquivalent: 'ኃይል / ሥልጣን',
  },
  {
    id: '48',
    word: 'friend',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A person whom one knows and with whom one has a bond of mutual affection, typically exclusive of sexual or family relations.',
        example: 'She is my best friend.',
        synonyms: ['companion', 'pal', 'buddy', 'confidant'],
      },
    ],
    pronunciation: '/frɛnd/',
    amharicEquivalent: 'ጓደኛ',
  },
  {
    id: '49',
    word: 'family',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A group consisting of parents and children living together in a household.',
        example: 'He has a large family.',
        synonyms: ['relatives', 'kin', 'household'],
      },
    ],
    pronunciation: '/ˈfæməli/',
    amharicEquivalent: 'ቤተሰብ',
  },
  {
    id: '50',
    word: 'computer',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.',
        example: 'I use my computer for work and entertainment.',
        synonyms: ['PC', 'laptop', 'processor'],
      },
    ],
    pronunciation: '/kəmˈpjuːtər/',
    amharicEquivalent: 'ኮምፒውተር',
  },
  {
    id: '51',
    word: 'school',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'An institution for educating children.',
        example: 'My children go to the local school.',
        synonyms: ['academy', 'college', 'institute'],
      },
    ],
    pronunciation: '/skuːl/',
    amharicEquivalent: 'ትምህርት ቤት',
  },
  {
    id: '52',
    word: 'teacher',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A person who teaches, especially in a school.',
        example: 'The teacher explained the lesson clearly.',
        synonyms: ['educator', 'instructor', 'tutor'],
      },
    ],
    pronunciation: '/ˈtiːtʃər/',
    amharicEquivalent: 'መምህር',
  },
  {
    id: '53',
    word: 'student',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A person who is studying at a school or college.',
        example: 'She is a diligent student.',
        synonyms: ['pupil', 'learner', 'scholar'],
      },
    ],
    pronunciation: '/ˈstjuːdənt/',
    amharicEquivalent: 'ተማሪ',
  },
  {
    id: '54',
    word: 'tree',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.',
        example: 'There is a large oak tree in the park.',
        synonyms: ['sapling', 'timber'],
      },
    ],
    pronunciation: '/triː/',
    amharicEquivalent: 'ዛፍ',
  },
  {
    id: '55',
    word: 'dog',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.',
        example: 'My dog loves to play fetch.',
        synonyms: ['canine', 'hound', 'pup'],
      },
    ],
    pronunciation: '/dɒɡ/',
    amharicEquivalent: 'ውሻ',
  },
  {
    id: '56',
    word: 'cat',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.',
        example: 'The cat purred contentedly.',
        synonyms: ['feline', 'kitten', 'tabby'],
      },
    ],
    pronunciation: '/kæt/',
    amharicEquivalent: 'ድመት',
  },
  {
    id: '57',
    word: 'sun',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The star around which the earth orbits.',
        example: 'The sun provides light and heat.',
        synonyms: ['star', 'daystar', 'Sol'],
      },
    ],
    pronunciation: '/sʌn/',
    amharicEquivalent: 'ፀሐይ',
  },
  {
    id: '58',
    word: 'moon',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.',
        example: 'The full moon was bright in the sky.',
        synonyms: ['luna', 'satellite'],
      },
    ],
    pronunciation: '/muːn/',
    amharicEquivalent: 'ጨረቃ',
  },
  {
    id: '59',
    word: 'star',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'A fixed luminous point in the night sky that is a large, remote incandescent body like the sun.',
        example: 'We wished upon a star.',
        synonyms: ['celestial body', 'luminary'],
      },
    ],
    pronunciation: '/stɑːr/',
    amharicEquivalent: 'ኮከብ',
  },
  {
    id: '60',
    word: 'language',
    partOfSpeech: 'noun',
    definitions: [
      {
        definition: 'The method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way.',
        example: 'English is a global language.',
        synonyms: ['tongue', 'dialect', 'speech'],
      },
    ],
    pronunciation: '/ˈlæŋɡwɪdʒ/',
    amharicEquivalent: 'ቋንቋ',
    audioUrl: '/audio/english/language.mp3', // Placeholder
  }
];
