import bandeamir from "../assets/images/destinations/bandeamir.jpg";
import bamyan from "../assets/images/destinations/bamyan.jpg";
import baburGardens from "../assets/images/destinations/baburGardens.webp";
import nationalMuseum from "../assets/images/destinations/nationalMuseum.webp";
import qarghaLake from "../assets/images/destinations/qarghaLake.jpg";
import dragonValley from "../assets/images/destinations/dragonValley.jpg";
import heratCitadel from "../assets/images/destinations/heratCitadel.jpg";
import fridayMosque from "../assets/images/destinations/fridayMosque.jpg";
import musallaComplex from "../assets/images/destinations/musallaComplex.jpg";
import blueMosque from "../assets/images/destinations/blueMosque.jpg";
import ancientBalkh from "../assets/images/destinations/ancientBalkh.jpg";
import takhtERustam from "../assets/images/destinations/takhtERustam.jpg";
import badakhshan from "../assets/images/destinations/badakhshan.jpg";
import badghis from "../assets/images/destinations/badghis.jpg";
import baghlan from "../assets/images/destinations/baghlan.jpg";
import daykundi from "../assets/images/destinations/daykundi.jpg";
import farah from "../assets/images/destinations/farah.jpg";
import faryab from "../assets/images/destinations/faryab.jpg";
import ghazni from "../assets/images/destinations/ghazni.jpg";
import ghor from "../assets/images/destinations/ghor.jpg";
import helmand from "../assets/images/destinations/helmand.jpg";
import jowzjan from "../assets/images/destinations/jowzjan.jpg";
import kandahar from "../assets/images/destinations/kandahar.jpg";
import kapisa from "../assets/images/destinations/kapisa.jpg";
import khost from "../assets/images/destinations/khost.jpg";
import kunar from "../assets/images/destinations/kunar.jpg";
import kunduz from "../assets/images/destinations/kunduz.jpg";
import laghman from "../assets/images/destinations/laghman.jpg";
import logar from "../assets/images/destinations/logar.jpg";
import nangarhar from "../assets/images/destinations/nangarhar.jpg";
import nimroz from "../assets/images/destinations/nimroz.jpg";
import nuristan from "../assets/images/destinations/nuristan.jpg";
import paktia from "../assets/images/destinations/paktia.jpg";
import paktika from "../assets/images/destinations/paktika.jpg";
import parwan from "../assets/images/destinations/parwan.jpg";
import samangan from "../assets/images/destinations/samangan.jpg";
import sarepul from "../assets/images/destinations/sarepul.jpg";
import takhar from "../assets/images/destinations/takhar.jpg";
import uruzgan from "../assets/images/destinations/uruzgan.jpg";
import wardak from "../assets/images/destinations/wardak.jpg";
import zabul from "../assets/images/destinations/zabul.jpg";
import badakhshan2 from "../assets/images/destinations/badakhshan-1.jpg";

export const destinations = [
  {
    id: 1,
    name: "Gardens of Babur",
    province: "Kabul",
    category: "History",
    image: baburGardens,
    description:
      "A historic Mughal garden and the final resting place of Emperor Babur, offering panoramic views of Kabul.",
    highlights: [
      "Historic Gardens",
      "Babur's Tomb",
      "Panoramic Views",
      "Photography",
    ],
    tags: ["history", "garden", "culture", "photography", "family"],
    bestTime: "March - October",
    duration: "2 Hours",
    difficulty: "Easy",
    rating: 4.8,
    ai: true,
  },

  {
    id: 2,
    name: "National Museum of Afghanistan",
    province: "Kabul",
    category: "Culture",
    image: nationalMuseum,
    description:
      "Discover Afghanistan's rich history through ancient Buddhist relics, Islamic art, and archaeological treasures.",
    highlights: ["Ancient Artifacts", "History", "Culture", "Museum"],
    tags: ["museum", "history", "culture", "education"],
    bestTime: "All Year",
    duration: "2 Hours",
    difficulty: "Easy",
    rating: 4.7,
    ai: true,
  },
  {
    id: 3,
    name: "Qargha Lake",
    province: "Kabul",
    category: "Nature",
    image: qarghaLake,
    description:
      "A peaceful lake on the outskirts of Kabul, popular for boating, picnics and weekend relaxation.",
    highlights: ["Lake", "Boating", "Picnic", "Sunset"],
    tags: ["lake", "nature", "relaxation", "family", "photography"],
    bestTime: "April - October",
    duration: "Half Day",
    difficulty: "Easy",
    rating: 4.6,
    ai: true,
  },
  {
    id: 4,
    name: "Band-e-Amir National Park",
    province: "Bamyan",
    category: "Nature",
    image: bandeamir,
    description:
      "Afghanistan's first national park, famous for its crystal-clear blue lakes and towering limestone cliffs.",
    highlights: ["Blue Lakes", "Boating", "Camping", "Photography"],
    tags: ["nature", "lake", "camping", "photography", "mountains"],
    bestTime: "May - September",
    duration: "2 Days",
    difficulty: "Easy",
    rating: 4.9,
    ai: true,
  },
  {
    id: 5,
    name: "Bamyan Valley",
    province: "Bamyan",
    category: "History",
    image: bamyan,
    description:
      "A UNESCO World Heritage landscape famous for the ancient Buddha niches and spectacular mountain scenery.",
    highlights: ["Buddha Niches", "UNESCO Site", "History", "Mountains"],
    tags: ["history", "unesco", "culture", "photography"],
    bestTime: "April - October",
    duration: "2 Days",
    difficulty: "Easy",
    rating: 4.8,
    ai: true,
  },
  {
    id: 6,
    name: "Dragon Valley",
    province: "Bamyan",
    category: "Adventure",
    image: dragonValley,
    description:
      "A scenic valley surrounded by dramatic rock formations and local legends about an ancient dragon.",
    highlights: ["Hiking", "Rock Formations", "Nature", "Photography"],
    tags: ["adventure", "hiking", "nature", "mountains"],
    bestTime: "May - September",
    duration: "1 Day",
    difficulty: "Moderate",
    rating: 4.7,
    ai: true,
  },
  {
    id: 7,
    name: "Herat Citadel",
    province: "Herat",
    category: "History",
    image: heratCitadel,
    description:
      "One of the oldest and best-preserved fortresses in Central Asia with over 2,000 years of history.",
    highlights: ["Fortress", "Museum", "History", "Architecture"],
    tags: ["history", "architecture", "museum", "culture"],
    bestTime: "Spring",
    duration: "2 Hours",
    difficulty: "Easy",
    rating: 4.8,
    ai: true,
  },
  {
    id: 8,
    name: "Friday Mosque",
    province: "Herat",
    category: "Religious",
    image: fridayMosque,
    description:
      "One of Afghanistan's most beautiful mosques, renowned for its stunning blue tile work.",
    highlights: ["Islamic Architecture", "Blue Tiles", "Culture"],
    tags: ["religious", "architecture", "culture", "history"],
    bestTime: "All Year",
    duration: "1 Hour",
    difficulty: "Easy",
    rating: 4.9,
    ai: true,
  },
  {
    id: 9,
    name: "Musalla Complex",
    province: "Herat",
    category: "History",
    image: musallaComplex,
    description:
      "Historic minarets and architectural remains from the Timurid Empire.",
    highlights: ["Minarets", "History", "Photography"],
    tags: ["history", "architecture", "photography"],
    bestTime: "Spring",
    duration: "2 Hours",
    difficulty: "Easy",
    rating: 4.7,
    ai: true,
  },
  {
    id: 10,
    name: "Blue Mosque",
    province: "Balkh",
    category: "Religious",
    image: blueMosque,
    description:
      "The iconic Blue Mosque of Mazar-e-Sharif is one of Afghanistan's most recognizable landmarks.",
    highlights: ["Blue Domes", "Islamic Architecture", "Pilgrimage"],
    tags: ["religious", "architecture", "culture", "history"],
    bestTime: "Spring",
    duration: "2 Hours",
    difficulty: "Easy",
    rating: 4.9,
    ai: true,
  },
  {
    id: 11,
    name: "Ancient Balkh",
    province: "Balkh",
    category: "History",
    image: ancientBalkh,
    description:
      "One of the world's oldest cities, often called the Mother of Cities.",
    highlights: ["Ancient Ruins", "History", "Culture"],
    tags: ["history", "ancient", "culture"],
    bestTime: "March - May",
    duration: "Half Day",
    difficulty: "Easy",
    rating: 4.8,
    ai: true,
  },
  {
    id: 12,
    name: "Takht-e-Rustam",
    province: "Balkh",
    category: "History",
    image: takhtERustam,
    description:
      "A remarkable Buddhist monastery carved directly into rock, dating back to the 4th century.",
    highlights: ["Rock Monastery", "Buddhist Heritage", "Photography"],
    tags: ["history", "buddhist", "unesco", "culture"],
    bestTime: "Spring - Autumn",
    duration: "Half Day",
    difficulty: "Moderate",
    rating: 4.7,
    ai: true,
  },
  // BADAKHSHAN
  {
    id: 13,
    name: "Wakhan Corridor",
    province: "Badakhshan",
    category: "Adventure",
    image: badakhshan,
    description:
      "A remote mountain corridor famous for trekking, wildlife and breathtaking landscapes.",
    bestTime: "June - September",
    duration: "5 Days",
    ai: true,
    rating: 4.9,
  },

  // BADGHIS
  {
    id: 14,
    name: "Qala-e-Naw",
    province: "Badghis",
    category: "Culture",
    image: badghis,
    description:
      "Provincial capital surrounded by rolling hills and traditional Afghan culture.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.2,
  },

  // BAGHLAN
  {
    id: 15,
    name: "Surkh Kotal",
    province: "Baghlan",
    category: "History",
    image: baghlan,
    description: "Ancient Kushan archaeological site with historical ruins.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.5,
  },

  // DAYKUNDI
  {
    id: 16,
    name: "Shahristan Valley",
    province: "Daykundi",
    category: "Nature",
    image: daykundi,
    description: "Green valleys, rivers and peaceful mountain villages.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.6,
  },

  // FARAH
  {
    id: 17,
    name: "Farah Citadel",
    province: "Farah",
    category: "History",
    image: farah,
    description: "Historic fortress representing centuries of Afghan heritage.",
    bestTime: "Autumn",
    duration: "1 Day",
    ai: true,
    rating: 4.4,
  },

  // FARYAB
  {
    id: 18,
    name: "Maymana",
    province: "Faryab",
    category: "Culture",
    image: faryab,
    description:
      "Traditional northern Afghan city known for carpets and local markets.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.3,
  },

  // GHAZNI
  {
    id: 19,
    name: "Ghazni Minarets",
    province: "Ghazni",
    category: "History",
    image: ghazni,
    description:
      "Famous medieval minarets dating back to the Ghaznavid Empire.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.8,
  },

  // GHOR
  {
    id: 20,
    name: "Jam Minaret",
    province: "Ghor",
    category: "History",
    image: ghor,
    description:
      "UNESCO World Heritage Site standing in a remote mountain valley.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.9,
  },

  // HELMAND
  {
    id: 21,
    name: "Bost Citadel",
    province: "Helmand",
    category: "History",
    image: helmand,
    description: "Ancient fortress overlooking the Helmand River.",
    bestTime: "Winter",
    duration: "1 Day",
    ai: true,
    rating: 4.5,
  },

  // JOWZJAN
  {
    id: 22,
    name: "Sheberghan",
    province: "Jowzjan",
    category: "Culture",
    image: jowzjan,
    description:
      "Historic northern city famous for handicrafts and Uzbek culture.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.3,
  },
  // KANDAHAR
  {
    id: 23,
    name: "Ahmad Shah Baba Mausoleum",
    province: "Kandahar",
    category: "History",
    image: kandahar,
    description:
      "Resting place of Ahmad Shah Durrani, founder of modern Afghanistan.",
    bestTime: "Winter",
    duration: "1 Day",
    ai: true,
    rating: 4.8,
  },

  // KAPISA
  {
    id: 24,
    name: "Mahmud Raqi",
    province: "Kapisa",
    category: "Nature",
    image: kapisa,
    description: "Green valleys surrounded by beautiful mountains.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.5,
  },

  // KHOST
  {
    id: 25,
    name: "Tani Forest",
    province: "Khost",
    category: "Nature",
    image: khost,
    description: "Dense forests ideal for eco-tourism and hiking.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.4,
  },

  // KUNAR
  {
    id: 26,
    name: "Pech Valley",
    province: "Kunar",
    category: "Nature",
    image: kunar,
    description: "Mountain valley famous for rivers and lush forests.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.7,
  },

  // KUNDUZ
  {
    id: 27,
    name: "Khanabad River",
    province: "Kunduz",
    category: "Nature",
    image: kunduz,
    description: "Beautiful river surrounded by agricultural landscapes.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.2,
  },

  // LAGHMAN
  {
    id: 28,
    name: "Mehtarlam Gardens",
    province: "Laghman",
    category: "Nature",
    image: laghman,
    description: "Green parks and rivers near Mehtarlam city.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.3,
  },

  // LOGAR
  {
    id: 29,
    name: "Pul-e-Alam",
    province: "Logar",
    category: "Culture",
    image: logar,
    description: "Traditional Afghan town surrounded by fertile valleys.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.2,
  },

  // NANGARHAR
  {
    id: 30,
    name: "Darunta",
    province: "Nangarhar",
    category: "Nature",
    image: nangarhar,
    description: "Popular recreational area with rivers and mountains.",
    bestTime: "Spring",
    duration: "2 Days",
    ai: true,
    rating: 4.5,
  },

  // NIMROZ
  {
    id: 31,
    name: "Zaranj",
    province: "Nimroz",
    category: "Culture",
    image: nimroz,
    description: "Historic trading city in southwestern Afghanistan.",
    bestTime: "Winter",
    duration: "1 Day",
    ai: true,
    rating: 4.1,
  },

  // NURISTAN
  {
    id: 32,
    name: "Kamdesh Valley",
    province: "Nuristan",
    category: "Nature",
    image: nuristan,
    description: "Untouched forests, mountains and unique Nuristani culture.",
    bestTime: "Summer",
    duration: "3 Days",
    ai: true,
    rating: 4.9,
  },
  // PAKTIA
  {
    id: 33,
    name: "Gardez",
    province: "Paktia",
    category: "Culture",
    image: paktia,
    description:
      "Historic city surrounded by mountains and traditional villages.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.2,
  },

  // PAKTIKA
  {
    id: 34,
    name: "Urgun",
    province: "Paktika",
    category: "Adventure",
    image: paktika,
    description: "Mountain landscapes ideal for exploration.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.2,
  },

  // PARWAN
  {
    id: 35,
    name: "Salang Pass",
    province: "Parwan",
    category: "Adventure",
    image: parwan,
    description: "One of Afghanistan's most spectacular mountain passes.",
    bestTime: "Summer",
    duration: "1 Day",
    ai: true,
    rating: 4.8,
  },

  // SAMANGAN
  {
    id: 36,
    name: "Takht-e-Rostam",
    province: "Samangan",
    category: "History",
    image: samangan,
    description: "Ancient Buddhist monastery carved into rock.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.7,
  },

  // SAR-E-PUL
  {
    id: 37,
    name: "Sar-e-Pul Valley",
    province: "Sar-e-Pul",
    category: "Nature",
    image: sarepul,
    description: "Beautiful valleys with peaceful landscapes.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.4,
  },

  // TAKHAR
  {
    id: 38,
    name: "Taloqan",
    province: "Takhar",
    category: "Culture",
    image: takhar,
    description: "Historic city with beautiful northern scenery.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.3,
  },

  // URUZGAN
  {
    id: 39,
    name: "Tarin Kot",
    province: "Uruzgan",
    category: "Nature",
    image: uruzgan,
    description: "Mountain province offering scenic landscapes.",
    bestTime: "Spring",
    duration: "2 Days",
    ai: true,
    rating: 4.3,
  },

  // WARDAK
  {
    id: 40,
    name: "Maidan Shar",
    province: "Wardak",
    category: "Nature",
    image: wardak,
    description: "Green valleys close to Kabul with beautiful scenery.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: true,
    rating: 4.4,
  },

  // ZABUL
  {
    id: 41,
    name: "Qalat",
    province: "Zabul",
    category: "History",
    image: zabul,
    description:
      "Historic provincial capital with traditional Afghan heritage.",
    bestTime: "Autumn",
    duration: "1 Day",
    ai: true,
    rating: 4.2,
  },

  // BADAKHSHAN
  {
    id: 42,
    name: "Noshaq Peak",
    province: "Badakhshan",
    category: "Adventure",
    image: badakhshan2,
    description:
      "Afghanistan's highest mountain and a world-class mountaineering destination.",
    bestTime: "July - August",
    duration: "7 Days",
    ai: true,
    rating: 5.0,
  },
];
