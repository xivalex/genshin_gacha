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
// ********************************************************************************

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, ref, child, get, set, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// ***************
// DEFAULT VALUES
// ***************
let __JWT_TOKEN__ = "";
let __CHANNEL_ID__ = "";
let __CHANNEL_NAME__ = "";

let volume = 100 // 0 ~ 100 value only
let sr_percentage = 1 // % on winning a 5★
let c_percentage = 80 // % on winning a 3★
let points_name = "Primogems";
let cost = 160
let five_star_prize = 2000;
let four_star_prize = 300;
let three_star_prize = 0;
let pity = 30;

let video;
let source;
let multiVideo;
let multiSource;
let SRPool = [];  // 5★
let RPool = [];   // 4★
let CPool = [];   // 3★
let allowed = true;
let displayName;
let userInfo = {};
let randomVid = {};
let queue = [];
let dbRef = {};
let wishcount = 0;
let wishPool = [];
let withSR = false;
let multiPoints = 0;
let videoPath;

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

// TBD: Automate retrieve file name/path/value (maybe..)
SRPool.push(
  {
    path: `/5star_albedo_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Albedo",
    dbname: 'Albedo'
  },
  {
    path: `/5star_eula_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Eula",
    dbname: 'Eula'
  },
  {
    path: `/5star_keqing_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Keqing",
    dbname: 'Keqing'
  },
  {
    path: `/5star_kokomi_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Sangonomiya Kokomi",
    dbname: 'Sangonomiya Kokomi'
  },
  {
    path: `/5star_yae_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Yae Miko",
    dbname: 'Yae Miko'
  },
  {
    path: `/5star_ayato_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Kamisato Ayato",
    dbname: 'Kamisato Ayato'
  },
  {
    path: `/5star_ayaka_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Kamisato Ayaka",
    dbname: 'Kamisato Ayaka'
  },
  {
    path: `/5star_diluc_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Diluc",
    dbname: 'Diluc'
  },
  {
    path: `/5star_ganyu_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Ganyu",
    dbname: 'Ganyu'
  },
  {
    path: `/5star_hutao_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Hu Tao",
    dbname: 'Hu Tao'
  },
  {
    path: `/5star_itto_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Arataki Itto",
    dbname: 'Arataki Itto'
  },
  {
    path: `/5star_jade_cutter_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Primordial Jade Cutter",
    dbname: 'Primordial Jade Cutter'
  },
  {
    path: `/5star_Jean_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Jean",
    dbname: 'Jean'
  },
  {
    path: `/5star_kazuha_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Kaedehara Kazuha",
    dbname: 'Kaedehara Kazuha'
  },
  {
    path: `/5star_klee_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Klee",
    dbname: 'Klee'
  },
  {
    path: `/5star_Mona_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Mona",
    dbname: 'Mona'
  },
  {
    path: `/5star_Qiqi_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Qiqi",
    dbname: 'Qiqi'
  },
  {
    path: `/5star_raiden_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Raiden Shogun",
    dbname: 'Raiden Shogun'
  },
  {
    path: `/5star_shenhe_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Shenhe",
    dbname: 'Shenhe'
  },
  {
    path: `/5star_skyward_pride_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Skyward Pride",
    dbname: 'Skyward Pride'
  },
  {
    path: `/5star_tartaglia_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Tartaglia",
    dbname: 'Tartaglia'
  },
  {
    path: `/5star_Tighnari_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Tighnari",
    dbname: 'Tighnari'
  },
  {
    path: `/5star_venti_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Venti",
    dbname: 'Venti'
  },
  {
    path: `/5star_xiao_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Xiao",
    dbname: 'Xiao'
  },
  {
    path: `/5star_yelan_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Yelan",
    dbname: 'Yelan'
  },
  {
    path: `/5star_yoimiya_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Yoimiya",
    dbname: 'Yoimiya'
  },
  {
    path: `/5star_zhongli_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Zhongli",
    dbname: 'Zhongli'
  },
  {
    path: `/5star_cyno_VP8.webm`,
    value: five_star_prize,
    name: "★★★★★ Cyno",
    dbname: 'Cyno'
  },
)

RPool.push(
  {
    path: `/4star_bennett_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Bennett",
    dbname: 'Bennett'
  },
  {
    path: `/4star_dbane_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Dragon's Bane",
    dbname: "Dragon's Bane"
  },
  {
    path: `/4star_diona_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Diona",
    dbname: 'Diona'
  },
  {
    path: `/4star_fav_warbow_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Favonius Warbow",
    dbname: 'Favonius Warbow'
  },
  {
    path: `/4star_flute_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ The Flute",
    dbname: 'The Flute'
  },
  {
    path: `/4star_lions_roar_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Lion's Roar",
    dbname: "Lion's Roar"
  },
  {
    path: `/4star_ning_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Ningguang",
    dbname: 'Ningguang'
  },
  {
    path: `/4star_noelle_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Noelle",
    dbname: 'Noelle'
  },
  {
    path: `/4star_rainslasher_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Rainslasher",
    dbname: 'Rainslasher'
  },
  {
    path: `/4star_rosaria_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Rosaria",
    dbname: 'Rosaria'
  },
  {
    path: `/4star_yunjin_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Yun Jin",
    dbname: 'Yun Jin'
  },
  {
    path: `/4star_rust_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Rust",
    dbname: 'Rust'
  },
  {
    path: `/4star_sac_greatsword_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sacrificial Greatsword",
    dbname: 'Sacrificial Greatsword'
  },
  {
    path: `/4star_sacrificial_sword_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sacrificial Sword",
    dbname: 'Sacrificial Sword'
  },
  {
    path: `/4star_stringless_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ The Stringless",
    dbname: 'The Stringless'
  },
  {
    path: `/4star_the_bell_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ The Bell",
    dbname: 'The Bell'
  },
  {
    path: `/4star_thoma_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Thoma",
    dbname: 'Thoma'
  },
  {
    path: `/4star_xingqiu_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xingqiu",
    dbname: 'Xingqiu'
  },
  {
    path: `/4star_xinyan_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xinyan",
    dbname: 'Xinyan'
  },
  {
    path: `/4star_yanfei_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Yanfei",
    dbname: 'Yanfei'
  },
  {
    path: `/4star_amber_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Amber",
    dbname: 'Amber'
  },
  {
    path: `/4star_barbara_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Barbara",
    dbname: 'Barbara'
  },
  {
    path: `/4star_beidou_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Beidou",
    dbname: 'Beidou'
  },
  {
    path: `/4star_chongyun_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Chongyun",
    dbname: 'Chongyun'
  },
  {
    path: `/4star_collei_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Collei",
    dbname: 'Collei'
  },
  {
    path: `/4star_dori_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Dori",
    dbname: 'Dori'
  },
  {
    path: `/4star_fischl_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Fischl",
    dbname: 'Fischl'
  },
  {
    path: `/4star_gorou_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Gorou",
    dbname: 'Gorou'
  },
  {
    path: `/4star_kaeya_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Kaeya",
    dbname: 'Kaeya'
  },
  {
    path: `/4star_Kuki_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Kuki Shinobu",
    dbname: 'Kuki Shinobu'
  },
  {
    path: `/4star_yanfei_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Yanfei",
    dbname: 'Yanfei'
  },
  {
    path: `/4star_razor_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Razor",
    dbname: 'Razor'
  },
  {
    path: `/4star_sara_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Kujou Sara",
    dbname: 'Kujou Sara'
  },
  {
    path: `/4star_sayu_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sayu",
    dbname: 'Sayu'
  },
  {
    path: `/4star_sucrose_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Sucrose",
    dbname: 'Sucrose'
  },
  {
    path: `/4star_xiangling_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Xiangling",
    dbname: 'Xiangling'
  },
  {
    path: `/4star_candace_VP8.webm`,
    value: four_star_prize,
    name: "★★★★ Candace",
    dbname: 'Candace'
  },
)

CPool.push(
  {
    path: `/3star_black_tassel_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Black Tassel",
    dbname: 'Black Tassel'
  },
  {
    path: `/3star_bloodstained_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Bloodtainted Greatsword",
    dbname: 'Bloodtainted Greatsword'
  },
  {
    path: `/3star_cool_steel_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Cool Steel",
    dbname: 'Cool Steel'
  },
  {
    path: `/3star_debate_club_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Debate Club",
    dbname: 'Debate Club'
  },
  {
    path: `/3star_emerald_orb_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Emerald Orb",
    dbname: 'Emerald Orb'
  },
  {
    path: `/3star_ferrous_shadow_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Ferrous Shadow",
    dbname: 'Ferrous Shadow'
  },
  {
    path: `/3star_hod_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Harbinger of Dawn",
    dbname: 'Harbinger of Dawn'
  },
  {
    path: `/3star_magic_guide_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Magic Guide",
    dbname: 'Magic Guide'
  },
  {
    path: `/3star_raven_bow_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Raven Bow",
    dbname: 'Raven Bow'
  },
  {
    path: `/3star_sharpshooter_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Sharpshooter's Oath",
    dbname: "Sharpshooter's Oath"
  },
  {
    path: `/3star_skyrider_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Skyrider Sword",
    dbname: 'Skyrider Sword'
  },
  {
    path: `/3star_slingshot_temp_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Slingshot",
    dbname: 'Slingshot'
  },
  {
    path: `/3star_ttds_VP8.webm`,
    value: three_star_prize,
    name: "★★★ Thrilling Tales of Dragon Slayers",
    dbname: 'Thrilling Tales of Dragon Slayers'
  },
)

function getDb() {
  const reference = ref(getDatabase());
  get(child(reference, __CHANNEL_NAME__ )).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      dbRef = snapshot.val();
    } else {
      // If this is the first time the streamer uses the simulator
      console.log("No data available");
      const db = getDatabase();
      set(ref(db, __CHANNEL_NAME__ + '/' + __CHANNEL_NAME__), {
        pity: 0
      });
      get(child(reference, __CHANNEL_NAME__ )).then((snapshot) => {
        dbRef = snapshot.val();
      });
    }
  }).catch((error) => {
    console.error(error);
  });
}

function initializeVideoElement() {
  video = document.getElementById("video");
  source = document.getElementById("source");

  video.onloadstart = function () {
    console.log("Video is now loaded");
  };

  video.oncanplaythrough = function () {
    console.log("Video can now play");
    video.play();
  }

  video.onended = function () {
    console.log("Video Ended")
    video.setAttribute("hidden", "hidden");

    if (randomVid.value != 0) {
      addPoints(displayName, randomVid.value)
      .then(response => response.json())
      .then(_data => {
          sendChatMessage(`Congratulations! ${displayName} just wished for [${randomVid.name}] and ${randomVid.value} ${points_name} has been added | ${points_name}: ${_data.newAmount} | pity: ${dbRef[displayName].pity}`);
          wishcount = 0;
          wishPool = [];
          videoPath = '';
          allowed = true;
      });
    } else {
        getUser(displayName)
        .then(response => response.json())
        .then(_data => {
            sendChatMessage(`${displayName} just wished for [${randomVid.name}] | ${points_name}: ${_data.points} | pity: ${dbRef[displayName].pity}`);
            wishcount = 0;
            wishPool = [];
            videoPath = '';
            allowed = true;
        });
    }
  }

}

function initializeMultiVideoElement() {
  multiVideo = document.getElementById("multiVid");
  multiSource = document.getElementById("multiSource");

  multiVideo.onloadstart = function () {
    console.log("Video is now loaded");
  };

  multiVideo.oncanplaythrough = function () {
    console.log("Video can now play");
    multiVideo.play();
  }

  multiVideo.onended = function () {
    let video = wishPool.shift();
    if (video != undefined) {
      multiPoints += video.value;
      multiSource.setAttribute("src", videoPath + video.path);
      multiVideo.load();
      return;
    }
    console.log("Video Ended")
    multiVideo.setAttribute("hidden", "hidden");

    addPoints(displayName, multiPoints)
    .then(response => response.json())
    .then(_data => {
      sendChatMessage(`${displayName} just wished for ${wishcount} times and ${multiPoints} ${points_name} has been added | ${points_name}: ${_data.newAmount} | pity: ${dbRef[displayName].pity}`);
      wishcount = 0;
      multiPoints = 0;
      wishPool = [];
      videoPath = '';
      allowed = true;
    });
  }

}

function randomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sendChatMessage(msg) {
  fetch(`https://api.streamelements.com/kappa/v2/bot/${__CHANNEL_ID__}/say`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${__JWT_TOKEN__}`
    },
    body: JSON.stringify({message: msg})
  });
}

function getUser(user) {
  return fetch(`https://api.streamelements.com/kappa/v2/points/${__CHANNEL_ID__}/${user}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${__JWT_TOKEN__}`
    }
  });
}

function addPoints(user, amount) {
  return fetch(`https://api.streamelements.com/kappa/v2/points/${__CHANNEL_ID__}/${user}/${amount}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${__JWT_TOKEN__}`
    }
  });
}

var intervalIdDb = setInterval(async function() {
  // Saves current with info every 1 minute
  const db = getDatabase();

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates[__CHANNEL_NAME__] = dbRef;

  return update(ref(db), updates);

}, 60000);

var intervalIdWish = setInterval(async function() {

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
      // Prevent any video from playing
      allowed = false;
      let wishcost = wishcount * cost;

      // Get user info in StreamElements
      await getUser(displayName)
      .then(response => response.json())
      .then(_data => { userInfo = _data; });

      // Check if user has enough points
      if (userInfo.points < wishcost) {
        sendChatMessage(`${displayName} do not have enough ${points_name} to wish | ${points_name}: ${userInfo.points} | Required: ${wishcost}`);
        allowed = true;
        return;
      }

      // Deduct the points
      await addPoints(displayName, -wishcost);

      console.log('Starting wish session...');
      sendChatMessage(`${displayName}'s wish is now ongoing...`);

      // If user has no record in DB yet, create a new record
      if (undefined === dbRef[displayName]) {
        dbRef[displayName] = {
          pity: 0
        };
      }

      if (wishcount == 1) {
        videoPath = "./videos"
      } else {
        videoPath = "./videos_multi"
      }
      multiWish();
    }

  }

}, 3000);

function multiWish() {
  let chosenPool;

  for (let i = 0; i < wishcount; i++) {
    if (dbRef[displayName].pity === pity) {
      // Default the video pool to SR due to pity
      chosenPool = SRPool;
      withSR = true;
    } else {
      // Randomize if SRPool/RPool/CPool and retrieve a video from the pool
      chosenPool = (Math.random() < ( sr_percentage / 100)) ? SRPool :
                  ((Math.random() < ( c_percentage / 100)) ? CPool : RPool);
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
      case SRPool[0].value: dbRef[displayName].pity = 0; withSR = true; break;
      // If not SR, increase pity by 1
      default: dbRef[displayName].pity += 1;
    }

    // Store the vid info
    wishPool.push(randomVid);
  }

  // console.log('The current wishpool is:');
  // console.log(wishPool);

  if (wishPool.length == 1) {
    // Show the element
    video.removeAttribute("hidden");

    // Set the video as the source of the element and play it
    source.setAttribute("src", `${videoPath}${wishPool[0].path}`);
    video.load();
    video.volume = volume / 100;

  } else {
    // Show the element
    multiVideo.removeAttribute("hidden");

    // Set the start of the video
    if (withSR) {
      multiSource.setAttribute("src", `${videoPath}/5star_template_VP8.webm`);
    } else {
      multiSource.setAttribute("src", `${videoPath}/4star_template_VP8.webm`);
    }
    withSR = false;
    // source.setAttribute("src", `${videoPath}`);
    multiVideo.load();
    multiVideo.volume = volume / 100;
  }


}

function checkQueryParameters() {

  // Retrieve the query parameters required for authentication
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  __JWT_TOKEN__ = params.jwt;
  __CHANNEL_ID__ = params.id;
  __CHANNEL_NAME__ = params.channel;

  getDb();

  // Set the volume of the video
  if (params.volume) {
    let vol = Number(params.volume);
    if (isNaN(vol) || !(vol >= 0 && vol <= 100)){
      console.log("value for params.volume is invalid");
    } else {
      volume = vol;
    }
  }

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

  // Set the pointsname used in the channel
  if (params.points) {
    points_name = params.points;
  }

  // Check query inputs
  console.log(`Volume is set to ${volume}`);
  console.log(`5★ percentage is set to ${sr_percentage}`);
  console.log(`3★ percentage is set to ${c_percentage}`);
  console.log(`3★ prize is ${params.three}`);
  console.log(`4★ prize is ${params.four}`);
  console.log(`5★ prize is ${params.five}`);
  console.log(`Command Cost is ${cost}`);
  console.log(`Points Name is ${points_name}`);
  console.log(`Pity is ${pity}`);

  // Send a message in chat to verify the settings of the browser
  if (params.check) {
    sendChatMessage(`Volume(${volume}) | 5★(${sr_percentage}) | 3★(${c_percentage}) | 5p★(${SRPool[0].value}) | 4p★(${RPool[0].value}) | 3p★(${CPool[0].value}) | Cost(${cost}) | Name(${points_name}) | Pity(${pity})`)
  }
}

// ***********
// ENTRY POINT
// ***********

initializeVideoElement();
initializeMultiVideoElement();

// Receives text from !
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {

  // console.log(user);
  // console.log(command);
  // console.log(message);
  // console.log(flags);
  // console.log(extra);

  if (command === 'wishqueue' && (flags.broadcaster || flags.mod)) {
    let infoList = [];
    queue.forEach(info => {
      infoList.push(info.user+`(${info.wishcount})`)
    })
    // Checks the current queue for the wish command (available for streamer and mods only)
    sendChatMessage(`Current wish queue is: ${infoList}`);
  } else if (command === 'wishinfo' && (flags.broadcaster || flags.mod)) {
    sendChatMessage(`Volume(${volume}) | 5★(${sr_percentage}) | 3★(${c_percentage}) | 5p★(${SRPool[0].value}) | 4p★(${RPool[0].value}) | 3p★(${CPool[0].value}) | Cost(${cost}) | Name(${points_name}) | Pity(${pity})`)
  } else if (command === 'wishcheck') {
    if (undefined === dbRef[user][message]) {
      sendChatMessage(`${user} does not have that character yet`);
    } else {
      sendChatMessage(`${user}'s ${message} constellation is ${dbRef[user][message].constellation}`);
    }
  } else if (command === 'wishpity') {
      sendChatMessage(`${user}'s current pity count is ${dbRef[user].pity}`);
  } else if (command === 'wishcommand') {
      sendChatMessage(`List of commands are: !wishqueue(mods), !wishinfo(mods), !wishcheck <char/weap>, !wishpity, !wish`)
  } else {
    // Check if the command is !wish
    if (command !== "wish") {return};

    let verify = Number(message);
    if (isNaN(verify) || !(verify >= 1 && verify <= 10) || !Number.isInteger(verify)){
      sendChatMessage(`${user} inputted invalid wish parameter!`);
    } else {
      let userQueue = {};
      userQueue.wishcount = message;
      userQueue.user = user;

      let obj = queue.find(o => o.user === user);

      // Add the user in the queue if not yet included
      if (obj != undefined) {return}
      else {
        queue.push(userQueue)
      };
    }
  }

}

checkQueryParameters();

// Connects the script to the channel name to track commands
ComfyJS.Init( __CHANNEL_NAME__ );