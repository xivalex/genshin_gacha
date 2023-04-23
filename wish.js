// ********************************************************************************
// MIT License

// Copyright (c) 2022 xivalex

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// ********************************************************************************

// ********************************************************************************
// Special Thanks to the following:
//    - [instafluff] for providing the ComfyJS package
//    - 7TV for the emotes (check README.md for the list of emotes used)
// ********************************************************************************

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, ref, child, get, set, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// ***************
// DEFAULT VALUES
// ***************
let __CHANNEL_NAME__ = "";
let __CHANNEL_UID__ = "";
let errFlg = false;

let sr_percentage = 1 // % on winning a 5★
let c_percentage = 90 // % on winning a 3★
let cost = 160
let five_star_prize = 2000;
let four_star_prize = 300;
let three_star_prize = 0;
let pity = 30;
let dropsRewards = 1600;
let dropsInterval = 900000; // 15 minutes
let playbackSpeed = 1.0;

// ********************
// SINGLE-WISH ELEMENTS
// ********************
let video;
let videoTemp;

// ********************
// MULTI-WISH ELEMENTS
// ********************
let wishongoing = false;
let startVid;
let multiVid1;
let multiVid2;
let multiVid3;
let multiVid4;
let multiVid5;
let multiVid6;
let multiVid7;
let multiVid8;
let multiVid9;
let multiVid10;
let startVidTemp;
let multiVid1Temp;
let multiVid2Temp;
let multiVid3Temp;
let multiVid4Temp;
let multiVid5Temp;
let multiVid6Temp;
let multiVid7Temp;
let multiVid8Temp;
let multiVid9Temp;
let multiVid10Temp;
let startVidplay = false;
let multiVid1play = false;
let multiVid2play = false;
let multiVid3play = false;
let multiVid4play = false;
let multiVid5play = false;
let multiVid6play = false;
let multiVid7play = false;
let multiVid8play = false;
let multiVid9play = false;
let multiVid10play = false;
let multiPoints = 0;
let multiSummary = [];

// ***********
// GLOBAL DEFS
// ***********
let SRPool = [];  // 5★
let RPool = [];   // 4★
let CPool = [];   // 3★
let allowed = true;
let displayName;
let randomVid = {};
let queue = [];
let drops = false;
let dropsQueue = [];
let dbRef = {};
let wishcount = 0;
let wishPool = [];
let withSR = false;
let videoPath;
let delay = 1000;
let lastCommand = 0;
let dropsOnTime = 0;
let currentCount = 1;
let maxRetryCount = 3;
let version = 1.64;

// ************
// INTERVAL IDS
// ************
let idDropsDuration;


SRPool.push(
  {
    path: `/5star_albedo_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Albedo",
    altname: ["albedo"],
    dbname: 'Albedo'
  },
  {
    path: `/5star_eula_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Eula",
    altname: ["eula"],
    dbname: 'Eula'
  },
  {
    path: `/5star_keqing_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Keqing",
    altname: ["keqing"],
    dbname: 'Keqing'
  },
  {
    path: `/5star_kokomi_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Sangonomiya Kokomi",
    altname: ["sangonomiya kokomi", "kokomi", "tilapia", "salmon", "fish"],
    dbname: 'Sangonomiya Kokomi'
  },
  {
    path: `/5star_yae_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Yae Miko",
    altname: ["yae miko", "yae", "miko"],
    dbname: 'Yae Miko'
  },
  {
    path: `/5star_ayato_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Kamisato Ayato",
    altname: ["kamisato ayato", "ayato"],
    dbname: 'Kamisato Ayato'
  },
  {
    path: `/5star_ayaka_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Kamisato Ayaka",
    altname: ["kamisato ayaka", "ayaka"],
    dbname: 'Kamisato Ayaka'
  },
  {
    path: `/5star_diluc_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Diluc",
    altname: ["diluc", "bwiset"],
    dbname: 'Diluc'
  },
  {
    path: `/5star_ganyu_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Ganyu",
    altname: ["ganyu", "waifu ni marvs"],
    dbname: 'Ganyu'
  },
  {
    path: `/5star_hutao_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Hu Tao",
    altname: ["hu tao", "hutao"],
    dbname: 'Hu Tao'
  },
  {
    path: `/5star_itto_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Arataki Itto",
    altname: ["arataki itto", "itto"],
    dbname: 'Arataki Itto'
  },
  {
    path: `/5star_jade_cutter_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Primordial Jade Cutter",
    altname: ["primordial jade cutter", "jade cutter", "pjc"],
    dbname: 'Primordial Jade Cutter'
  },
  {
    path: `/5star_jean_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Jean",
    altname: ["jean"],
    dbname: 'Jean'
  },
  {
    path: `/5star_kazuha_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Kaedehara Kazuha",
    altname: ["kaedehara kazuha", "kazuha"],
    dbname: 'Kaedehara Kazuha'
  },
  {
    path: `/5star_klee_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Klee",
    altname: ["klee"],
    dbname: 'Klee'
  },
  {
    path: `/5star_mona_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Mona",
    altname: ["mona"],
    dbname: 'Mona'
  },
  {
    path: `/5star_qiqi_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Qiqi",
    altname: ["qiqi"],
    dbname: 'Qiqi'
  },
  {
    path: `/5star_raiden_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Raiden Shogun",
    altname: ["raiden shogun", "raiden", "ei"],
    dbname: 'Raiden Shogun'
  },
  {
    path: `/5star_shenhe_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Shenhe",
    altname: ["shenhe"],
    dbname: 'Shenhe'
  },
  {
    path: `/5star_skyward_pride_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Skyward Pride",
    altname: ["skyward pride"],
    dbname: 'Skyward Pride'
  },
  {
    path: `/5star_tartaglia_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Tartaglia",
    altname: ["tartaglia", "childe"],
    dbname: 'Tartaglia'
  },
  {
    path: `/5star_tighnari_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Tighnari",
    altname: ["tighnari"],
    dbname: 'Tighnari'
  },
  {
    path: `/5star_venti_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Venti",
    altname: ["venti"],
    dbname: 'Venti'
  },
  {
    path: `/5star_xiao_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Xiao",
    altname: ["xiao"],
    dbname: 'Xiao'
  },
  {
    path: `/5star_yelan_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Yelan",
    altname: ["yelan"],
    dbname: 'Yelan'
  },
  {
    path: `/5star_yoimiya_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Yoimiya",
    altname: ["yoimiya"],
    dbname: 'Yoimiya'
  },
  {
    path: `/5star_zhongli_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Zhongli",
    altname: ["zhongli"],
    dbname: 'Zhongli'
  },
  {
    path: `/5star_cyno_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Cyno",
    altname: ["cyno"],
    dbname: 'Cyno'
  },
  {
    path: `/5star_kok_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Key of Khaj-Nisut",
    altname: ["key of khaj-nisut", "key of khaj nisut", "kok", "key"],
    dbname: 'Key of Khaj-Nisut'
  },
  {
    path: `/5star_nilou_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Nilou",
    altname: ["nilou"],
    dbname: 'Nilou'
  },
  {
    path: `/5star_skyward_blade_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Skyward Blade",
    altname: ["skyward blade"],
    dbname: 'Skyward Blade'
  },
  {
    path: `/5star_alhaitham_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Alhaitham",
    altname: ["alhaitham"],
    dbname: 'Alhaitham'
  },
  {
    path: `/5star_nahida_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Nahida",
    altname: ["nahida"],
    dbname: 'Nahida'
  },
  {
    path: `/5star_wanderer_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Wanderer",
    altname: ["wanderer"],
    dbname: 'Wanderer'
  },
  {
    path: `/5star_skyward_spine_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Skyward Spine",
    altname: ["skyward spine"],
    dbname: 'Skyward Spine'
  },
  {
    path: `/5star_tulaytullah_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Tulaytullah's Remembrance",
    altname: ["tulaytullah's remembrance", "tulaytullah", "wanderer bell"],
    dbname: "Tulaytullah's Remembrance"
  },
  {
    path: `/5star_mistsplitter_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Mistsplitter Reforged",
    altname: ["mistsplitter", "mist", "mist reforged", "mistsplitter reforged"],
    dbname: "Mistsplitter Reforged"
  },
  {
    path: `/5star_calamity_queller_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Calamity Queller",
    altname: ["calamity", "queller", "calamity queller"],
    dbname: "Calamity Queller"
  },
)

RPool.push(
  {
    path: `/4star_bennett_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Bennett",
    altname: ["bennett"],
    dbname: 'Bennett'
  },
  {
    path: `/4star_dbane_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Dragon's Bane",
    altname: ["dragon's bane", "dbane", "dragons bane"],
    dbname: "Dragon's Bane"
  },
  {
    path: `/4star_diona_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Diona",
    altname: ["diona"],
    dbname: 'Diona'
  },
  {
    path: `/4star_fav_warbow_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Favonius Warbow",
    altname: ["favonius warbow", "favbow", "favonius bow"],
    dbname: 'Favonius Warbow'
  },
  {
    path: `/4star_flute_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ The Flute",
    altname: ["the flute", "flute"],
    dbname: 'The Flute'
  },
  {
    path: `/4star_lions_roar_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Lion's Roar",
    altname: ["lion's roar", "lions roar"],
    dbname: "Lion's Roar"
  },
  {
    path: `/4star_ning_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Ningguang",
    altname: ["ningguang", "ning"],
    dbname: 'Ningguang'
  },
  {
    path: `/4star_noelle_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Noelle",
    altname: ["noelle"],
    dbname: 'Noelle'
  },
  {
    path: `/4star_rainslasher_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Rainslasher",
    altname: ["rainslasher", "painslasher"],
    dbname: 'Rainslasher'
  },
  {
    path: `/4star_rosaria_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Rosaria",
    altname: ["rosaria"],
    dbname: 'Rosaria'
  },
  {
    path: `/4star_yunjin_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Yun Jin",
    altname: ["yun jin", "yunjin"],
    dbname: 'Yun Jin'
  },
  {
    path: `/4star_rust_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Rust",
    altname: ["rust"],
    dbname: 'Rust'
  },
  {
    path: `/4star_sac_greatsword_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sacrificial Greatsword",
    altname: ["sacrificial greatsword", "sac greatsword"],
    dbname: 'Sacrificial Greatsword'
  },
  {
    path: `/4star_sacrificial_sword_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sacrificial Sword",
    altname: ["sacrificial sword", "sacsword", "sac sword"],
    dbname: 'Sacrificial Sword'
  },
  {
    path: `/4star_stringless_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ The Stringless",
    altname: ["the stringless", "stringless"],
    dbname: 'The Stringless'
  },
  {
    path: `/4star_the_bell_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ The Bell",
    altname: ["the bell"],
    dbname: 'The Bell'
  },
  {
    path: `/4star_thoma_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Thoma",
    altname: ["thoma"],
    dbname: 'Thoma'
  },
  {
    path: `/4star_xingqiu_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xingqiu",
    altname: ["xingqiu", "xq"],
    dbname: 'Xingqiu'
  },
  {
    path: `/4star_xinyan_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xinyan",
    altname: ["xinyan"],
    dbname: 'Xinyan'
  },
  {
    path: `/4star_amber_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Amber",
    altname: ["amber"],
    dbname: 'Amber'
  },
  {
    path: `/4star_barbara_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Barbara",
    altname: ["barbara"],
    dbname: 'Barbara'
  },
  {
    path: `/4star_beidou_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Beidou",
    altname: ["beidou"],
    dbname: 'Beidou'
  },
  {
    path: `/4star_chongyun_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Chongyun",
    altname: ["chongyun"],
    dbname: 'Chongyun'
  },
  {
    path: `/4star_collei_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Collei",
    altname: ["collei"],
    dbname: 'Collei'
  },
  {
    path: `/4star_dori_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Dori",
    altname: ["dori"],
    dbname: 'Dori'
  },
  {
    path: `/4star_fischl_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Fischl",
    altname: ["fishchl", "fish"],
    dbname: 'Fischl'
  },
  {
    path: `/4star_gorou_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Gorou",
    altname: ["gorou"],
    dbname: 'Gorou'
  },
  {
    path: `/4star_kaeya_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Kaeya",
    altname: ["kaeya"],
    dbname: 'Kaeya'
  },
  {
    path: `/4star_kuki_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Kuki Shinobu",
    altname: ["kuki shinobu", "kuki", "shinobu"],
    dbname: 'Kuki Shinobu'
  },
  {
    path: `/4star_yanfei_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Yanfei",
    altname: ["yanfei", "yan fei"],
    dbname: 'Yanfei'
  },
  {
    path: `/4star_razor_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Razor",
    altname: ["razor"],
    dbname: 'Razor'
  },
  {
    path: `/4star_sara_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Kujou Sara",
    altname: ["kujou sara", "sara", "kujou"],
    dbname: 'Kujou Sara'
  },
  {
    path: `/4star_sayu_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sayu",
    altname: ["sayu"],
    dbname: 'Sayu'
  },
  {
    path: `/4star_sucrose_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sucrose",
    altname: ["sucrose"],
    dbname: 'Sucrose'
  },
  {
    path: `/4star_xiangling_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xiangling",
    altname: ["xiangling"],
    dbname: 'Xiangling'
  },
  {
    path: `/4star_candace_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Candace",
    altname: ["candace"],
    dbname: 'Candace'
  },
  {
    path: `/4star_eye_of_perception_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Eye of Perception",
    altname: ["eye of perception", "eye", "eop"],
    dbname: 'Eye of Perception'
  },
  {
    path: `/4star_wandering_evenstar_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Wandering Evenstar",
    altname: ["wandering evenstar", "evenstar"],
    dbname: 'Wandering Evenstar'
  },
  {
    path: `/4star_xiphos_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xiphos' Moonlight",
    altname: ["xiphos' moonlight", "xiphos"],
    dbname: "Xiphos' Moonlight"
  },
  {
    path: `/4star_faruzan_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Faruzan",
    altname: ["faruzan", "miku", "hatsune miku", "hatsune"],
    dbname: "Faruzan"
  },
  {
    path: `/4star_heizou_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Shikanoin Heizou",
    altname: ["shikanoin heizou", "heizou"],
    dbname: "Shikanoin Heizou"
  },
  {
    path: `/4star_layla_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Layla",
    altname: ["layla"],
    dbname: "Layla"
  },
  {
    path: `/4star_yaoyao_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Yaoyao",
    altname: ["yaoyao", "yao yao"],
    dbname: "Yaoyao"
  },
  {
    path: `/4star_mika_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Mika",
    altname: ["mika"],
    dbname: "Mika"
  },
  {
    path: `/4star_widsith_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Widsith",
    altname: ["widsith"],
    dbname: "Widsith"
  },
  {
    path: `/4star_favgs_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Favonius Greatsword",
    altname: ["favgs", "fav gs", "fav greatsword", "favonius greatsword"],
    dbname: "Favonius Greatsword"
  },
  {
    path: `/4star_wineandsong_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Wine and Song",
    altname: ["wine and song", "wine", "was"],
    dbname: "Wine and Song"
  },
  {
    path: `/4star_favlance_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Favonius Lance",
    altname: ["favonius lance", "favlance", "fav lance"],
    dbname: "Favonius Lance"
  },
)

CPool.push(
  {
    path: `/3star_black_tassel_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Black Tassel",
    altname: ["black tassel"],
    dbname: 'Black Tassel'
  },
  {
    path: `/3star_bloodstained_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Bloodtainted Greatsword",
    altname: ["bloodtainted greatsword", "bloodstained greatsword", "bloodtainted", "bloodstained"],
    dbname: 'Bloodtainted Greatsword'
  },
  {
    path: `/3star_cool_steel_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Cool Steel",
    altname: ["cool steel"],
    dbname: 'Cool Steel'
  },
  {
    path: `/3star_debate_club_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Debate Club",
    altname: ["debate club"],
    dbname: 'Debate Club'
  },
  {
    path: `/3star_emerald_orb_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Emerald Orb",
    altname: ["emerald orb"],
    dbname: 'Emerald Orb'
  },
  {
    path: `/3star_ferrous_shadow_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Ferrous Shadow",
    altname: ["ferrou shadow", "ferous shadow"],
    dbname: 'Ferrous Shadow'
  },
  {
    path: `/3star_hod_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Harbinger of Dawn",
    altname: ["harbinger of dawn", "harbringer of dawn", "hod"],
    dbname: 'Harbinger of Dawn'
  },
  {
    path: `/3star_magic_guide_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Magic Guide",
    altname: ["magic guide"],
    dbname: 'Magic Guide'
  },
  {
    path: `/3star_raven_bow_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Raven Bow",
    altname: ["raven bow"],
    dbname: 'Raven Bow'
  },
  {
    path: `/3star_sharpshooter_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Sharpshooter's Oath",
    altname: ["sharpshooter's oath", "sharpshooter oath"],
    dbname: "Sharpshooter's Oath"
  },
  {
    path: `/3star_skyrider_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Skyrider Sword",
    altname: ["skyrider sword"],
    dbname: 'Skyrider Sword'
  },
  {
    path: `/3star_slingshot_temp_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Slingshot",
    altname: ["slingshot"],
    dbname: 'Slingshot'
  },
  {
    path: `/3star_ttds_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Thrilling Tales of Dragon Slayers",
    altname: ["thrilling tales of dragon slayers", "ttds"],
    dbname: 'Thrilling Tales of Dragon Slayers'
  },
)

const firebaseConfig = {
  apiKey: "AIzaSyDm8SiQi5dROrkw32MZnHwY68X1kEVo-H4",
  authDomain: "genshin-gacha.firebaseapp.com",
  databaseURL: "https://genshin-gacha-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "genshin-gacha",
  storageBucket: "genshin-gacha.appspot.com",
  messagingSenderId: "39520428909",
  appId: "1:39520428909:web:88fcf4648df172d2e67064",
  measurementId: "G-1C8F27P35C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getDb() {
  const reference = ref(getDatabase());
  get(child(reference, __CHANNEL_UID__ )).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      dbRef = snapshot.val();
    } else {
      // If this is the first time the streamer uses the simulator
      console.log("No data available");
      const db = getDatabase();
      set(ref(db, __CHANNEL_UID__ + '/' + __CHANNEL_NAME__), {
        pity: 0,
        primogems: 0
      });
      get(child(reference, __CHANNEL_UID__ )).then((snapshot) => {
        dbRef = snapshot.val();
      });
    }
  }).catch((error) => {
    errFlg = true;
    console.error(error);
  });
}

function retryVideo(vidRef, vidPath) {
  vidRef.pause();
  vidRef.setAttribute("src", vidPath);
  vidRef.load();
}

// ********************
// SINGLE-WISH EVENT LISTENER
// ********************
function initializeVideoElement() {
  function nextVideo() {
    video.setAttribute("hidden", "hidden");

    // if (randomVid.value != 0) {
    //   addPoints(randomVid.value);
    // }
    let result = `${displayName} wish summary: ${wishcount}x | +${multiPoints} Primogems (${dbRef[displayName].primogems}) | pity: ${dbRef[displayName].pity}`
    if (multiSummary.length != 0) {
      result += ` | ${multiSummary}`
    }
    // console.log(result);
    sendChatMessage(result);
    vidReset();
  }
  let retryCount = 0;
  video = document.getElementById("video");

  video.onloadstart = function () {
    console.log("Single Video is now loaded");
  };

  video.oncanplaythrough = function () {
    console.log("Single Video can now play");
    retryCount = 0;
    video.play();
  }

  video.onplaying = function () {
    console.log("Single Video is now playing");
  }

  video.onerror = function () {
    console.log("Single Video error"); console.log("video retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; video.pause(); nextVideo(); }
    else { retryVideo(video, videoTemp); retryCount++ }
  }

  video.onstalled = function () {
    console.log("Single Video stalled");
    if (retryCount > maxRetryCount) { retryCount = 0; video.pause(); nextVideo(); }
    else { retryVideo(video, videoTemp); retryCount++ }
  }

  video.onended = function () {
    console.log("Single Video Ended");
    nextVideo();
  }

}

// ********************
// MULTI-WISH EVENT LISTENER
// ********************
function initializeMultiVideoStartElement() {
  function nextVideo() {
    startVid.setAttribute("hidden", "hidden");
    // Start first wish
    multiVid1.removeAttribute("hidden");
    // currentCount += 1;
    multiVid1.play();
  }
  let retryCount = 0;
  startVid = document.getElementById("startVid");

  startVid.onloadstart = function () {
    console.log("Start Video is now loaded");
  };

  startVid.oncanplaythrough = function () {
    console.log("Start Video can now play");
    retryCount = 0;
    startVidplay = true;
  }

  startVid.onplaying = function () {
    console.log("Start Video is now playing");
  }

  startVid.onerror = function () {
    console.log("Start Video error"); console.log("startVid retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; startVid.pause(); stopWish(); }
    else { retryVideo(startVid, startVidTemp); retryCount++ }
  }

  startVid.onstalled = function () {
    console.log("Start Video stalled"); console.log("startVid retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; startVid.pause(); stopWish(); }
    else { retryVideo(startVid, startVidTemp); retryCount++ }
    retryCount++;
  }

  startVid.onended = function () {
    console.log("Start Video Ended");
    nextVideo();
  }
}

function initializeMultiVideo1Element() {
  function nextVideo() {
    multiVid1.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid2.removeAttribute("hidden");
      multiVid2.play();
    } else {
      stopWish();
    }
  }
  let retryCount = 0;
  multiVid1 = document.getElementById("multiVid1");

  multiVid1.onloadstart = function () {
    console.log("Video 1 is now loaded");
  };

  multiVid1.oncanplaythrough = function () {
    console.log("Video 1 can now play");
    retryCount = 0;
    multiVid1play = true;
  }

  multiVid1.onplaying = function () {
    console.log("Video 1 is now playing");
    console.log(multiVid1.src);
  }

  multiVid1.onerror = function () {
    console.log("Video 1 error"); console.log("multiVid1 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid1.pause(); stopWish(); }
    else { retryVideo(multiVid1, multiVid1Temp); retryCount++ }
  }

  multiVid1.onstalled = function () {
    console.log("Video 1 stalled"); console.log("multiVid1 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid1.pause(); stopWish(); }
    else { retryVideo(multiVid1, multiVid1Temp); retryCount++ }
  }

  multiVid1.onended = function () {
    console.log("Video 1 Ended");
    nextVideo();
  }
}

function initializeMultiVideo2Element() {
  function nextVideo() {
    multiVid2.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid3.removeAttribute("hidden");
      multiVid3.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid2 = document.getElementById("multiVid2");

  multiVid2.onloadstart = function () {
    console.log("Video 2 is now loaded");
  };

  multiVid2.oncanplaythrough = function () {
    console.log("Video 2 can now play");
    retryCount = 0;
    multiVid2play = true;
  }

  multiVid2.onplaying = function () {
    console.log("Video 2 is now playing");
    console.log(multiVid2.src);
  }

  multiVid2.onerror = function () {
    console.log("Video 2 error"); console.log("multiVid2 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid2.pause(); stopWish(); }
    else { retryVideo(multiVid2, multiVid2Temp); retryCount++ }
  }

  multiVid2.onstalled = function () {
    console.log("Video 2 stalled"); console.log("multiVid2 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid2.pause(); stopWish(); }
    else { retryVideo(multiVid2, multiVid2Temp); retryCount++ }
  }

  multiVid2.onended = function () {
    console.log("Video 2 Ended");
    nextVideo();
  }
}

function initializeMultiVideo3Element() {
  function nextVideo() {
    multiVid3.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid4.removeAttribute("hidden");
      multiVid4.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid3 = document.getElementById("multiVid3");

  multiVid3.onloadstart = function () {
    console.log("Video 3 is now loaded");
  };

  multiVid3.oncanplaythrough = function () {
    console.log("Video 3 can now play");
    retryCount = 0;
    multiVid3play = true;
  }

  multiVid3.onplaying = function () {
    console.log("Video 3 is now playing");
    console.log(multiVid3.src);
  }

  multiVid3.onerror = function () {
    console.log("Video 3 error"); console.log("multiVid3 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid3.pause(); stopWish(); }
    else { retryVideo(multiVid3, multiVid3Temp); retryCount++ }
  }

  multiVid3.onstalled = function () {
    console.log("Video 3 stalled"); console.log("multiVid3 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid3.pause(); stopWish(); }
    else { retryVideo(multiVid3, multiVid3Temp); retryCount++ }
  }

  multiVid3.onended = function () {
    console.log("Video 3 Ended");
    nextVideo();
  }
}

function initializeMultiVideo4Element() {
  function nextVideo() {
    multiVid4.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid5.removeAttribute("hidden");
      multiVid5.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid4 = document.getElementById("multiVid4");

  multiVid4.onloadstart = function () {
    console.log("Video 4 is now loaded");
  };

  multiVid4.oncanplaythrough = function () {
    console.log("Video 4 can now play");
    retryCount = 0;
    multiVid4play = true;
  }

  multiVid4.onplaying = function () {
    console.log("Video 4 is now playing");
    console.log(multiVid4.src);
  }

  multiVid4.onerror = function () {
    console.log("Video 4 error"); console.log("multiVid4 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid4.pause(); stopWish(); }
    else { retryVideo(multiVid4, multiVid4Temp); retryCount++ }
  }

  multiVid4.onstalled = function () {
    console.log("Video 4 stalled"); console.log("multiVid4 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid4.pause(); stopWish(); }
    else { retryVideo(multiVid4, multiVid4Temp); retryCount++ }
  }

  multiVid4.onended = function () {
    console.log("Video 4 Ended");
    nextVideo();
  }
}

function initializeMultiVideo5Element() {
  function nextVideo() {
    multiVid5.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid6.removeAttribute("hidden");
      multiVid6.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid5 = document.getElementById("multiVid5");

  multiVid5.onloadstart = function () {
    console.log("Video 5 is now loaded");
  };

  multiVid5.oncanplaythrough = function () {
    console.log("Video 5 can now play");
    retryCount = 0;
    multiVid5play = true;
  }

  multiVid5.onplaying = function () {
    console.log("Video 5 is now playing");
    console.log(multiVid5.src);
  }

  multiVid5.onerror = function () {
    console.log("Video 5 error"); console.log("multiVid5 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid5.pause(); stopWish(); }
    else { retryVideo(multiVid5, multiVid5Temp); retryCount++ }
  }

  multiVid5.onstalled = function () {
    console.log("Video 5 stalled"); console.log("multiVid5 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid5.pause(); stopWish(); }
    else { retryVideo(multiVid5, multiVid5Temp); retryCount++ }
  }

  multiVid5.onended = function () {
    console.log("Video 5 Ended");
    nextVideo();
  }
}

function initializeMultiVideo6Element() {
  function nextVideo() {
    multiVid6.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid7.removeAttribute("hidden");
      multiVid7.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid6 = document.getElementById("multiVid6");

  multiVid6.onloadstart = function () {
    console.log("Video 6 is now loaded");
  };

  multiVid6.oncanplaythrough = function () {
    console.log("Video 6 can now play");
    retryCount = 0;
    multiVid6play = true;
  }

  multiVid6.onplaying = function () {
    console.log("Video 6 is now playing");
    console.log(multiVid6.src);
  }

  multiVid6.onerror = function () {
    console.log("Video 6 error"); console.log("multiVid6 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid6.pause(); stopWish(); }
    else { retryVideo(multiVid6, multiVid6Temp); retryCount++ }
  }

  multiVid6.onstalled = function () {
    console.log("Video 6 stalled"); console.log("multiVid6 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid6.pause(); stopWish(); }
    else { retryVideo(multiVid6, multiVid6Temp); retryCount++ }
  }

  multiVid6.onended = function () {
    console.log("Video 6 Ended");
    nextVideo();
  }
}

function initializeMultiVideo7Element() {
  function nextVideo() {
    multiVid7.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid8.removeAttribute("hidden");
      multiVid8.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid7 = document.getElementById("multiVid7");

  multiVid7.onloadstart = function () {
    console.log("Video 7 is now loaded");
  };

  multiVid7.oncanplaythrough = function () {
    console.log("Video 7 can now play");
    retryCount = 0;
    multiVid7play = true;
  }

  multiVid7.onplaying = function () {
    console.log("Video 7 is now playing");
    console.log(multiVid7.src);
  }

  multiVid7.onerror = function () {
    console.log("Video 7 error"); console.log("multiVid7 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid7.pause(); stopWish(); }
    else { retryVideo(multiVid7, multiVid7Temp); retryCount++ }
  }

  multiVid7.onstalled = function () {
    console.log("Video 7 stalled"); console.log("multiVid7 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid7.pause(); stopWish(); }
    else { retryVideo(multiVid7, multiVid7Temp); retryCount++ }
  }

  multiVid7.onended = function () {
    console.log("Video 7 Ended");
    nextVideo();
  }
}

function initializeMultiVideo8Element() {
  function nextVideo() {
    multiVid8.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid9.removeAttribute("hidden");
      multiVid9.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid8 = document.getElementById("multiVid8");

  multiVid8.onloadstart = function () {
    console.log("Video 8 is now loaded");
  };

  multiVid8.oncanplaythrough = function () {
    console.log("Video 8 can now play");
    retryCount = 0;
    multiVid8play = true;
  }

  multiVid8.onplaying = function () {
    console.log("Video 8 is now playing");
    console.log(multiVid8.src);
  }

  multiVid8.onerror = function () {
    console.log("Video 8 error"); console.log("multiVid8 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid8.pause(); stopWish(); }
    else { retryVideo(multiVid8, multiVid8Temp); retryCount++ }
  }

  multiVid8.onstalled = function () {
    console.log("Video 8 stalled"); console.log("multiVid8 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid8.pause(); stopWish(); }
    else { retryVideo(multiVid8, multiVid8Temp); retryCount++ }
  }

  multiVid8.onended = function () {
    console.log("Video 8 Ended");
    nextVideo();
  }
}

function initializeMultiVideo9Element() {
  function nextVideo() {
    multiVid9.setAttribute("hidden", "hidden");
    // Play next vid if available
    if (currentCount < wishcount) {
      currentCount += 1;
      multiVid10.removeAttribute("hidden");
      multiVid10.play();
    } else {
      stopWish();
    }

  }
  let retryCount = 0;
  multiVid9 = document.getElementById("multiVid9");

  multiVid9.onloadstart = function () {
    console.log("Video 9 is now loaded");
  };

  multiVid9.oncanplaythrough = function () {
    console.log("Video 9 can now play");
    retryCount = 0;
    multiVid9play = true;
  }

  multiVid9.onplaying = function () {
    console.log("Video 9 is now playing");
    console.log(multiVid9.src);
  }

  multiVid9.onerror = function () {
    console.log("Video 9 error"); console.log("multiVid9 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid9.pause(); stopWish(); }
    else { retryVideo(multiVid9, multiVid9Temp); retryCount++ }
  }

  multiVid9.onstalled = function () {
    console.log("Video 9 stalled"); console.log("multiVid9 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid9.pause(); stopWish(); }
    else { retryVideo(multiVid9, multiVid9Temp); retryCount++ }
  }

  multiVid9.onended = function () {
    console.log("Video 9 Ended");
    nextVideo();
  }
}

function initializeMultiVideo10Element() {

  function retryVideo() {
    multiVid10.pause();
    multiVid10.setAttribute("src", multiVid10Temp);
    multiVid10.load();
  }
  let retryCount = 0;
  multiVid10 = document.getElementById("multiVid10");

  multiVid10.onloadstart = function () {
    console.log("Video 10 is now loaded");
  };

  multiVid10.oncanplaythrough = function () {
    console.log("Video 10 can now play");
    retryCount = 0;
    multiVid10play = true;
  }

  multiVid10.onplaying = function () {
    console.log("Video 10 is now playing");
    console.log(multiVid10.src);
  }

  multiVid10.onerror = function () {
    console.log("Video 10 error"); console.log("multiVid10 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid10.pause(); stopWish(); }
    else { retryVideo(multiVid10, multiVid10Temp); retryCount++ }
  }

  multiVid10.onstalled = function () {
    console.log("Video 10 stalled"); console.log("multiVid10 retryCount: " + retryCount);
    if (retryCount > maxRetryCount) { retryCount = 0; multiVid10.pause(); stopWish(); }
    else { retryVideo(multiVid10, multiVid10Temp); retryCount++ }
  }

  multiVid10.onended = function () {
    console.log("Video 10 Ended");
    multiVid10.setAttribute("hidden", "hidden");
    stopWish();
  }
}

function stopWish() {
  console.log('Ending wish session...')

  // execute only when a wish is ongoing
  if (!allowed) {
    // addPoints(multiPoints);
    let result = `${displayName} wish summary: ${wishcount}x | +${multiPoints} Primogems (${dbRef[displayName].primogems}) | pity: ${dbRef[displayName].pity}`
    if (multiSummary.length != 0) {
      result += ` | ${multiSummary}`
    }
    console.log(result)
    sendChatMessage(result);
    vidReset();
  }

}

function vidReset() {
  wishcount = 0;
  currentCount = 1;
  multiPoints = 0;
  multiSummary = [];
  wishPool = [];
  videoPath = '';
  allowed = true;
  wishongoing = false;
  startVidplay = false;
  multiVid1play = false; multiVid2play = false; multiVid3play = false; multiVid4play = false; multiVid5play = false;
  multiVid6play = false; multiVid7play = false; multiVid8play = false; multiVid9play = false; multiVid10play = false;
  startVidTemp = '';
  multiVid1Temp = ''; multiVid2Temp = ''; multiVid3Temp = ''; multiVid4Temp = ''; multiVid5Temp = '';
  multiVid6Temp = ''; multiVid7Temp = ''; multiVid8Temp = ''; multiVid9Temp = ''; multiVid10Temp = '';
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function randomItemFromArray(arr) {
  let shuffle = shuffleArray(arr);
  return shuffle[Math.floor(Math.random() * arr.length)];
}

function sendChatMessage(msg) {
  // Trim the message if its too long for twitch chat
  if (msg.length > 450) {
    msg = msg.substr(0, 450) + '...'
  }
  ComfyJS.Say(msg);
}

function addPoints(amount) {
  dbRef[displayName].primogems += amount;
}

setInterval(async function() {

  if (errFlg) return;
  // Saves current wish info every 1 minute
  const db = getDatabase();

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates[__CHANNEL_UID__] = dbRef;

  console.log("Saving in database. . .");
  return update(ref(db), updates);

}, 60000);

async function dropsStart() {
  if (errFlg) return;
  console.log("Starting Primogem Drops. . .")

  // Turns on primogems drops
  drops = true;
  dropsOnTime = new Date().getTime() + 60000;
  sendChatMessage(`/me HutaoVeryPogFast ${dropsRewards} Primogems drop is up! Type !wclaim to join HutaoVeryPogFast`);

  // Start interval on drops duration
  idDropsDuration = setInterval(dropsDuration, 20000);
}

async function dropsDuration() {
  let now = new Date().getTime();
  let distance = dropsOnTime - now;
  let seconds = Math.floor(distance / 1000);

  console.log('[dropsDuration] dropsOnTime ' + dropsOnTime);
  console.log('[dropsDuration] now ' + now);
  console.log('[dropsDuration] distance in seconds ' + seconds);

  // if (dropsOffTime > timeCheck) {
  if (seconds > 0) {
    if (seconds <= 40 && seconds > 0) {
      sendChatMessage(`/me Drop for ${dropsRewards} Primogems will end in ${seconds} seconds! HutaoPoke`);
    }
  } else {
    // Turn off drops feature
    drops = false;
    clearInterval(idDropsDuration);

    let output = [];
    dropsQueue.forEach(user => {
      output.push(user);
      dbRef[user].primogems += dropsRewards
    });

    if (output.length == 0) {
      sendChatMessage(`/me No one claimed the drop.. raidenCry`);
    } else {
      sendChatMessage(`/me The following claimed the ${dropsRewards} Primogems drop: ${output} GroupNuma`)
    }
    dropsQueue = [];
  }
}

function startMulti() {
  // Show the element
  startVid.removeAttribute("hidden");
  sendChatMessage(`${displayName}'s ${wishcount}x genshinWish is DIANO`);
  startVid.play();
  wishongoing = true;
  console.log('All Videos are now playable!');
}
var intervalIdPlayAll = setInterval(async function() {
  if (errFlg) return;

  if (!allowed && !wishongoing) {
    console.log('Waiting for all videos to be playable...');
    switch (wishcount) {
      case '1': wishongoing = true; break;
      case '2':
        if (startVidplay && multiVid1play && multiVid2play) startMulti(); break;
      case '3':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play) startMulti(); break;
      case '4':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play) startMulti(); break;
      case '5':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play && multiVid5play) startMulti(); break;
      case '6':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play && multiVid5play && multiVid6play) startMulti(); break;
      case '7':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play && multiVid5play && multiVid6play && multiVid7play) startMulti(); break;
      case '8':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play && multiVid5play && multiVid6play && multiVid7play && multiVid8play) startMulti(); break;
      case '9':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play && multiVid5play && multiVid6play && multiVid7play && multiVid8play && multiVid9play) startMulti(); break;
      case '10':
        if (startVidplay && multiVid1play && multiVid2play && multiVid3play && multiVid4play && multiVid5play && multiVid6play && multiVid7play && multiVid8play && multiVid9play && multiVid10play) startMulti(); break;
    }
  }

}, 1000);

var intervalIdWish = setInterval(async function() {
  if (errFlg) return;

  // Check if there is no ongoing video
  if (allowed) {

    // Retrieves a name from the list
    let queueInfo = queue.shift();
    if (queueInfo) {
      displayName = queueInfo.user;
      wishcount = queueInfo.wishcount;
    } else {
      displayName = undefined;
    }

    // If a name was retrieved, show gacha video
    if (displayName) {

      // If previous user has info in DB and no info on primogems yet
      if (dbRef[displayName].primogems == undefined || isNaN(dbRef[displayName].primogems)) {
        dbRef[displayName].primogems = 0;
      }

      // Prevent any video from playing
      allowed = false;
      let wishcost = wishcount * cost;

      // Check if user has enough points
      if (dbRef[displayName].primogems < wishcost) {
        sendChatMessage(`${displayName} do not have enough Primogems to wish | Primogems: ${dbRef[displayName].primogems} | Required: ${wishcost}`);
        allowed = true;
        wishongoing = false;
        startVidplay = false; multiVid1play = false; multiVid2play = false; multiVid3play = false; multiVid4play = false;
        multiVid5play = false; multiVid6play = false; multiVid7play = false; multiVid8play = false; multiVid9play = false;
        multiVid10play = false;
        startVidTemp = multiVid1Temp = multiVid2Temp = multiVid3Temp = multiVid4Temp = multiVid5Temp =
        multiVid6Temp = multiVid7Temp = multiVid8Temp = multiVid9Temp = multiVid10Temp = '';
        return;
      }

      // Deduct the points
      // addPoints(-wishcost);

      console.log(`${displayName}'s ${wishcount}x genshinWish is DIANO...`);
      // sendChatMessage(`${displayName}'s ${wishcount}x genshinWish is DIANO`);


      if (wishcount == 1) {
        videoPath = "./videos"
      } else {
        videoPath = "./videos_multi"
      }
      multiWish(wishcost);
    }

  }

}, 3000);

function multiWish(wishcost) {
  let chosenPool;

  for (let i = 0; i < wishcount; i++) {
    if (dbRef[displayName].pity === pity) {
      // Default the video pool to SR due to pity
      chosenPool = SRPool;
      withSR = true;
    } else {
      if ((i == wishcount-1) && wishcount == 10) {
        // If 10-pull, guaranteed a 4-star above if there is none
        let hasRare = false;
        wishPool.forEach(val => { if (val.value > 0) hasRare = true;})

        if (!hasRare) {
          // Randomize if SRPool/RPool and retrieve a video from the pool
          chosenPool = (Math.random() < ( sr_percentage / 100)) ? SRPool : RPool;
        } else {
          // Randomize if SRPool/RPool/CPool and retrieve a video from the pool
          chosenPool = (Math.random() < ( sr_percentage / 100)) ? SRPool :
          ((Math.random() < ( c_percentage / 100)) ? CPool : RPool);
        }
      } else {
        // Randomize if SRPool/RPool/CPool and retrieve a video from the pool
        chosenPool = (Math.random() < ( sr_percentage / 100)) ? SRPool :
                    ((Math.random() < ( c_percentage / 100)) ? CPool : RPool);
      }
    }
    // Retrieve a video from the video pool
    randomVid = randomItemFromArray(chosenPool);

    // If user has no record of the char/weap yet, create a new record
    if (undefined == dbRef[displayName][randomVid.dbname]) {
      dbRef[displayName][randomVid.dbname] = {
        constellation: 0
      }
    } else {
      // Increase constellation of the char/weap if it is existing
      dbRef[displayName][randomVid.dbname].constellation += 1;
    }

    // Update the pity of the user based on the result
    switch (randomVid.value) {
      // If SR, reset pity and set flag to true
      case SRPool[0].value:
        dbRef[displayName].pity = 0;
        withSR = true;
        multiSummary.push(randomVid.name);
        break;
      // If R, increase pity and save the value
      case RPool[0].value: multiSummary.push(randomVid.name);
      // If not SR, increase pity by 1
      default: dbRef[displayName].pity += 1;
    }

    // Increment the total amount of points;
    multiPoints += randomVid.value;
    let video = `${videoPath}${randomVid.path}`;
    console.log(video);

    switch(i) {
      case 0: multiVid1.setAttribute("src", video); multiVid1.load(); multiVid1Temp = video; break;
      case 1: multiVid2.setAttribute("src", video); multiVid2.load(); multiVid2Temp = video; break;
      case 2: multiVid3.setAttribute("src", video); multiVid3.load(); multiVid3Temp = video; break;
      case 3: multiVid4.setAttribute("src", video); multiVid4.load(); multiVid4Temp = video; break;
      case 4: multiVid5.setAttribute("src", video); multiVid5.load(); multiVid5Temp = video; break;
      case 5: multiVid6.setAttribute("src", video); multiVid6.load(); multiVid6Temp = video; break;
      case 6: multiVid7.setAttribute("src", video); multiVid7.load(); multiVid7Temp = video; break;
      case 7: multiVid8.setAttribute("src", video); multiVid8.load(); multiVid8Temp = video; break;
      case 8: multiVid9.setAttribute("src", video); multiVid9.load(); multiVid9Temp = video; break;
      case 9: multiVid10.setAttribute("src", video); multiVid10.load(); multiVid10Temp = video; break;
    }
    // Store the vid info
    wishPool.push(randomVid);
  }

  // Adjust the points accordingly
  // Total Wished Amount - Total Wish Cost
  addPoints(-wishcost);
  addPoints(multiPoints);

  if (wishPool.length == 1) {
    // Show the element
    video.removeAttribute("hidden");

    // Set the video as the source of the element and play it
    videoTemp = `${videoPath}${wishPool[0].path}`
    video.setAttribute("src", videoTemp);
    video.load();
    video.volume = 1;

  } else {

    // Set the start of the video
    if (withSR) {
      startVidTemp = `${videoPath}/5star_template_VP8.webm`;
    } else {
      startVidTemp = `${videoPath}/4star_template_VP8.webm`;
    }
    startVid.setAttribute("src", startVidTemp);
    withSR = false;

    startVid.load();
    startVid.volume = 1;
  }
}

// **********************************************
// Check the query parameters passed from the URL
// Set [errFlg] to TRUE if:
//    * no [channel] parameter
//    * no [uid] parameter
//    * no [oauth] parameter
// **********************************************
function checkQueryParameters() {

  // Retrieve the query parameters required for authentication
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if (params.channel) {
    __CHANNEL_NAME__ = params.channel;
  } else {
    errFlg = true;
    return;
  }

  if (params.uid) {
    __CHANNEL_UID__ = params.uid;
  } else {
    errFlg = true;
    return;
  }

  if (params.oauth) {
    ComfyJS.Init( __CHANNEL_NAME__, "oauth:" + params.oauth );
  } else {
    errFlg = true;
    return;
  }

  getDb();

  // Set the percentage of 5★ against 3★ and 4★
  if (params.sr) {
    let sr = Number(params.sr);
    if (isNaN(sr) || !(sr >= 0 && sr <= 100)){
      console.log("value for params.sr is invalid");
    } else {
      sr_percentage = sr;
    }
  }

  // Set the percentage of 3★ against 4★
  if (params.c) {
    let c = Number(params.c);
    if (isNaN(c) || !(c >= 0 && c <= 100)){
      console.log("value for params.c is invalid");
    } else {
      c_percentage = c;
    }
  }

  // Set the prize of 3★
  if (params.three) {
    let three = Number(params.three);
    if (isNaN(three)){
      console.log("value for params.three is invalid");
    } else {
      // Replace the value in the current pool
      CPool.forEach(video => {
        video.value = three;
      });
    }
  }

  // Set the prize of 4★
  if (params.four) {
    let four = Number(params.four);
    if (isNaN(four)){
      console.log("value for params.four is invalid");
    } else {
      // Replace the value in the current pool
      RPool.forEach(video => {
        video.value = four;
      });
    }
  }

  // Set the prize of 5★
  if (params.five) {
    let five = Number(params.five);
    if (isNaN(five)){
      console.log("value for params.five is invalid");
    } else {
      // Replace the value in the current pool
      SRPool.forEach(video => {
        video.value = five;
      });
    }
  }

  // Set the cost of each command
  if (params.cost) {
    let amount = Number(params.cost);
    if (isNaN(amount)){
      console.log("value for params.cost is invalid");
    } else {
      cost = amount;
    }
  }

  // Set the pity
  if (params.pity) {
    let pt = Number(params.pity);
    if (isNaN(pt)){
      console.log("value for params.pity is invalid");
    } else {
      pity = pt;
    }
  }

  // Set the drops reward amount used in the channel
  if (params.drops) {
    let drops = Number(params.drops);
    if (isNaN(drops)){
      console.log("value for params.drops is invalid");
    } else {
      // Update the amount of drops received
      dropsRewards = drops;
    }
  }

  // Set the drops timer
  if (params.dropstime) {
    let time = Number(params.dropstime);
    if (isNaN(time)){
      console.log("value for params.dropstime is invalid");
    } else {
      // Replace the value in the current pool
      if (time >= 120000) {
        // Only allow intervals higher than 2 minutes
        // Else, default to 15 minutes interval
        dropsInterval = time;
      }
    }
  }

  if (params.speed) {
    playbackSpeed = Number(params.speed);
    if (isNaN(playbackSpeed)){
      console.log("value for params.speed is invalid");
    } else {
      video.defaultPlaybackRate = playbackSpeed;
      startVid.defaultPlaybackRate = playbackSpeed;
      multiVid1.defaultPlaybackRate = playbackSpeed;
      multiVid2.defaultPlaybackRate = playbackSpeed;
      multiVid3.defaultPlaybackRate = playbackSpeed;
      multiVid4.defaultPlaybackRate = playbackSpeed;
      multiVid5.defaultPlaybackRate = playbackSpeed;
      multiVid6.defaultPlaybackRate = playbackSpeed;
      multiVid7.defaultPlaybackRate = playbackSpeed;
      multiVid8.defaultPlaybackRate = playbackSpeed;
      multiVid9.defaultPlaybackRate = playbackSpeed;
      multiVid10.defaultPlaybackRate = playbackSpeed;
    }
  }

  // Start the drops timer
  setInterval(dropsStart, dropsInterval);

  // Check query inputs
  console.log(`Channel is set to ${params.channel}`);
  console.log(`UID is set to ${params.uid}`);
  console.log(`OAuth is set to ${params.oauth}`);
  console.log(`5★ percentage is set to ${sr_percentage}`);
  console.log(`3★ percentage is set to ${c_percentage}`);
  console.log(`3★ prize is ${params.three}`);
  console.log(`4★ prize is ${params.four}`);
  console.log(`5★ prize is ${params.five}`);
  console.log(`Command Cost is ${cost}`);
  console.log(`Pity is ${pity}`);
  console.log(`Drops Amount is ${dropsRewards}`);
  console.log(`Drops Interval is ${dropsInterval / 1000} seconds`);
  console.log(`Playback Speed is ${params.speed}`);
}

// *************************
// Set command delay (5 seconds)
// *************************
function isCooldown() {
  if (lastCommand >= (Date.now() - delay)) {
    return true;
  } else {
    return false;
  }
}

// *************************
// Functionality for !wqueue
// *************************
function cmdWishQueue() {
  let infoList = [];
  queue.forEach(info => {
    // User1(10),User2(5),...,User10(1)
    infoList.push(info.user+`(${info.wishcount})`)
    console.log("[cmdWishQueue] infoList: " + infoList);
  })
  // Checks the current queue for the wish command (available for streamer and mods only)
  sendChatMessage(`Current wish queue is: ${infoList}`);
}

// *************************
// Functionality for !wconfig
// *************************
function cmdWishConfig() {
  sendChatMessage(`5★(${sr_percentage}) | 3★(${c_percentage}) | 5p★(${SRPool[0].value}) | 4p★(${RPool[0].value}) | 3p★(${CPool[0].value}) | Cost(${cost}) | Pity(${pity}) | Speed(${playbackSpeed}) | Drops(${dropsRewards}) | DropsInterval(${dropsInterval/1000} secs)`)
}

// *************************
// Functionality for !wlist
// *************************
function cmdWishList(user, message) {
  if (message === '') {
    sendChatMessage(`${user}, !wlist [3/4/5] for list of characters/weapons available`);
  } else {
    let output = [];
    switch (message) {
      case '3': CPool.forEach(item => {output.push(item.dbname)}); sendChatMessage(`List of 3★: ${output}`); break;
      case '4': RPool.forEach(item => {output.push(item.dbname)}); sendChatMessage(`List of 4★: ${output}`); break;
      case '5': SRPool.forEach(item => {output.push(item.dbname)}); sendChatMessage(`List of 5★: ${output}`); break;
      default: sendChatMessage(`${user}, !wlist [3/4/5] for list of characters/weapons available`);
    }
  }
}

// *************************
// Functionality for !wreset
// *************************
function cmdWishReset(user, message) {
  // [TBD] Might now be needed anymore. Will remove if no instance is used for a long time...
  sendChatMessage(`Wish Simulator is now resetting...`)
  vidReset();
}

// *************************
// Functionality for !wadd
// *************************
function cmdWishAdd(user, message) {
  if (message === '') {
    // Outputs the how-to use of the command
    sendChatMessage(`${user}, !wadd <username> <amount>`);
  } else {
    // Split the message twice, delimited by space
    const msgSplit = message.split(" ", 2);
    console.log("[cmdWishAdd] msgSplit: " + msgSplit);

    // Check target user to add points
    // Remove @ in user parameter if existing
    let target;
    if (msgSplit[0].charAt(0) == '@') {
      target = msgSplit[0].substr(1, msgSplit[0].length);
    } else {
      target = msgSplit[0];
    }
    console.log("[cmdWishAdd] target: " + target);

    // Check amount parameter
    let checkedAmount = Number(msgSplit[1]) | 0;
    if (isNaN(checkedAmount) || !Number.isInteger(checkedAmount) || checkedAmount == 0) {
      sendChatMessage(`${user}, please input a valid number`);
      return;
    }
    console.log("[cmdWishAdd] checkedAmount: " + checkedAmount);

    // If user has no record in DB yet, create a new record
    if (undefined === dbRef[target]) {
      dbRef[target] = {
        pity: 0,
        primogems: checkedAmount
      };
    } else {
      dbRef[target].primogems += checkedAmount;
    }
    sendChatMessage(`Adding ${checkedAmount} Primogems to ${target}!`);
  }
}

// *************************
// Functionality for !wclaim
// *************************
function cmdWishClaim(user) {
  // Process only when drops is ongoing
  if (drops) {
    let obj = dropsQueue.find(o => o === user);
    if (obj != undefined) {
      sendChatMessage(`${user}, you are already in queue... wideKokoAngry`)
      return;
    } else {
      dropsQueue.push(user);
    }
    console.log("[cmdWishClaim] dropsQueue: " + dropsQueue);
  } else {
    sendChatMessage(`${user}, There is no running drops currently... wideKokoSigh`)
  }
}

// *************************
// Functionality for !wcheck
// *************************
function cmdWishCheck(user, message) {
  if (message === '') {
    // Outputs the how-to use of the command
    sendChatMessage(`${user}, !wcheck [3/4/5/<char>/<weap>] for list of characters/weapons in your inventory`);
  } else {
    let output = [];
    let userItems = dbRef[user];
    if (undefined === userItems) {
      sendChatMessage(`${user}, you have no characters/weapons yet...`);
    } else {
      switch (message) {
        case '3': CPool.forEach(item => {userItems[item.dbname] !== undefined ? output += `${item.dbname}(${userItems[item.dbname].constellation}), ` : false}); sendChatMessage(`${user}'s list of 3★: ${output.slice(0,-2)}`); break;
        case '4': RPool.forEach(item => {userItems[item.dbname] !== undefined ? output += `${item.dbname}(${userItems[item.dbname].constellation}), ` : false}); sendChatMessage(`${user}'s list of 4★: ${output.slice(0,-2)}`); break;
        case '5': SRPool.forEach(item => {userItems[item.dbname] !== undefined ? output += `${item.dbname}(${userItems[item.dbname].constellation}), ` : false}); sendChatMessage(`${user}'s list of 5★: ${output.slice(0,-2)}`); break;
        default:
          let dbName = "";
          // Maps the item with the known alternative names
          SRPool.forEach(item => { if (item.altname.includes(message)) dbName = item.dbname; });
          RPool.forEach(item => { if (item.altname.includes(message)) dbName = item.dbname; });
          CPool.forEach(item => { if (item.altname.includes(message)) dbName = item.dbname; });
          console.log("[cmdWishCheck] dbName: " + dbName);

          let dbItem = dbRef[user][dbName];
          if (undefined === dbItem) {
            sendChatMessage(`${user} does not have that character/weapon yet`);
          } else {
            sendChatMessage(`${user}'s ${dbName} constellation is ${dbItem.constellation}`);
          }
      }
    }
  }
}

// *************************
// Functionality for !wsell
// *************************
function cmdWishSell(user, message) {

  if (message === '') {
    // Outputs the how-to use of the command
    sendChatMessage(`${user}, !wsell "[<char>/<weap>]" [amount] | Values: 3★(10), 4★(160), 5★(480)`);
  } else {

    const inputCheckPattern = /^[\"][a-zA-Z]+\s*[a-zA-Z]*[\"]+\s+[0-9]+$/;
    const itemPattern = /[\"][a-zA-Z]+\s*[a-zA-Z]*[\"]/;
    const amountPattern = /\s+[0-9]+$/;

    // Test that the expected format of the command is followed
    if (!inputCheckPattern.test(message)) {
      sendChatMessage(`${user}, please check inputs.. !wsell "[<char>/<weap>]" [amount]`);
      return;
    }
    console.log("[cmdWishSell] message: " + message);

    // Get the item/amount input (e.g. !wsell "Sangonomiya kokomi" 6)
    //    item = sangonomiya kokomi
    //    amount = 6
    let item = itemPattern.exec(message)[0].trim().replaceAll("\"", "");
    let amount = amountPattern.exec(message)[0].trim();
    console.log("[cmdWishSell] item: " + item);
    console.log("[cmdWishSell] amount: " + amount);

    if (amount == 0) {
      sendChatMessage(`${user}, please input amount other than 0.. wideKokoSigh`);
      return;
    }

    let rarityValue = 0;
    SRPool.forEach(val => { if (val.altname.includes(item)) { item = val.dbname; rarityValue = val.value }});
    RPool.forEach(val => { if (val.altname.includes(item)) { item = val.dbname; rarityValue = val.value }});
    CPool.forEach(val => { if (val.altname.includes(item)) { item = val.dbname; rarityValue = val.value }});

    console.log("[cmdWishSell] mapped item: " + item);
    console.log("[cmdWishSell] rarityValue: " + rarityValue);

    let dbItem = dbRef[user][item];
    if (dbItem == undefined || dbItem == isNaN()) {
      sendChatMessage(`${user} does not have any [${item}] to sell.. wideKokoSigh`);
    } else if (dbItem.constellation + 1 < amount) {
      // Constellation starts at 0
      sendChatMessage(`${user} does not have enough [${item}] to sell.. wideKokoSigh`);
    } else {
      if (dbItem.constellation + 1 == amount) {
        // Delete the entry in DB if all items are sold
        dbRef[user][item] = undefined;
      } else {
        // Decrease the constellations based on the amount
        dbRef[user][item].constellation -= amount;
      }

      // Increase the primogems based on the amount
      let calcAmount = 0;
      switch(rarityValue) {
        case five_star_prize: calcAmount += (amount * 480); break;
        case four_star_prize: calcAmount += (amount * 160); break;
        case three_star_prize: calcAmount += (amount * 10); break;
      }
      let beforeAmount = dbRef[user].primogems;
      dbRef[user].primogems += calcAmount;
      sendChatMessage(`${user} sold [${item}(${amount})] GanyuNom | [${beforeAmount}(+${calcAmount})] Primogems`);
    }
  }
}

// *************************
// Functionality for !wstats
// *************************
function cmdWishStats(user) {
  sendChatMessage(`${user}'s stats: Primogems(${dbRef[user].primogems}) | Pity(${dbRef[user].pity})`);
}

// *************************
// Functionality for !w / !wish
// *************************
function cmdWish(user, message) {

  // Check if user is already in the queue
  let obj = queue.find(o => o.user === user);
  if (obj != undefined) {
    sendChatMessage(`${user}, you are already in wish queue... wideKokoAngry`)
    return;
  }

  const msgSplit = message.split(" ", 2);
  if (msgSplit[0] === '') {
    queue.push({
      wishcount: '1',
      user: user
    })
  } else {
    // remove decimal value if any
    let verify = Number(msgSplit[0].trim()) | 0;
    // Check if message is a number, within 1~10 range and it is an integer
    if (isNaN(verify) || !(verify >= 1 && verify <= 10) || !Number.isInteger(verify)){
      sendChatMessage(`${user}, please input blank(1 wish) or 1~10 only`);
    } else {
      queue.push({
        wishcount: verify.toString(),
        user: user
      })
    }
  }
}

// ***********
// ENTRY POINT
// ***********

initializeVideoElement();
initializeMultiVideoStartElement();
initializeMultiVideo1Element();
initializeMultiVideo2Element();
initializeMultiVideo3Element();
initializeMultiVideo4Element();
initializeMultiVideo5Element();
initializeMultiVideo6Element();
initializeMultiVideo7Element();
initializeMultiVideo8Element();
initializeMultiVideo9Element();
initializeMultiVideo10Element();

// Receives text from ! commands
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {

  if (errFlg) {
    return;
  }
  user = user.trim().toLowerCase();
  command = command.trim().toLowerCase();
  message = message.trim().toLowerCase();

  // Add DB information if first-time user
  if (undefined === dbRef[user]) {
    dbRef[user] = {
      pity: 0,
      primogems: 0
    };
  }

  // console.log(user);
  // console.log(command);
  // console.log(message);
  // console.log(flags);
  // console.log(extra);
  if (command === 'wqueue' && (flags.broadcaster || flags.mod)) {
    cmdWishQueue();
  } else if ((command === 'wconfig') && (flags.broadcaster || flags.mod)) {
    cmdWishConfig();
  } else if (command === 'wlist' && (flags.broadcaster || flags.mod)) {
    cmdWishList(user, message);
  } else if (command === 'wreset' && (flags.broadcaster || flags.mod)) {
    cmdWishReset();
  } else if (command === 'wadd' && (flags.broadcaster || flags.mod)) {
    cmdWishAdd(user, message);
  } else if (command === 'wclaim') {
    cmdWishClaim(user);
  } else if (command === 'wcheck') {
    if (isCooldown()) {return;}
    lastCommand = Date.now();
    cmdWishCheck(user, message);
  } else if (command === 'wsell') {
    if (isCooldown()) {return;}
    lastCommand = Date.now();
    cmdWishSell(user, message);
  } else if (command === 'wstats') {
    if (isCooldown()) {return;}
    lastCommand = Date.now();
    cmdWishStats(user);
  } else if (command === 'wcredits') {
    if (isCooldown()) {return;}
    lastCommand = Date.now();
    sendChatMessage(`Wish Simulator v${version} is created by SpeedL twitch.tv/xivalex SpeedR `)
  } else if (command === 'wcommands') {
    if (isCooldown()) {return;}
    lastCommand = Date.now();
    sendChatMessage(`Available commands: [MODS] !wqueue, !wconfig, !wlist, !wreset, !wadd <user> <amount> || [ALL] !wclaim, !wcheck, !wsell, !wstats, !wcredits, !wish/!w <blank/1~10>`)
  } else {
    // Check if the command is !wish
    if (command !== "wish" && command !== "w") {return};
    cmdWish(user, message);
  }
}

checkQueryParameters();
