export const groupLabels = ["মুভমেন্ট", "দৈনন্দিন কাজ", "অনুভব করা", "শেখা", "পড়া", "ইমোশন / অনুভূতি", "ক্ষমতা, ইচ্ছা", 
    "পরিবার ও সম্পর্ক", "ঘরের জিনিসপত্র", "সময় ও দিন", "রঙ", "স্কুল ও পড়াশোনা", "বাজার / কেনাকাটা", "ভ্রমণ ও চলাচল",
"শরীরের অঙ্গ", "আবহাওয়া ও প্রকৃতি", "প্রশ্নবোধক শব্দ", "অনুভূতি", "দিকনির্দেশ", "অফিস ও কাজ", "খেলাধুলা ও শরীরচর্চা", 
"রেস্টুরেন্ট ও খাবার", "প্রতিক্রিয়া ও মতামত", "পশু-পাখি", "ফল ও সবজি", "দেশ ও ভাষা", "গৃহস্থালি কাজ", "স্বাস্থ্য ও চিকিৎসা",
"চাকরি ও পেশা","ঘরের কক্ষ ও জিনিসপত্র","দৈনন্দিন রুটিন",
// "","","","","","","",
// "","","","","","","","",
// "","","","","","","","",
// "","","","","","","","",
// "","","","","","","","",
// "","","","","","","","",
];

export const wordGroups = [
  // Group 1: অবস্থান / অবস্থানবাচক ক্রিয়া
  [
    { german: 'stehen', banglaPronunciation: 'শ্টেহেন', banglaMeaning: 'দাঁড়িয়ে থাকা' },
    { german: 'sitzen', banglaPronunciation: 'জিৎসেন', banglaMeaning: 'বসে থাকা' },
    { german: 'liegen', banglaPronunciation: 'লিগেন', banglaMeaning: 'শোয়ে থাকা' },
    { german: 'fahren', banglaPronunciation: 'ফাহরেন', banglaMeaning: 'চালানো / যাওয়া (যানবাহনে)' },
    { german: 'laufen', banglaPronunciation: 'লাউফেন', banglaMeaning: 'দৌড়ানো / হাঁটা' }
  ],

  // Group 2: মৌলিক দৈনন্দিন কাজ
  [
    { german: 'essen', banglaPronunciation: 'এসেন', banglaMeaning: 'খাওয়া' },
    { german: 'trinken', banglaPronunciation: 'ট্রিঙ্কেন', banglaMeaning: 'পান করা' },
    { german: 'schlafen', banglaPronunciation: 'শ্লাফেন', banglaMeaning: 'ঘুমানো' },
    { german: 'sprechen', banglaPronunciation: 'শপ্রেখেন', banglaMeaning: 'কথা বলা' },
    { german: 'hören', banglaPronunciation: 'হ্যোরেন', banglaMeaning: 'শোনা' }
  ],

  // Group 3: ইন্দ্রিয় ও বোধ
  [
    { german: 'sehen', banglaPronunciation: 'জেহেন', banglaMeaning: 'দেখা' },
    { german: 'fühlen', banglaPronunciation: 'ফ্যুলেন', banglaMeaning: 'অনুভব করা' },
    { german: 'riechen', banglaPronunciation: 'রি্খেন', banglaMeaning: 'ঘ্রাণ পাওয়া' },
    { german: 'schmecken', banglaPronunciation: 'শ্মেকেন', banglaMeaning: 'স্বাদ পাওয়া' },
    { german: 'denken', banglaPronunciation: 'ডেনকেন', banglaMeaning: 'চিন্তা করা' }
  ],

  // Group 4: জ্ঞান, শেখা ও বোঝা
  [
    { german: 'lernen', banglaPronunciation: 'লারনেন', banglaMeaning: 'শেখা' },
    { german: 'verstehen', banglaPronunciation: 'ফেয়ারশ্টেহেন', banglaMeaning: 'বোঝা' },
    { german: 'wissen', banglaPronunciation: 'ভিসেন', banglaMeaning: 'জানা (জ্ঞান থাকা)' },
    { german: 'vergessen', banglaPronunciation: 'ফার্গেসেন', banglaMeaning: 'ভুলে যাওয়া' },
    { german: 'erklären', banglaPronunciation: 'এরক্লেয়ারেন', banglaMeaning: 'ব্যাখ্যা করা' }
  ],

  // Group 5: লেখা-পড়ার কাজ
  [
    { german: 'lesen', banglaPronunciation: 'লেজেন', banglaMeaning: 'পড়া (বই বা লেখা)' },
    { german: 'schreiben', banglaPronunciation: 'শ্রাইবেন', banglaMeaning: 'লেখা' },
    { german: 'erzählen', banglaPronunciation: 'এরৎসেলেন', banglaMeaning: 'গল্প বলা / বর্ণনা করা' },
    { german: 'fragen', banglaPronunciation: 'ফ্রাগেন', banglaMeaning: 'প্রশ্ন করা' },
    { german: 'antworten', banglaPronunciation: 'আন্টভোর্টেন', banglaMeaning: 'উত্তর দেওয়া' }
  ],
    // Group 3: ইমোশন / অনুভূতি
  [
    { german: 'lieben', banglaPronunciation: 'লীবেন', banglaMeaning: 'ভালোবাসা' },
    { german: 'hassen', banglaPronunciation: 'হাসেন', banglaMeaning: 'ঘৃণা করা' },
    { german: 'mögen', banglaPronunciation: 'ম্যোগেন', banglaMeaning: 'পছন্দ করা' },
    { german: 'fürchten', banglaPronunciation: 'ফিউরখ্টেন', banglaMeaning: 'ভয় পাওয়া' },
    { german: 'weinen', banglaPronunciation: 'ভাইনেন', banglaMeaning: 'কাঁদা' }
  ],

  // Group 4: Modal verbs (ক্ষমতা, ইচ্ছা ইত্যাদি বোঝাতে ব্যবহৃত হয়)
  [
    { german: 'können', banglaPronunciation: 'ক্যোনেন', banglaMeaning: 'পারতে পারা / সক্ষম হওয়া' },
    { german: 'müssen', banglaPronunciation: 'ম্যুসেন', banglaMeaning: 'করতেই হবে / বাধ্য হওয়া' },
    { german: 'dürfen', banglaPronunciation: 'ড্যুরফেন', banglaMeaning: 'অনুমতি থাকা' },
    { german: 'sollen', banglaPronunciation: 'জোলেন', banglaMeaning: 'উচিত হওয়া' },
    { german: 'wollen', banglaPronunciation: 'ভোলেন', banglaMeaning: 'চাওয়া / ইচ্ছা করা' }
  ],

  // Group 5: পরিবার ও সম্পর্ক
  [
    { german: 'Mutter', banglaPronunciation: 'মুটার', banglaMeaning: 'মা' },
    { german: 'Vater', banglaPronunciation: 'ফাটার', banglaMeaning: 'বাবা' },
    { german: 'Bruder', banglaPronunciation: 'ব্রুডার', banglaMeaning: 'ভাই' },
    { german: 'Schwester', banglaPronunciation: 'শভেস্টার', banglaMeaning: 'বোন' },
    { german: 'Kind', banglaPronunciation: 'কিন্ট', banglaMeaning: 'শিশু / সন্তান' }
  ],
    [
    { german: 'Tisch', banglaPronunciation: 'টিশ', banglaMeaning: 'টেবিল' },
    { german: 'Stuhl', banglaPronunciation: 'শটুল', banglaMeaning: 'চেয়ার' },
    { german: 'Bett', banglaPronunciation: 'বেট', banglaMeaning: 'বিছানা' },
    { german: 'Lampe', banglaPronunciation: 'লাম্পে', banglaMeaning: 'ল্যাম্প / বাতি' },
    { german: 'Tür', banglaPronunciation: 'টুর', banglaMeaning: 'দরজা' }
  ],

  // Group 7: সময় ও দিন (Time & Days)
  [
    { german: 'heute', banglaPronunciation: 'হয়টে', banglaMeaning: 'আজ' },
    { german: 'morgen', banglaPronunciation: 'মর্গেন', banglaMeaning: 'আগামীকাল' },
    { german: 'gestern', banglaPronunciation: 'গেস্টার্ন', banglaMeaning: 'গতকাল' },
    { german: 'Woche', banglaPronunciation: 'ভোখে', banglaMeaning: 'সপ্তাহ' },
    { german: 'Monat', banglaPronunciation: 'মোনাট', banglaMeaning: 'মাস' }
  ],

  // Group 8: রঙ (Colors)
  [
    { german: 'rot', banglaPronunciation: 'রোট', banglaMeaning: 'লাল' },
    { german: 'blau', banglaPronunciation: 'ব্লাউ', banglaMeaning: 'নীল' },
    { german: 'grün', banglaPronunciation: 'গ্র্যুন', banglaMeaning: 'সবুজ' },
    { german: 'gelb', banglaPronunciation: 'গেল্ব', banglaMeaning: 'হলুদ' },
    { german: 'schwarz', banglaPronunciation: 'শ্ভার্ট্স', banglaMeaning: 'কালো' }
  ],

  // Group 9: স্কুল ও পড়াশোনা (School & Study)
  [
    { german: 'Schule', banglaPronunciation: 'শুলে', banglaMeaning: 'স্কুল' },
    { german: 'Lehrer', banglaPronunciation: 'লারার', banglaMeaning: 'শিক্ষক' },
    { german: 'Schülerin', banglaPronunciation: 'শুলারিন', banglaMeaning: 'ছাত্রী' },
    { german: 'Buch', banglaPronunciation: 'বুখ', banglaMeaning: 'বই' },
    { german: 'Tafel', banglaPronunciation: 'টাফেল', banglaMeaning: 'বোর্ড' }
  ],

  // Group 10: বাজার / কেনাকাটা (Shopping)
  [
    { german: 'Markt', banglaPronunciation: 'মার্ক্ট', banglaMeaning: 'বাজার' },
    { german: 'Kaufen', banglaPronunciation: 'কাউফেন', banglaMeaning: 'কেনা' },
    { german: 'Verkaufen', banglaPronunciation: 'ফেয়ারকাউফেন', banglaMeaning: 'বিক্রি করা' },
    { german: 'Preis', banglaPronunciation: 'প্রাইস', banglaMeaning: 'দাম' },
    { german: 'Geld', banglaPronunciation: 'গেল্ড', banglaMeaning: 'টাকা / অর্থ' }
  ],
    // Group 11: ভ্রমণ ও চলাচল (Travel & Transport)
  [
    { german: 'Auto', banglaPronunciation: 'আউটো', banglaMeaning: 'গাড়ি' },
    { german: 'Zug', banglaPronunciation: 'জুগ', banglaMeaning: 'ট্রেন' },
    { german: 'Flugzeug', banglaPronunciation: 'ফ্লুগৎসয়্‌গ', banglaMeaning: 'বিমান' },
    { german: 'Fahrrad', banglaPronunciation: 'ফাহর্রাড', banglaMeaning: 'সাইকেল' },
    { german: 'Reisen', banglaPronunciation: 'রাইজেন', banglaMeaning: 'ভ্রমণ করা' }
  ],

  // Group 12: শরীরের অঙ্গ (Body Parts)
  [
    { german: 'Kopf', banglaPronunciation: 'কপ্ফ', banglaMeaning: 'মাথা' },
    { german: 'Hand', banglaPronunciation: 'হান্ড', banglaMeaning: 'হাত' },
    { german: 'Bein', banglaPronunciation: 'বাইন', banglaMeaning: 'পা' },
    { german: 'Auge', banglaPronunciation: 'আউগে', banglaMeaning: 'চোখ' },
    { german: 'Herz', banglaPronunciation: 'হার্ট্‌স', banglaMeaning: 'হৃদয় / মন' }
  ],

  // Group 13: আবহাওয়া ও প্রকৃতি (Weather & Nature)
  [
    { german: 'Wetter', banglaPronunciation: 'ভেটার', banglaMeaning: 'আবহাওয়া' },
    { german: 'Sonne', banglaPronunciation: 'জোনে', banglaMeaning: 'সূর্য' },
    { german: 'Regen', banglaPronunciation: 'রেগেন', banglaMeaning: 'বৃষ্টি' },
    { german: 'Schnee', banglaPronunciation: 'শনে', banglaMeaning: 'তুষার' },
    { german: 'Baum', banglaPronunciation: 'বাউম', banglaMeaning: 'গাছ' }
  ],

  // Group 14: প্রশ্নবোধক শব্দ (Question Words)
  [
    { german: 'Was', banglaPronunciation: 'ভাস', banglaMeaning: 'কি?' },
    { german: 'Wer', banglaPronunciation: 'ভেয়ার', banglaMeaning: 'কে?' },
    { german: 'Wo', banglaPronunciation: 'ভো', banglaMeaning: 'কোথায়?' },
    { german: 'Wann', banglaPronunciation: 'ভান', banglaMeaning: 'কখন?' },
    { german: 'Warum', banglaPronunciation: 'ভারুম', banglaMeaning: 'কেন?' }
  ],

  // Group 15: অনুভূতি ও অবস্থা (Feelings & Conditions)
  [
    { german: 'glücklich', banglaPronunciation: 'গ্ল্যুকলিশ', banglaMeaning: 'সুখী' },
    { german: 'traurig', banglaPronunciation: 'ট্রাউরিশ', banglaMeaning: 'দুঃখিত' },
    { german: 'krank', banglaPronunciation: 'ক্রাংক', banglaMeaning: 'অসুস্থ' },
    { german: 'müde', banglaPronunciation: 'মুডে', banglaMeaning: 'ক্লান্ত' },
    { german: 'hungrig', banglaPronunciation: 'হুংরিশ', banglaMeaning: 'ক্ষুধার্ত' }
  ],
    // Group 16: দিকনির্দেশ (Directions)
  [
    { german: 'links', banglaPronunciation: 'লিঙ্ক্‌স', banglaMeaning: 'বাম দিকে' },
    { german: 'rechts', banglaPronunciation: 'রেখ্‌ট্‌স', banglaMeaning: 'ডান দিকে' },
    { german: 'geradeaus', banglaPronunciation: 'গেরাডেআউস', banglaMeaning: 'সোজা' },
    { german: 'zurück', banglaPronunciation: 'চুরুক', banglaMeaning: 'পেছনে' },
    { german: 'oben', banglaPronunciation: 'ওবেন', banglaMeaning: 'উপরে' }
  ],

  // Group 17: অফিস ও কাজ (Office & Work)
  [
    { german: 'Arbeit', banglaPronunciation: 'আরবাইট', banglaMeaning: 'কাজ' },
    { german: 'Chef', banglaPronunciation: 'শেফ', banglaMeaning: 'বস / ম্যানেজার' },
    { german: 'Kollege', banglaPronunciation: 'কোলেগে', banglaMeaning: 'সহকর্মী (পুরুষ)' },
    { german: 'Büro', banglaPronunciation: 'বুরো', banglaMeaning: 'অফিস' },
    { german: 'Pause', banglaPronunciation: 'পাউজে', banglaMeaning: 'বিরতি' }
  ],

  // Group 18: খেলাধুলা ও শরীরচর্চা (Sports & Fitness)
  [
    { german: 'Sport', banglaPronunciation: 'শ্পোর্ট', banglaMeaning: 'খেলাধুলা' },
    { german: 'spielen', banglaPronunciation: 'শ্পিলেন', banglaMeaning: 'খেলা / বাজানো' },
    { german: 'laufen', banglaPronunciation: 'লাউফেন', banglaMeaning: 'দৌড়ানো / হাঁটা' },
    { german: 'springen', banglaPronunciation: 'শ্প্রিঙ্গেন', banglaMeaning: 'লাফ দেওয়া' },
    { german: 'schwimmen', banglaPronunciation: 'শভিমেন', banglaMeaning: 'সাঁতার কাটা' }
  ],

  // Group 19: রেস্টুরেন্ট ও খাবার (Restaurant & Food)
  [
    { german: 'Restaurant', banglaPronunciation: 'রেস্টোরাঁ', banglaMeaning: 'রেস্টুরেন্ট' },
    { german: 'Speisekarte', banglaPronunciation: 'শ্পাইজেকার্টে', banglaMeaning: 'মেনু' },
    { german: 'Bestellen', banglaPronunciation: 'বেশ্টেলেন', banglaMeaning: 'অর্ডার করা' },
    { german: 'Rechnung', banglaPronunciation: 'রেখ্‌নুং', banglaMeaning: 'বিল' },
    { german: 'Kellner', banglaPronunciation: 'কেল্নার', banglaMeaning: 'ওয়েটার' }
  ],

  // Group 20: প্রতিক্রিয়া ও মতামত (Responses & Opinions)
  [
    { german: 'ja', banglaPronunciation: 'ইয়া', banglaMeaning: 'হ্যাঁ' },
    { german: 'nein', banglaPronunciation: 'নাইন', banglaMeaning: 'না' },
    { german: 'vielleicht', banglaPronunciation: 'ফিলাইহ্‌ট', banglaMeaning: 'হয়তো' },
    { german: 'ich glaube', banglaPronunciation: 'ইখ গ্লাউবে', banglaMeaning: 'আমি মনে করি' },
    { german: 'ich denke', banglaPronunciation: 'ইখ ডেঙ্কে', banglaMeaning: 'আমি ভাবছি / আমার মনে হয়' }
  ],
    [
    { german: 'Hund', banglaPronunciation: 'হুন্ড', banglaMeaning: 'কুকুর' },
    { german: 'Katze', banglaPronunciation: 'কাট্‌সে', banglaMeaning: 'বিড়াল' },
    { german: 'Vogel', banglaPronunciation: 'ফোগেল', banglaMeaning: 'পাখি' },
    { german: 'Kuh', banglaPronunciation: 'কু', banglaMeaning: 'গরু' },
    { german: 'Pferd', banglaPronunciation: 'ফেয়ার্ট', banglaMeaning: 'ঘোড়া' }
  ],

  // Group 22: ফল ও সবজি (Fruits & Vegetables)
  [
    { german: 'Apfel', banglaPronunciation: 'আপ্ফেল', banglaMeaning: 'আপেল' },
    { german: 'Banane', banglaPronunciation: 'বানানে', banglaMeaning: 'কলা' },
    { german: 'Traube', banglaPronunciation: 'ট্রাউবে', banglaMeaning: 'আঙুর' },
    { german: 'Kartoffel', banglaPronunciation: 'কার্টোফেল', banglaMeaning: 'আলু' },
    { german: 'Tomate', banglaPronunciation: 'টোমাতে', banglaMeaning: 'টমেটো' }
  ],

  // Group 23: দেশ ও ভাষা (Countries & Languages)
  [
    { german: 'Deutschland', banglaPronunciation: 'ডইচলান্ড', banglaMeaning: 'জার্মানি' },
    { german: 'Bangladesch', banglaPronunciation: 'বাংলাদেশ', banglaMeaning: 'বাংলাদেশ' },
    { german: 'Frankreich', banglaPronunciation: 'ফ্রাংক্রাইহ্‌', banglaMeaning: 'ফ্রান্স' },
    { german: 'Englisch', banglaPronunciation: 'ইংলিশ', banglaMeaning: 'ইংরেজি ভাষা' },
    { german: 'Deutsch', banglaPronunciation: 'ডইচ', banglaMeaning: 'জার্মান ভাষা' }
  ],

  // Group 24: গৃহস্থালি কাজ (Household Tasks)
  [
    { german: 'putzen', banglaPronunciation: 'পুট্‌সেন', banglaMeaning: 'পরিষ্কার করা' },
    { german: 'kochen', banglaPronunciation: 'কোখেন', banglaMeaning: 'রান্না করা' },
    { german: 'waschen', banglaPronunciation: 'ভাশেন', banglaMeaning: 'ধোয়া' },
    { german: 'bügeln', banglaPronunciation: 'বুগেল্ন', banglaMeaning: 'ইস্ত্রি করা' },
    { german: 'aufräumen', banglaPronunciation: 'আউফরয়্‌মেন', banglaMeaning: 'গুছিয়ে রাখা' }
  ],

  // Group 25: স্বাস্থ্য ও চিকিৎসা (Health & Medicine)
  [
    { german: 'Arzt', banglaPronunciation: 'আর্স্ট', banglaMeaning: 'ডাক্তার (পুরুষ)' },
    { german: 'Ärztin', banglaPronunciation: 'এয়ার্স্টিন', banglaMeaning: 'ডাক্তার (নারী)' },
    { german: 'Medizin', banglaPronunciation: 'মেডিসিন', banglaMeaning: 'ঔষধ / চিকিৎসা' },
    { german: 'Krankenhaus', banglaPronunciation: 'ক্রাংকেনহাউস', banglaMeaning: 'হাসপাতাল' },
    { german: 'Fieber', banglaPronunciation: 'ফিবার', banglaMeaning: 'জ্বর' }
  ],
    // Group 26: চাকরি ও পেশা (Jobs & Professions)
  [
    { german: 'Lehrer', banglaPronunciation: 'লেহরার', banglaMeaning: 'শিক্ষক (পুরুষ)' },
    { german: 'Lehrerin', banglaPronunciation: 'লেহরারিন', banglaMeaning: 'শিক্ষিকা (নারী)' },
    { german: 'Ingenieur', banglaPronunciation: 'ইঞ্জেনিউর', banglaMeaning: 'প্রকৌশলী' },
    { german: 'Verkäufer', banglaPronunciation: 'ফেরকয়ফার', banglaMeaning: 'বিক্রেতা' },
    { german: 'Polizist', banglaPronunciation: 'পোলিৎসিস্ট', banglaMeaning: 'পুলিশ (পুরুষ)' }
  ],

  // Group 28: ঘরের কক্ষ ও জিনিস (Rooms & Furniture)
  [
    { german: 'Zimmer', banglaPronunciation: 'ৎসিমার', banglaMeaning: 'ঘর / কক্ষ' },
    { german: 'Küche', banglaPronunciation: 'কুইখে', banglaMeaning: 'রান্নাঘর' },
    { german: 'Bett', banglaPronunciation: 'বেট', banglaMeaning: 'বিছানা' },
    { german: 'Tisch', banglaPronunciation: 'টিশ', banglaMeaning: 'টেবিল' },
    { german: 'Stuhl', banglaPronunciation: 'শটুল', banglaMeaning: 'চেয়ার' }
  ],

  // Group 29: দৈনন্দিন রুটিন (Daily Routine)
  [
    { german: 'aufstehen', banglaPronunciation: 'আউফশ্টেহেন', banglaMeaning: 'জেগে ওঠা' },
    { german: 'duschen', banglaPronunciation: 'দুশেন', banglaMeaning: 'গোসল করা' },
    { german: 'frühstücken', banglaPronunciation: 'ফ্রু-স্ট্যুকেন', banglaMeaning: 'নাশতা করা' },
    { german: 'arbeiten', banglaPronunciation: 'আরবাইতেন', banglaMeaning: 'কাজ করা' },
    { german: 'schlafen gehen', banglaPronunciation: 'শ্লাফেন গেহেন', banglaMeaning: 'ঘুমাতে যাওয়া' }
  ],

  // Group 30: চলমান ক্রিয়াগুলোর বাক্য গঠন (Common Verbs in Use)
  [
    { german: 'Ich gehe zur Schule', banglaPronunciation: 'ইখ গেহে জুর শুলে', banglaMeaning: 'আমি স্কুলে যাই' },
    { german: 'Du liest ein Buch', banglaPronunciation: 'ডু লিস্ট আইন বুক', banglaMeaning: 'তুমি একটি বই পড়ো' },
    { german: 'Er arbeitet viel', banglaPronunciation: 'এয়ার আরবাইটেট ফিল', banglaMeaning: 'সে অনেক কাজ করে' },
    { german: 'Wir essen zusammen', banglaPronunciation: 'ভিয়ার এসেন জুজামেন', banglaMeaning: 'আমরা একসাথে খাই' },
    { german: 'Sie schläft früh', banglaPronunciation: 'জ়ি শ্ল্যাফট ফ্রু', banglaMeaning: 'সে (মেয়ে) তাড়াতাড়ি ঘুমায়' }
  ]
];


